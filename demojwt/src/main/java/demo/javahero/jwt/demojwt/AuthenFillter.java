/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package demo.javahero.jwt.demojwt;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import java.io.IOException;
import java.nio.file.attribute.UserPrincipal;
import java.util.Collections;
import java.util.Date;
import javax.servlet.FilterChain;
import javax.servlet.GenericFilter;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.AbstractAuthenticationProcessingFilter;
import org.springframework.security.web.util.matcher.RequestMatcher;

/**
 *
 * @author Admin
 */
public class AuthenFillter extends AbstractAuthenticationProcessingFilter {
    
    public AuthenFillter(String defaultFilterProcessesUrl, AuthenticationManager manager) {
        super(defaultFilterProcessesUrl);
        setAuthenticationManager(manager);
    }
    
    public AuthenFillter(RequestMatcher requiresAuthenticationRequestMatcher) {
        super(requiresAuthenticationRequestMatcher);
    }
    
    @Override
    public Authentication attemptAuthentication(HttpServletRequest hsr, HttpServletResponse hsr1) throws AuthenticationException, IOException, ServletException {
        //moi lan goi login thi chay ham nay
        String user = hsr.getParameter("username");
        String pass = hsr.getParameter("password");
        
        System.out.println("login: " + user);
        System.out.println("login: " + pass);
        
        return getAuthenticationManager().authenticate(new UsernamePasswordAuthenticationToken(user, pass, Collections.emptyList()));
    }
    
    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain, Authentication authResult) throws IOException, ServletException {
//        String user = request.getParameter("username");
//        String pass = request.getParameter("password");
        System.out.println("login thanh cong.............." + authResult.getPrincipal());
        UserDetails userDetails = (UserDetails) authResult.getPrincipal();
        SecurityContextHolder.getContext().setAuthentication(authResult);
        System.out.println("login thanh cong: " + userDetails.getUsername());
        //tao token va gui ve client thong qua header
        String token = Jwts.builder().setSubject(userDetails.getUsername())
                .signWith(SignatureAlgorithm.HS512, "KeyBiMat")
                .setExpiration(new Date(System.currentTimeMillis() + 1000l * 60 * 60 * 24))
                .claim("pass", request.getParameter("password"))
                .claim("role", userDetails.getAuthorities())
                .compact();
        response.addHeader("token", token);
        
    }
    
}
