package com.techtitans.backend.service.impl;

import com.techtitans.backend.dto.BenefitResponseDto;
import com.techtitans.backend.entity.BenefitEntity;
import com.techtitans.backend.exception.ResourceNotFoundException;
import com.techtitans.backend.mapper.BenefitMapper;
import com.techtitans.backend.repository.BenefitRepository;
import com.techtitans.backend.service.BenefitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BenefitServiceImpl implements BenefitService {
    @Autowired
    private BenefitRepository benefitRepository;

    @Override
    public BenefitResponseDto getBenefitById(int benefitId) {
        BenefitEntity benefitEntity = benefitRepository.findById(benefitId).orElseThrow(
                () -> new ResourceNotFoundException("Benefit with id " + benefitId + " not found")
        );
        return BenefitMapper.mapToBenefitDto(benefitEntity);
    }
}
