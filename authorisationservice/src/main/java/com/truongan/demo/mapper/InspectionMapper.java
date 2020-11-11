package com.truongan.demo.mapper;


import com.truongan.demo.dto.InspectionDTO;
import com.truongan.demo.model.Inspection;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface InspectionMapper {
    InspectionMapper Instance = Mappers.getMapper(InspectionMapper.class);
    Inspection inspectionDTOtoInspection(InspectionDTO inspectionDTO);
    InspectionDTO inspectiontoInspectionDTO(Inspection inspectionDTO);
}
