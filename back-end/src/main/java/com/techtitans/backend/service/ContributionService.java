package com.techtitans.backend.service;

import com.techtitans.backend.dto.contribution.ContributionDto;

public interface ContributionService {
    ContributionDto addContribution(ContributionDto contributionDto);

    ContributionDto getContribution(int contributionId);
}
