/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package demo.crud.democrud;

import static demo.crud.democrud.JWTFillter.SECRET;
import io.jsonwebtoken.Jwts;
import java.io.IOException;
import java.util.Base64;
import java.util.Collections;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.GenericFilterBean;

/**
 *
 * @author Admin
 */
public class AuthenFillter extends GenericFilterBean {

    @Override
    public void doFilter(ServletRequest sr, ServletResponse sr1, FilterChain fc) throws IOException, ServletException {

        HttpServletRequest request = (HttpServletRequest) sr;

        String jwts = request.getHeader(JWTFillter.HEADER_STRING);
        if (jwts != null) {
            String subject = Jwts.parser().setSigningKey(JWTFillter.base64SecretBytes).
                    parseClaimsJws(jwts.replace(JWTFillter.TOKEN_PREFIX, "")).getBody().getSubject();
            System.out.println("token:" + subject);
//            String subject = Jwts.parser().
            UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(subject, null, Collections.emptyList());
            SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
            fc.doFilter(sr, sr1);
        }

    }

}
