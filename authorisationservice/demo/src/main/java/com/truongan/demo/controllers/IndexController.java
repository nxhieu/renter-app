package com.truongan.demo.controllers;

import java.util.Collections;
import java.util.Map;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/callBack")
public class IndexController {
    @RequestMapping(value = "", produces = MediaType.APPLICATION_JSON_VALUE)
    public Map getResult() {
        return Collections.singletonMap("response", "your string value1");
    }
}