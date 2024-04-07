package com.techtitans.backend.service;

import com.techtitans.backend.dto.CompanyRequestDto;
import com.techtitans.backend.dto.CompanyResponseDto;
import com.techtitans.backend.dto.CompanyUpdateDto;

import java.util.List;
import java.util.Optional;

// Service interface for managing CRUD operations
public interface CompanyService {
    CompanyResponseDto createCompany(CompanyRequestDto companyDto);


    Optional<CompanyResponseDto> getCompanyById(int id);

    List<CompanyResponseDto> getAllCompanies ();
}
