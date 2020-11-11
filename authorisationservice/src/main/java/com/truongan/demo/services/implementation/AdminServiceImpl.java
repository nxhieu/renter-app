package com.truongan.demo.services.implementation;


import com.truongan.demo.dto.AdminDTO;
import com.truongan.demo.exception.ResourceNotFoundException;
import com.truongan.demo.mapper.AdminMapper;
import com.truongan.demo.model.Admin;
import com.truongan.demo.repository.AdminRepository;
import com.truongan.demo.services.AdminService;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AdminServiceImpl implements AdminService {
    private final AdminRepository adminRepository;
    private final AdminMapper adminMapper;

    public AdminServiceImpl(AdminRepository adminRepository, AdminMapper adminMapper) {
        this.adminRepository = adminRepository;
        this.adminMapper = adminMapper;
    }

    @Override
    public AdminDTO findAdminDTOByUserId(String userId) {
        Optional<Admin> adminOptional = adminRepository.findByUserId(userId);
        if(!adminOptional.isPresent()){
            throw new ResourceNotFoundException("Admin", "id", userId);
        }
        return adminMapper.admintoAdminDTO(adminOptional.get());
    }
}
