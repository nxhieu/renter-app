package com.truongan.demo.controllers;


import com.truongan.demo.exception.ResourceNotFoundException;
import com.truongan.demo.model.User;
import com.truongan.demo.repository.UserRepository;
import com.truongan.demo.security.CurrentUser;
import com.truongan.demo.security.UserPrincipal;
import com.truongan.demo.util.CookieUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpRequest;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@RestController
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @GetMapping("/user/me")
    @PreAuthorize("hasRole('USER')")
    public User getCurrentUser(@CurrentUser UserPrincipal userPrincipal){
            return userRepository.findById(userPrincipal.getId()).orElseThrow(()-> new ResourceNotFoundException("User","id",userPrincipal.getId()));
    }

    @RequestMapping("/user/logout")
    public void signOut(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse){
        CookieUtils.deleteCookie(httpServletRequest, httpServletResponse, "sessionId");
    }



}
