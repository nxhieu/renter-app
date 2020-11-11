package com.truongan.demo.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.validation.constraints.NotBlank;


public class AdminDTO {

    @JsonProperty("id")
    @NotBlank(message = "Admin id required")
    private String userId;
    @NotBlank(message = "message is required")
    private String password;
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }
}
