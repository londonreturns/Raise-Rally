package com.techtitans.backend.service.impl;

import com.techtitans.backend.dto.CompanyRequestDto;
import com.techtitans.backend.dto.CompanyResponseDto;
import com.techtitans.backend.entity.CompanyEntity;
import com.techtitans.backend.exception.ResourceNotFoundException;
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
    @Autowired
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
    public CompanyResponseDto getCompanyById(int companyId) {
        // Check if company exists
        CompanyEntity company = companyRepository.findById(companyId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Company does not exist with the given ID: " + companyId));
        return CompanyMapper.mapToCompanyDto(company);
    }


    // Method to retrieve all companies
    @Override
    public List<CompanyResponseDto> getAllCompanies() {
        List<CompanyEntity> companies = companyRepository.findAll();
        return companies.stream()
                .map(CompanyMapper::mapToCompanyDto)
                .collect(Collectors.toList());
    }


    @Override
    // Method to get company from email
    public CompanyResponseDto getCompanyByEmail(String companyEmail) {
        Optional<CompanyEntity> companyEntity = companyRepository.fetchByEmail(companyEmail);
        // Check if entity exists
        if (companyEntity.isPresent()) {
            return CompanyMapper.mapToCompanyDto(companyEntity.get());
        }
        throw new ResourceNotFoundException("Company does not exists with the given email " + companyEmail);
    }


    // Method to update company details by ID
    @Override
    public CompanyResponseDto updateCompanyById(int companyId, CompanyRequestDto companyRequestDto) {
        // Check if company with the given ID exists
        CompanyEntity companyEntityFromDatabase = companyRepository.findById(companyId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Company does not exist with the given ID: " + companyId));

        // Update attributes
        updateAttributes(companyEntityFromDatabase, companyRequestDto);

        // Save updated company details to the database
        CompanyEntity savedCompany = companyRepository.save(companyEntityFromDatabase);

        // Map the saved company entity to DTO and return
        return CompanyMapper.mapToCompanyDto(savedCompany);
    }

    // Helper method to update fields of the company entity with new information
    private void updateAttributes(CompanyEntity companyEntity, CompanyRequestDto companyRequestDto){
        companyEntity.setName(companyRequestDto.getName());
        companyEntity.setDescription(companyRequestDto.getDescription());
        companyEntity.setEmail(companyRequestDto.getEmail());
        companyEntity.setPassword(PasswordEncryptionService.encrypt(companyRequestDto.getPassword()));
        companyEntity.setActive(companyRequestDto.isActive());
        companyEntity.setTicked(companyRequestDto.isTicked());
    }

    @Override
// Function to delete company by ID
    public void deleteCompanyById(int companyId) {
        // Check if company exists
        CompanyEntity companyEntityFromDatabase = companyRepository.findById(companyId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Company does not exist with the given ID: " + companyId));
        // Delete company from the database
        companyRepository.deleteById(companyId);
    }
}

