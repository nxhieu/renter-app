package com.truongan.demo.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AdminDTO {
    private String password;
    @JsonProperty("id")
    private String userId;
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getId() {
        return userId;
    }

    public void setId(String id) {
        this.userId = id;
    }
}
