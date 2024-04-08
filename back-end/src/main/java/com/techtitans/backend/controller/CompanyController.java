package com.techtitans.backend.controller;

import com.techtitans.backend.constants.PathConstants;
import com.techtitans.backend.dto.CompanyRequestDto;
import com.techtitans.backend.dto.CompanyResponseDto;
import com.techtitans.backend.dto.CompanyUpdateDto;
import com.techtitans.backend.exception.ResourceNotFoundException;
import com.techtitans.backend.service.CompanyService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@RestController
// Request mapping for the controller
@RequestMapping(PathConstants.COMPANY)

public class CompanyController {
    private CompanyService companyService;

    // Build add company REST API
    @PostMapping
    public ResponseEntity<CompanyResponseDto> createCompany(
            @RequestBody CompanyRequestDto companyDto) {
        CompanyResponseDto savedCompany = companyService.createCompany(companyDto);
        return new ResponseEntity<>(savedCompany, HttpStatus.OK);
    }

    // Build get company by ID REST API
    @GetMapping(PathConstants.GET_BY_ID_PATH)
    public ResponseEntity<CompanyResponseDto> getCompanyById(
            @PathVariable int id) {
        Optional<CompanyResponseDto> companyDtoOptional = companyService.getCompanyById(id);
        return companyDtoOptional.map(ResponseEntity::ok).orElseThrow(() -> new ResourceNotFoundException(
                "Company not found with id: " + id));
    }

    // Build get all companies REST API
    @GetMapping(PathConstants.GET_ALL_COMPANIES_PATH)
    public ResponseEntity<List<CompanyResponseDto>> getAllCompaniesList() {
        List<CompanyResponseDto> companies = companyService.getAllCompanies();
        return new ResponseEntity<>(companies,HttpStatus.OK);
    }

    // Build update company REST API
    @PutMapping(PathConstants.UPDATE_COMPANY_PATH)
    public ResponseEntity<CompanyResponseDto> updateCompany(
            @RequestBody CompanyUpdateDto companyUpdateDto) {

        Optional<CompanyResponseDto> updatedCompany = companyService.updateCompany(companyUpdateDto);

        return updatedCompany.map(ResponseEntity::ok).orElseThrow(() -> new ResourceNotFoundException(
                "Company not found with id: " + companyUpdateDto.getCompanyId()));
    }

    // Build delete company REST API
    @DeleteMapping(PathConstants.DELETE_COMPANY_PATH)
    public ResponseEntity<Void> deleteCompany(@PathVariable int id) {
        if (companyService.deleteCompanyById(id)) {
            // 204 No Content if deleted successfully
            return ResponseEntity.noContent().build();
        } else {
            // Throw exception if company not found
            throw new ResourceNotFoundException("Company not found with id: " + id);
        }
    }

}


