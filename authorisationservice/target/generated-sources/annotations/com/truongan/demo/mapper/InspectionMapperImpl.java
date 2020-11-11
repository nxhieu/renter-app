package com.truongan.demo.mapper;

import com.truongan.demo.dto.InspectionDTO;
import com.truongan.demo.model.Inspection;
import javax.annotation.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2020-11-05T18:13:34+1100",
    comments = "version: 1.4.0.Final, compiler: javac, environment: Java 11.0.9 (Ubuntu)"
)
@Component
public class InspectionMapperImpl implements InspectionMapper {

    @Override
    public Inspection inspectionDTOtoInspection(InspectionDTO inspectionDTO) {
        if ( inspectionDTO == null ) {
            return null;
        }

        Inspection inspection = new Inspection();

        inspection.setName( inspectionDTO.getName() );
        inspection.setEmail( inspectionDTO.getEmail() );
        inspection.setDate( inspectionDTO.getDate() );

        return inspection;
    }

    @Override
    public InspectionDTO inspectiontoInspectionDTO(Inspection inspectionDTO) {
        if ( inspectionDTO == null ) {
            return null;
        }

        InspectionDTO inspectionDTO1 = new InspectionDTO();

        inspectionDTO1.setEmail( inspectionDTO.getEmail() );
        inspectionDTO1.setName( inspectionDTO.getName() );
        inspectionDTO1.setDate( inspectionDTO.getDate() );
        inspectionDTO1.setId( inspectionDTO.getId() );

        return inspectionDTO1;
    }
}
