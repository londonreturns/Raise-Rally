package com.techtitans.backend.controller;

import com.techtitans.backend.constants.PathConstants;
import com.techtitans.backend.dto.CompanyRequestDto;
import com.techtitans.backend.dto.CompanyResponseDto;
import com.techtitans.backend.dto.CompanyUpdateDto;
import com.techtitans.backend.service.CompanyService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@RestController
@RequestMapping(PathConstants.COMPANY) // Request mapping for the controller
@CrossOrigin(origins = "http://localhost:8080") // Cross-origin support
public class CompanyController {

    @Autowired
    private CompanyService companyService;

    // Build add company REST API
    @PostMapping
    public ResponseEntity<CompanyResponseDto> createCompany(@RequestBody CompanyRequestDto companyDto) {
        CompanyResponseDto savedCompany = companyService.createCompany(companyDto);
        return new ResponseEntity<>(savedCompany, HttpStatus.OK);
    }
}


