package com.truongan.demo.mapper;


import com.truongan.demo.dto.AdminDTO;
import com.truongan.demo.model.Admin;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface AdminMapper {
    AdminMapper Instance = Mappers.getMapper(AdminMapper.class);
    AdminDTO admintoAdminDTO(Admin admin);
}
