package com.truongan.demo.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/callBack")
public class IndexController {
    @GetMapping
    public String getResult() {
        return "log in";
    }
}