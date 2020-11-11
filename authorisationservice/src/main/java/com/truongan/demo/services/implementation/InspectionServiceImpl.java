package com.truongan.demo.services.implementation;


import com.truongan.demo.dto.InspectionDTO;
import com.truongan.demo.exception.ResourceNotFoundException;
import com.truongan.demo.mapper.InspectionMapper;
import com.truongan.demo.model.Inspection;
import com.truongan.demo.model.User;
import com.truongan.demo.repository.InspectionRepository;
import com.truongan.demo.repository.UserRepository;
import com.truongan.demo.services.InspectionService;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.HashSet;
import java.util.Optional;
import java.util.Set;


@Service
public class InspectionServiceImpl implements InspectionService {
    private final InspectionMapper inspectionMapper;
    private final InspectionRepository inspectionRepository;
    private final UserRepository userRepository;

    public InspectionServiceImpl(InspectionMapper inspecitonmapper,InspectionRepository inspectionRepository, UserRepository userRepository) {
        this.inspectionMapper = inspecitonmapper;
        this.inspectionRepository = inspectionRepository;
        this.userRepository = userRepository;
    }


    @Override
    @Transactional
    public InspectionDTO createNewInspection(InspectionDTO inspectionDTO) {
        Optional<User> userOptional = userRepository.findById(inspectionDTO.getUserID());
        if(!userOptional.isPresent()){
            throw new ResourceNotFoundException("User","Id",inspectionDTO.getUserID());
        }
        User user = userOptional.get();
        Set<Inspection> userInspection = user.getInspections();
        Inspection inspection = inspectionMapper.inspectionDTOtoInspection(inspectionDTO);
        inspection.setUser(user);
        userInspection.add(inspection);
        User savedUser = userRepository.save(user);
        Optional<Inspection> optionalInspection = savedUser.getInspections().stream().filter(savedInspection -> savedInspection.getDate().equals(inspectionDTO.getDate())).findFirst();

        if(!optionalInspection.isPresent()){
            throw new ResourceNotFoundException("User","inspections",inspectionDTO.getUserID());
        }

        System.out.println(optionalInspection.get().getId());
        InspectionDTO returnInspectionDTO = inspectionMapper.inspectiontoInspectionDTO(optionalInspection.get());
        returnInspectionDTO.setUserID(inspectionDTO.getUserID());

        return returnInspectionDTO;
    }

    @Override
    public Set<InspectionDTO> getInspections(InspectionDTO inspectionDTO) {
        return null;
    }

    @Override
    public InspectionDTO findInspectionDTOById(Long id) {
        Optional<Inspection> optionalInpection = inspectionRepository.findById(id);
        if(!optionalInpection.isPresent()){
            throw new ResourceNotFoundException("Inspection", "id", id);
        }
        return inspectionMapper.inspectiontoInspectionDTO(optionalInpection.get());
    }
}
