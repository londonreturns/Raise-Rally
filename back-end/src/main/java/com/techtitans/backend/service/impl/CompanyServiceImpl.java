package com.techtitans.backend.service.impl;

import com.techtitans.backend.dto.company.CompanyRequestDto;
import com.techtitans.backend.dto.company.CompanyResponseDto;
import com.techtitans.backend.dto.company.CompanyUpdateRequestDto;
import com.techtitans.backend.entity.CompanyEntity;
import com.techtitans.backend.exception.ResourceNotFoundException;
import com.techtitans.backend.exception.ValidationException;
import com.techtitans.backend.mapper.CompanyMapper;
import com.techtitans.backend.repository.CompanyRepository;
import com.techtitans.backend.security.PasswordEncryptionService;
import com.techtitans.backend.security.Validation;
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
    // Dependency Injection
    @Autowired
    private CompanyRepository companyRepository;

    // Method to create a new company
    @Override
    public CompanyResponseDto createCompany(CompanyRequestDto companyRequestDto) {
        // Validate request dto
        validateRequest(companyRequestDto);
        // Map CompanyRequestDto to CompanyEntity
        CompanyEntity companyEntity = CompanyMapper.mapToCompany(companyRequestDto);
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
    public CompanyResponseDto updateCompanyById(int companyId, CompanyUpdateRequestDto newCompany) {
        // Validate request dto
        validateRequest(newCompany);
        // Check if company with the given ID exists
        CompanyEntity companyEntityFromDatabase = companyRepository.findById(companyId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Company does not exist with the given ID: " + companyId));

        // Old encrypted password
        String encryptedPassword = PasswordEncryptionService.encrypt(newCompany.getOldPassword());
        if (!companyEntityFromDatabase.getPassword().equals(encryptedPassword)) {
            throw new ValidationException("Invalid password");
        }

        // Update attributes
        updateCompany(newCompany, companyEntityFromDatabase);

        // Save to database
        CompanyEntity savedCompany = companyRepository.save(companyEntityFromDatabase);

        return CompanyMapper.mapToCompanyDto(savedCompany);
    }

    public void updateCompany(CompanyUpdateRequestDto companyUpdateRequestDto, CompanyEntity companyEntity) {
        companyEntity.setName(companyUpdateRequestDto.getName());
        companyEntity.setDescription(companyUpdateRequestDto.getDescription());
        companyEntity.setPassword(companyUpdateRequestDto.getNewPassword());
    }

    public static void validateRequest(CompanyRequestDto companyRequestDto) {
        if (!Validation.isNameValid(companyRequestDto.getName()) ||
                (!Validation.isEmailValid(companyRequestDto.getEmail())) ||
                (!Validation.isPasswordValid(companyRequestDto.getPassword()))) {
            throw new ValidationException("Validation error");
        }
    }

    public static void validateRequest(CompanyUpdateRequestDto companyUpdateRequestDto) {
        if (!Validation.isNameValid(companyUpdateRequestDto.getName()) ||
                (!Validation.isPasswordValid(companyUpdateRequestDto.getNewPassword())) ||
                (!Validation.isPasswordValid(companyUpdateRequestDto.getOldPassword()))
        ) {
            throw new ValidationException("Validation error");
        }
    }

    @Override
// Function to delete company by ID
    public void deleteCompanyById(int companyId) {
        // Check if company exists
        companyRepository.findById(companyId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Company does not exist with the given ID: " + companyId));
        // Delete company from the database
        companyRepository.deleteById(companyId);
    }

    //Function to search company by name
    //For admin, view all the companies
    //For backer, view the products that are active only
    @Override
    public List<CompanyResponseDto> searchCompanies(String query, boolean isAdmin) {
        var companyEntities = companyRepository.searchCompanies(query);
        companyEntities.forEach(a-> System.out.println(a.isActive()));
        if (!isAdmin)
            companyEntities = companyEntities.stream().filter(CompanyEntity::isActive).toList();

        return companyEntities.stream().map(CompanyMapper::mapToCompanyDto).toList();
    }

    // Function to enable/disable a company by id
    @Override
    public CompanyResponseDto enableCompany(int id, boolean enable) {
        CompanyEntity companyEntityFromDatabase = companyRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Company does not exist with the given ID: " + id));
        companyEntityFromDatabase.setActive(enable);
        companyRepository.save(companyEntityFromDatabase);
        return CompanyMapper.mapToCompanyDto(companyEntityFromDatabase);
    }

    // Function to verify or unverify a company by id
    public CompanyResponseDto verifyCompany(int id, boolean verify) {
        CompanyEntity companyEntityFromDatabase = companyRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Company does not exist with the given ID: " + id));
        companyEntityFromDatabase.setTicked(verify);
        companyRepository.save(companyEntityFromDatabase);
        return CompanyMapper.mapToCompanyDto(companyEntityFromDatabase);
    }

}

