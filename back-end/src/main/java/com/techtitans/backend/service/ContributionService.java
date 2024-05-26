package com.techtitans.backend.service;

import com.techtitans.backend.dto.contribution.ContributionDto;

import java.util.List;

public interface ContributionService {
    ContributionDto addContribution(ContributionDto contributionDto);

    ContributionDto getContribution(int contributionId);

    List<ContributionDto> getContributionsByBacker(int backerId);

    List<List<ContributionDto>> getContributionsByProduct(int productId);
}
