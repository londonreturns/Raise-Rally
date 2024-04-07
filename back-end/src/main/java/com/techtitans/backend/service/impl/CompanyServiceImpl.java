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
    @Override
    public CompanyResponseDto createCompany(CompanyRequestDto companyDto) {
        CompanyEntity companyEntity = CompanyMapper.mapToCompany(companyDto);
        CompanyEntity savedCompany = companyRepository.save(companyEntity);
        return CompanyMapper.mapToCompanyDto(savedCompany);
    }
    @Override
    public Optional<CompanyResponseDto> getCompanyById(int id) {
        Optional<CompanyEntity> companyEntity = companyRepository.findById(id);
        return companyEntity.map(CompanyMapper::mapToCompanyDto);
    }

}

