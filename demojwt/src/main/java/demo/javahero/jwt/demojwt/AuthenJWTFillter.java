/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package demo.javahero.jwt.demojwt;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.LinkedHashMap;
import java.util.function.Consumer;
import java.util.stream.Collectors;
import javax.servlet.FilterChain;
import javax.servlet.GenericFilter;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import sun.net.www.content.text.Generic;

/**
 *
 * @author Admin
 */
public class AuthenJWTFillter extends GenericFilter {

    @Override
    public void doFilter(ServletRequest sr, ServletResponse sr1, FilterChain fc) throws IOException, ServletException {
        System.out.println("vào fillter jwt");

        HttpServletRequest request = (HttpServletRequest) sr;
        System.out.println(request.getRequestURI());
//        if (request.getRequestURI().equals("/login/")) {
//            fc.doFilter(sr, sr1);
////            return;
//        }
        String token = request.getHeader("token");
        if (token != null) {
            Claims body = Jwts.parser().setSigningKey("KeyBiMat").parseClaimsJws(token).getBody();
            String user = body.getSubject();
            String pass = body.get("pass", String.class);
            Collection<LinkedHashMap> role = body.get("role", Collection.class);
            Collection<GrantedAuthority> collectionRole = new ArrayList<>();
            role.stream().forEach(new Consumer<LinkedHashMap>() {
                @Override
                public void accept(LinkedHashMap t) {
                    String get = (String) t.get("authority");
                    System.out.println("role: " + get);
                    SimpleGrantedAuthority authority = new SimpleGrantedAuthority(get);
                    collectionRole.add(authority);
                }
            });

            System.out.println(role.size());
            System.out.println(pass);
            if (user != null && !user.isEmpty()) {
//                UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
//                if (user.equals(userDetails.getUsername())) {
                UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(user, pass, collectionRole);
                SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
                System.out.println("qua fillter");
                fc.doFilter(sr, sr1);
//                } else {
//                    SecurityContextHolder.getContext().setAuthentication(null);
//                }
            }
        }

    }

}
