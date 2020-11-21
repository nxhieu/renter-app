package com.truongan.demo.mapper;

import com.truongan.demo.dto.AdminDTO;
import com.truongan.demo.model.Admin;
import javax.annotation.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2020-11-21T11:31:03+1100",
    comments = "version: 1.4.0.Final, compiler: javac, environment: Java 1.8.0_201 (Oracle Corporation)"
)
@Component
public class AdminMapperImpl implements AdminMapper {

    @Override
    public AdminDTO admintoAdminDTO(Admin admin) {
        if ( admin == null ) {
            return null;
        }

        AdminDTO adminDTO = new AdminDTO();

        adminDTO.setPassword( admin.getPassword() );
        adminDTO.setUserId( admin.getUserId() );

        return adminDTO;
    }
}
