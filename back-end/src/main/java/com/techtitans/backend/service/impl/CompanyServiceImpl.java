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

    @Override
    public Optional<CompanyResponseDto> updateCompany(CompanyUpdateDto companyUpdateDto) {
        // Retrieve the company entity from the repository based on company ID
        Optional<CompanyEntity> companyOptional = companyRepository.findById(companyUpdateDto.getCompanyId());
        if (companyOptional.isPresent()) {
            CompanyEntity companyEntity = companyOptional.get();

            // Check if the password matches, and update the company entity with new information
            if (checkPassword(companyUpdateDto.getOldPassword(), companyEntity.getPassword())) {
                updateCompanyEntity(companyEntity, companyUpdateDto);
                companyRepository.save(companyEntity);
                // Map the updated company entity to CompanyResponseDto and return as Optional
                CompanyResponseDto updatedCompanyDto = CompanyMapper.mapToCompanyDto(companyEntity);
                return Optional.of(updatedCompanyDto);
            } else {
                return Optional.empty();

            }
        } else {
            return Optional.empty();
        }
    }

    // Helper method to update fields of the company entity with new information
    private void updateCompanyEntity(CompanyEntity companyEntity, CompanyUpdateDto companyUpdateDto) {
        companyEntity.setName(companyUpdateDto.getName());
        companyEntity.setDescription(companyUpdateDto.getDescription());
        companyEntity.setEmail(companyUpdateDto.getEmail());
        companyEntity.setPassword(PasswordEncryptionService.encrypt(companyUpdateDto.getNewPassword()));
        companyEntity.setActive(companyUpdateDto.isActive());
        companyEntity.setTicked(companyUpdateDto.isTicked());
    }

    // Helper method to check if the provided old password matches the stored password
    private boolean checkPassword(String newPassword, String oldPassword) {
        return oldPassword.equals(PasswordEncryptionService.encrypt(newPassword));
    }

    public boolean deleteCompanyById(int id) {
        if (companyRepository.existsById(id)) {
            companyRepository.deleteById(id);
            // Company deleted successfully
            return true;
        } else {
            // Company with given ID not found
            return false;
        }
    }

}

