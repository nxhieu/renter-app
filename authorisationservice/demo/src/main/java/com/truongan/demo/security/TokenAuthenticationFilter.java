package com.truongan.demo.security;

import com.truongan.demo.util.CookieUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Optional;


public class TokenAuthenticationFilter extends OncePerRequestFilter {

    @Autowired
    private TokenService tokenService;
    @Autowired
    private CustomUserDetailsService customUserDetailsService;

//    @Autowired
//    public TokenAuthenticationFilter(TokenService tokenService, CustomUserDetailsService customUserDetailsService) {
//        this.tokenService = tokenService;
//        this.customUserDetailsService = customUserDetailsService;
//    }

    public TokenAuthenticationFilter() {
    }

    private static final Logger logger = LoggerFactory.getLogger(TokenAuthenticationFilter.class);


    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        try{
            Optional<Cookie> cookie_optional = CookieUtils.getCookie(request,"sessionId");
            if(cookie_optional.isPresent()){
                String token = cookie_optional.get().getValue();
                Long userId = tokenService.getUserIdFromToken(token);
                UserDetails userDetails = customUserDetailsService.loadUserById(userId);
                UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
                authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                // set context on Security context holder
                SecurityContextHolder.getContext().setAuthentication(authentication);
            }

        } catch (Exception ex){
            logger.error("Could not send user authenticaiton in security context");
        }

        filterChain.doFilter(request, response);
    }



}
