package com.truongan.demo.services;

import com.truongan.demo.dto.InspectionDTO;

import java.util.Set;

public interface InspectionService {
        InspectionDTO createNewInspection(InspectionDTO inspectionDTO);

        InspectionDTO findInspectionDTOById(Long id);

        Set<InspectionDTO> getInspections(InspectionDTO inspectionDTO);
}
