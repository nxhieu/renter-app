package com.truongan.demo.services;

import com.truongan.demo.dto.AdminDTO;

public interface AdminService {
    AdminDTO findAdminDTOByUserId(String userId);
}
