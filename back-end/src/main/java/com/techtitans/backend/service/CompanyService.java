package com.techtitans.backend.service;

import com.techtitans.backend.dto.CompanyRequestDto;
import com.techtitans.backend.dto.CompanyResponseDto;
import java.util.List;


// Service interface for managing CRUD operations
public interface CompanyService {
    CompanyResponseDto createCompany(CompanyRequestDto companyDto);

    CompanyResponseDto getCompanyById(int id);

    List<CompanyResponseDto> getAllCompanies ();

    CompanyResponseDto updateCompanyById(int companyId, CompanyRequestDto companyRequestDto);

    void deleteCompanyById(int backerId);

    CompanyResponseDto getCompanyByEmail(String email);
}
