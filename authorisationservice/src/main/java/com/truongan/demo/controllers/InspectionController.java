package com.truongan.demo.controllers;


import com.truongan.demo.dto.InspectionDTO;
import com.truongan.demo.exception.ResourceNotFoundException;
import com.truongan.demo.services.InspectionService;
import org.springframework.http.MediaType;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.ui.Model;

import javax.validation.Valid;

@RestController
@RequestMapping(value = InspectionController.BASE_URL)
public class InspectionController {
    public static final String BASE_URL = "/inspection";
    private final InspectionService inspectionService;

    public InspectionController(InspectionService inspectionService) {
        this.inspectionService = inspectionService;
    }

    @PreAuthorize("hasRole('USER')")
    @RequestMapping(value = "/create")
    public InspectionDTO createInspectionForm(@RequestBody InspectionDTO inspectionDTO){
        return inspectionService.createNewInspection(inspectionDTO);
    }

    @PreAuthorize("hasRole('USER')")
    @RequestMapping(value = "/confirmation/{id}")
    public InspectionDTO getInspectionForm(@PathVariable Long id){
        return inspectionService.findInspectionDTOById(id);
    }
}
