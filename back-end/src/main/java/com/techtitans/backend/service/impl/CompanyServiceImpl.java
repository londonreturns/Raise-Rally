package com.techtitans.backend.service.impl;

import com.techtitans.backend.dto.CompanyRequestDto;
import com.techtitans.backend.dto.CompanyResponseDto;
import com.techtitans.backend.dto.CompanyUpdateDto;
import com.techtitans.backend.entity.CompanyEntity;
import com.techtitans.backend.mapper.CompanyMapper;
import com.techtitans.backend.repository.CompanyRepository;
import com.techtitans.backend.security.PasswordEncryptionService;
import com.techtitans.backend.service.CompanyService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class CompanyServiceImpl implements CompanyService {
    private CompanyRepository companyRepository;
    // Method to create a new company
    @Override
    public CompanyResponseDto createCompany(CompanyRequestDto companyDto) {
        // Map CompanyRequestDto to CompanyEntity
        CompanyEntity companyEntity = CompanyMapper.mapToCompany(companyDto);
        // Save the CompanyEntity to the repository
        CompanyEntity savedCompany = companyRepository.save(companyEntity);
        // Map the saved CompanyEntity to CompanyResponseDto and return
        return CompanyMapper.mapToCompanyDto(savedCompany);
    }

    // Method to retrieve a company by its ID
    @Override
    public Optional<CompanyResponseDto> getCompanyById(int id) {
        //
        Optional<CompanyEntity> companyEntity = companyRepository.findById(id);
        // If the company is found, map it to CompanyResponseDto and return as Optional
        return companyEntity.map(CompanyMapper::mapToCompanyDto);
    }

    // Method to retrieve all companies
    @Override
    public List<CompanyResponseDto> getAllCompanies() {
        List<CompanyEntity> companyEntities = companyRepository.findAll();
        // Map each CompanyEntity to CompanyResponseDto and collect into a list
        return companyEntities.stream().map(CompanyMapper::mapToCompanyDto).collect(Collectors.toList());
    }

}

