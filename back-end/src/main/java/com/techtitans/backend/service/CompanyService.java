package com.techtitans.backend.service;

import com.techtitans.backend.dto.company.CompanyRequestDto;
import com.techtitans.backend.dto.company.CompanyResponseDto;
import com.techtitans.backend.dto.company.CompanyUpdateRequestDto;
import com.techtitans.backend.entity.CompanyEntity;

import java.util.List;


// Service interface for managing CRUD operations
public interface CompanyService {
    CompanyResponseDto createCompany(CompanyRequestDto companyDto);

    CompanyResponseDto getCompanyById(int id);

    List<CompanyResponseDto> getAllCompanies ();

    CompanyResponseDto updateCompanyById(int companyId, CompanyUpdateRequestDto newCompany);

    void deleteCompanyById(int backerId);

    CompanyResponseDto getCompanyByEmail(String email);

    List<CompanyResponseDto> searchCompanies(String query, boolean isAdmin);

    CompanyResponseDto enableCompany(int id, boolean enable);

    CompanyResponseDto verifyCompany(int id, boolean verify);
}
