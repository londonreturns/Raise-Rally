package com.techtitans.backend.controller;

import com.techtitans.backend.constants.PathConstants;
import com.techtitans.backend.dto.company.CompanyRequestDto;
import com.techtitans.backend.dto.company.CompanyResponseDto;
import com.techtitans.backend.dto.company.CompanyUpdateRequestDto;
import com.techtitans.backend.entity.CompanyEntity;
import com.techtitans.backend.service.CompanyService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
// Request mapping for the controller
@RequestMapping(PathConstants.COMPANY)

public class CompanyController {
    // Service Dependency Injection
    @Autowired
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
            @PathVariable("id") int id
    ) {
        CompanyResponseDto company = companyService.getCompanyById(id);
        return new ResponseEntity<>(company, HttpStatus.OK);
    }

    // Build get all companies REST API
    @GetMapping(PathConstants.GET_ALL_PATH)
    public ResponseEntity<List<CompanyResponseDto>> getAllCompaniesList() {
        List<CompanyResponseDto> companies = companyService.getAllCompanies();
        return new ResponseEntity<>(companies, HttpStatus.OK);
    }

    // Build get company by email REST API
    @GetMapping(PathConstants.GET_BY_EMAIL_PATH)
    public ResponseEntity<CompanyResponseDto> getCompanyByEmail(
            @PathVariable("email") String email
    ) {
        CompanyResponseDto company = companyService.getCompanyByEmail(email);
        return new ResponseEntity<>(company, HttpStatus.OK);
    }

    // Build update company REST API
    @PatchMapping(PathConstants.GET_BY_ID_PATH)
    public ResponseEntity<CompanyResponseDto> updateCompanyById(
            @PathVariable("id") int companyId,
            @RequestBody CompanyUpdateRequestDto newCompany
    ) {
        CompanyResponseDto updatedCompany = companyService.updateCompanyById(companyId, newCompany);
        return new ResponseEntity<>(updatedCompany, HttpStatus.OK);
    }

    // Build delete company REST API
    @DeleteMapping(PathConstants.GET_BY_ID_PATH)
    public ResponseEntity<String> deleteCompanyById(
            @PathVariable("id") int companyId
    ) {
        companyService.deleteCompanyById(companyId);
        return new ResponseEntity<>("Company deleted", HttpStatus.OK);
    }

    //Build search company REST API for backer
    @GetMapping("/search")
    public ResponseEntity<List<CompanyResponseDto>> searchCompanies(@RequestParam("query") String query) {
        return ResponseEntity.ok(companyService.searchCompanies(query, false));
    }

    //Build search company REST API for admin
    @GetMapping("admin/search")
    public ResponseEntity<List<CompanyResponseDto>> adminSearchCompanies(@RequestParam("query") String query) {
        return ResponseEntity.ok(companyService.searchCompanies(query, true));
    }

    //Build company REST API for enable and disable function
    @PatchMapping("/enable/{id}/{enabled}")
    public ResponseEntity<CompanyResponseDto> enableCompany(@PathVariable("enabled") boolean enabled, @PathVariable("id") int id) {
        return ResponseEntity.ok(this.companyService.enableCompany(id, enabled));
    }

    //Build REST API for verifying company
    @PatchMapping("/verify/{id}/{verified}")
    public ResponseEntity<CompanyResponseDto> verifyCompany(@PathVariable("verified") boolean verified, @PathVariable("id") int id) {
        return ResponseEntity.ok(this.companyService.verifyCompany(id, verified));
    }
}
