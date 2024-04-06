package com.techtitans.backend.service;

import com.techtitans.backend.dto.CompanyRequestDto;
import com.techtitans.backend.dto.CompanyResponseDto;
import com.techtitans.backend.dto.CompanyUpdateDto;

import java.util.List;
import java.util.Optional;

public interface CompanyService {
    CompanyResponseDto createCompany(CompanyRequestDto companyDto);
    List<CompanyResponseDto> getAllCompanies ();

    Optional<CompanyResponseDto> getCompanyById(int id);

    Optional<CompanyResponseDto> updateCompany(CompanyUpdateDto companyUpdateDto);

    void deleteCompany(int id);
}
