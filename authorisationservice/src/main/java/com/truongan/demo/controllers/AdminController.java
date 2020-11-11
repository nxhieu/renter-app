package com.truongan.demo.controllers;


import com.truongan.demo.dto.AdminDTO;
import com.truongan.demo.security.AdminTokenService;
import com.truongan.demo.services.AdminService;
import com.truongan.demo.util.CookieUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

@RestController
@RequestMapping(value = AdminController.url)
public class AdminController {
    static final String url = "/admin";

    private final AdminService adminService;
    private final AdminTokenService adminTokenService;


    public AdminController(AdminService adminService, AdminTokenService adminTokenService) {
        this.adminService = adminService;
        this.adminTokenService = adminTokenService;
    }

    @RequestMapping(value = "/signin")
    public ResponseEntity<?> getCurrentAdmin(@Valid @RequestBody AdminDTO adminDTO, HttpServletResponse response){
        AdminDTO adminDTO_response = adminService.findAdminDTOByUserId(adminDTO.getUserId());
        String token = adminTokenService.createToken(adminDTO_response);
        CookieUtils.addCookie(response, "sessionId_admin", token, 86400);
        return ResponseEntity.status(HttpStatus.OK).build();
    }


}
