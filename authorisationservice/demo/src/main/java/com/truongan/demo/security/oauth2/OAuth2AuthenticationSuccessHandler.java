        package com.truongan.demo.security.oauth2;

import static com.truongan.demo.security.HttpCookieOAuth2AuthorizationRequestRepository.REDIRECT_URI_PARAM_COOKIE_NAME;

import java.io.IOException;
import java.net.URI;
import java.util.Optional;

import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import ch.qos.logback.core.net.SyslogOutputStream;
import com.truongan.demo.config.AppProperties;
import com.truongan.demo.exception.BadRequestException;
import com.truongan.demo.model.User;
import com.truongan.demo.security.HttpCookieOAuth2AuthorizationRequestRepository;
import com.truongan.demo.security.TokenService;
import com.truongan.demo.security.UserPrincipal;
import com.truongan.demo.util.CookieUtils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;
import org.springframework.web.util.UriComponentsBuilder;

@Component
public class OAuth2AuthenticationSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {

    private AppProperties appProperties;

    private HttpCookieOAuth2AuthorizationRequestRepository httpCookieOAuth2AuthorizationRequestRepository;

    private TokenService tokenService;

    @Autowired
    OAuth2AuthenticationSuccessHandler(AppProperties appProperties,
            HttpCookieOAuth2AuthorizationRequestRepository httpCookieOAuth2AuthorizationRequestRepository, TokenService tokenService) {
        this.appProperties = appProperties;
        this.httpCookieOAuth2AuthorizationRequestRepository = httpCookieOAuth2AuthorizationRequestRepository;
        this.tokenService = tokenService;
    }

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
            Authentication authentication) throws IOException, ServletException {

        String targetUrl = determineTargetUrl(request, response, authentication);
        if (response.isCommitted()) {
            logger.debug("Response has already been committed. Unable to redirect to " + targetUrl);
            return;
        }
        // remove redirect URI and jsessionid from cookies
        Cookie[] cookies = request.getCookies();
        for(int i = 0; i < cookies.length; i++){
            String name = cookies[i].getName();
            String value = cookies[i].getValue();
        }
        // remove cookies that were not used
        clearAuthenticationAttributes(request,response);
        // add cookies from userId
        String token = tokenService.createToken(authentication);
        CookieUtils.addCookie(response, "sessionId", token, 86400);


        getRedirectStrategy().sendRedirect(request, response, targetUrl);

    }



    protected String determineTargetUrl(HttpServletRequest request, HttpServletResponse response,
            Authentication authentication) {
        Optional<String> redirectUri = CookieUtils.getCookie(request, REDIRECT_URI_PARAM_COOKIE_NAME)
                .map(Cookie::getValue);


        if (redirectUri.isPresent() && !isAuthorizedRedirectUri(redirectUri.get())) {
            throw new BadRequestException(
                    "Sorry! We've got an Unauthorized Redirect URI and can't proceed with the authentication");
        }
        System.out.println(redirectUri);
        String targetUrl = redirectUri.orElse(getDefaultTargetUrl());
        System.out.println(targetUrl);
        return UriComponentsBuilder.fromUriString(targetUrl).build().toUriString();
    }

    protected void clearAuthenticationAttributes(HttpServletRequest request, HttpServletResponse response) {
        System.out.println("df");
        super.clearAuthenticationAttributes(request);
        httpCookieOAuth2AuthorizationRequestRepository.removeAuthorizationRequestCookies(request, response);
    }

    /*
        To implement => change isAuthorized
    */
        private boolean isAuthorizedRedirectUri(String uri) {
        URI clientRedirectUri = URI.create(uri);
        return appProperties.getOauth2().getAuthorizedRedirectUris().stream().anyMatch(authorizedRedirectUri -> {
            // Only validate host and port. Let the clients use different paths if they want
            URI authorizedURI = URI.create(authorizedRedirectUri);
            if (authorizedURI.getHost().equalsIgnoreCase(clientRedirectUri.getHost())
                    && authorizedURI.getPort() == clientRedirectUri.getPort()) {
                return true;
            }
            return false;
        });
    }
}