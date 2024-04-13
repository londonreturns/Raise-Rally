package com.techtitans.backend.controller;

import com.techtitans.backend.constants.PathConstants;
import com.techtitans.backend.dto.benefit.BenefitResponseDto;
import com.techtitans.backend.service.BenefitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(PathConstants.BENEFIT)
// Request mapping for the controller
public class BenefitController {
    // Service Dependency Injection
    @Autowired
    private BenefitService benefitService;

    // Build get benefit API
    @GetMapping(PathConstants.GET_BY_ID_PATH)
    public ResponseEntity<BenefitResponseDto> getBenefits(
            @PathVariable("id") int benefitId
    ) {
        BenefitResponseDto benefit = benefitService.getBenefitById(benefitId);
        return new ResponseEntity<>(benefit, HttpStatus.OK);
    }
}
