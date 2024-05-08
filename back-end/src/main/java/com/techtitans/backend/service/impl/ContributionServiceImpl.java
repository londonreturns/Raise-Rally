package com.techtitans.backend.service.impl;

import com.techtitans.backend.dto.contribution.ContributionDto;
import com.techtitans.backend.entity.BenefitEntity;
import com.techtitans.backend.entity.ContributionEntity;
import com.techtitans.backend.entity.ProductEntity;
import com.techtitans.backend.exception.ResourceNotFoundException;
import com.techtitans.backend.mapper.BenefitMapper;
import com.techtitans.backend.mapper.ContributionMapper;
import com.techtitans.backend.repository.BackerRepository;
import com.techtitans.backend.repository.BenefitRepository;
import com.techtitans.backend.repository.ContributionRepository;
import com.techtitans.backend.repository.ProductRepository;
import com.techtitans.backend.service.ContributionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContributionServiceImpl implements ContributionService {
    // Dependency Injection
    @Autowired
    private ContributionRepository contributionRepository;

    // Dependency Injection
    @Autowired
    BackerRepository backerRepository;

    // Dependency Injection
    @Autowired
    BenefitRepository benefitRepository;

    // Dependency Injection
    @Autowired
    ProductRepository productRepository;

    // Function to add contribution
    public ContributionDto addContribution(ContributionDto contributionDto){
        ContributionEntity contributionEntity = ContributionMapper.mapToContributionEntity(contributionDto);

        // Check if backer id exists
        backerRepository.findById(contributionEntity.getBacker().getBackerId())
                .orElseThrow(() ->
                        new ResourceNotFoundException("Backer does not exists with the given id " + contributionEntity.getBacker().getBackerId()));

        // Check if benefit id exists
        benefitRepository.findById(contributionEntity.getBenefit().getBenefitId()).orElseThrow(
                () -> new ResourceNotFoundException("Benefit with id " + contributionEntity.getBenefit().getBenefitId() + " not found")
        );

        // Save to database
        ContributionEntity savedContribution = contributionRepository.save(contributionEntity);
        return ContributionMapper.mapToContributionDto(savedContribution);
    }

    @Override
    public ContributionDto getContribution(int contributionId) {
        // Check if contribution  exists
        ContributionEntity contributionEntity = contributionRepository.findById(contributionId).orElseThrow(() ->
                new ResourceNotFoundException("Contribution does not exists with the given id " + contributionId));
        return ContributionMapper.mapToContributionDto(contributionEntity);
    }

    @Override
    public List<ContributionDto> getContributionsByBacker(int backerId) {
        // Check if backer id exists
        backerRepository.findById(backerId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Backer does not exists with the given id " + backerId));

        List<ContributionEntity> contributions = contributionRepository.findContributionEntitiesByBackerBackerId(backerId);
        return contributions.stream().map(ContributionMapper::mapToContributionDto).toList();
    }

    @Override
    public List<List<ContributionDto>> getContributionsByProduct(int productId) {
        // Check if product exists
        productRepository.findById(productId).orElseThrow(
                () -> new RuntimeException("Product with id " + productId + " not found")
        );

        // Get benefits of product
        List<BenefitEntity> benefits = benefitRepository.getBenefitEntitiesByProductProductId(productId);

        // Get contributions
        List<List<ContributionEntity>> contributions = benefits.stream().map(benefitEntity -> contributionRepository.findContributionEntitiesByBenefitBenefitId(benefitEntity.getBenefitId())).toList();
        return contributions.stream().map(contributionEntities -> contributionEntities.stream().map(ContributionMapper::mapToContributionDto).toList()).toList();
    }
}
