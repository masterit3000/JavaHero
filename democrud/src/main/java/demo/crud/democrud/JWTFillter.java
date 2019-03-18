/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package demo.crud.democrud;

import io.jsonwebtoken.*;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.impl.crypto.MacProvider;
import java.io.IOException;
import java.security.Key;
import java.util.Base64;
import java.util.Date;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.xml.bind.DatatypeConverter;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.token.TokenService;
import org.springframework.security.web.authentication.AbstractAuthenticationProcessingFilter;
import org.springframework.security.web.util.matcher.RequestMatcher;

/**
 *
 * @author Admin
 */
public class JWTFillter extends AbstractAuthenticationProcessingFilter {
    
    public JWTFillter(String defaultFilterProcessesUrl) {
        super(defaultFilterProcessesUrl);
    }
    
    public JWTFillter(String url, AuthenticationManager authManager) {
        super(url);
        setAuthenticationManager(authManager);
    }
    
    public JWTFillter(RequestMatcher requiresAuthenticationRequestMatcher) {
        super(requiresAuthenticationRequestMatcher);
    }
    
    @Override
    public Authentication attemptAuthentication(HttpServletRequest hsr, HttpServletResponse hsr1) throws AuthenticationException, IOException, ServletException {
        String user = hsr.getParameter("username");
        String pass = hsr.getParameter("password");
        System.out.println("login: " + user);
        System.out.println("login: " + pass);
        
        return getAuthenticationManager().authenticate(new UsernamePasswordAuthenticationToken(user, pass));
    }
    
    static final long EXPIRATIONTIME = 864_000_000; // 10 days

    static final String SECRET = "ThisIsASecret";
    
    static final String TOKEN_PREFIX = "Bearer";
    
    static final String HEADER_STRING = "Authorization";
    
    private static final Key secret = MacProvider.generateKey(SignatureAlgorithm.HS512);
    private static final byte[] secretBytes = secret.getEncoded();
    public static final String base64SecretBytes = Base64.getEncoder().encodeToString(secretBytes);
    
    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain, Authentication authResult) throws IOException, ServletException {
        
        String compact = Jwts.builder().setSubject(request.getParameter("username"))
                .setId("ffadasdsadsad")
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATIONTIME))
                .signWith(SignatureAlgorithm.HS512, base64SecretBytes)
                .claim("abccc", "ffffffff")
                .compact();
        response.addHeader(HEADER_STRING, TOKEN_PREFIX + compact);
        
    }
    
}
