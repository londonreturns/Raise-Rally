package com.techtitans.backend.mapper;

import com.techtitans.backend.dto.contribution.ContributionDto;
import com.techtitans.backend.entity.BackerEntity;
import com.techtitans.backend.entity.BenefitEntity;
import com.techtitans.backend.entity.ContributionEntity;

public class ContributionMapper {
    public static ContributionEntity mapToContributionEntity(ContributionDto contributionDto) {
        BenefitEntity benefit = new BenefitEntity();
        benefit.setBenefitId(contributionDto.getBenefitId());

        BackerEntity backer = new BackerEntity();
        backer.setBackerId(contributionDto.getBackerId());

        return new ContributionEntity(
                contributionDto.getId(),
                contributionDto.getActualPaidPrice(),
                contributionDto.getPidx(),
                benefit,
                backer
        );
    }

    public static ContributionDto mapToContributionDto(ContributionEntity contributionEntity) {
        return new ContributionDto(
                contributionEntity.getId(),
                contributionEntity.getActualPaidPrice(),
                contributionEntity.getPidx(),
                contributionEntity.getBenefit().getBenefitId(),
                contributionEntity.getBacker().getBackerId()
        );
    }
}
