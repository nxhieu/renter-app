package com.truongan.demo.security;


import com.truongan.demo.config.AppProperties;
import com.truongan.demo.dto.AdminDTO;
import io.jsonwebtoken.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class AdminTokenService {
    private static final Logger logger = LoggerFactory.getLogger(TokenService.class);
    private final AppProperties appProperties;

    public AdminTokenService(AppProperties appProperties) {
        this.appProperties = appProperties;
    }

    public String createToken(AdminDTO adminDTO){
        Date now = new Date();
        Date expiryDate = new Date(now.getTime() + appProperties.getAdminAuth().getTokenExpirationMsec());
        return Jwts.builder()
                .setSubject(adminDTO.getUserId())
                .setIssuedAt(new Date())
                .setExpiration(expiryDate)
                .signWith(SignatureAlgorithm.HS512, appProperties.getAdminAuth().getTokenSecret())
                .compact();
    }

    public boolean validateToken(String authToken){
        try {
            Jwts.parser().setSigningKey(appProperties.getAdminAuth().getTokenSecret()).parseClaimsJws(authToken);
            return true;
        } catch (SignatureException ex) {
            logger.error("Invalid JWT signature");
        } catch (MalformedJwtException ex) {
            logger.error("Invalid JWT token");
        } catch (ExpiredJwtException ex) {
            logger.error("Expired JWT token");
        } catch (UnsupportedJwtException ex) {
            logger.error("Unsupported JWT token");
        } catch (IllegalArgumentException ex) {
            logger.error("JWT claims string is empty.");
        }
        return false;
    }


}
