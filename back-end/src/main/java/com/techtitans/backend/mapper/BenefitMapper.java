package com.techtitans.backend.mapper;

import com.techtitans.backend.dto.benefit.BenefitRequestDto;
import com.techtitans.backend.dto.benefit.BenefitResponseDto;
import com.techtitans.backend.entity.BenefitEntity;

public class BenefitMapper {
    // Mapping benefit request dto to entity
    public static BenefitEntity mapToBenefitEntity(BenefitRequestDto benefitRequestDto){
        return new BenefitEntity(
                benefitRequestDto.getBenefitId(),
                benefitRequestDto.getBenefitName(),
                benefitRequestDto.getBenefitDescription(),
                benefitRequestDto.getPrice(),
                benefitRequestDto.getProduct()
        );
    }

    // Mapping benefit entity to response dto
    public static BenefitResponseDto mapToBenefitDto(BenefitEntity benefitEntity){
        return new BenefitResponseDto(
                benefitEntity.getBenefitId(),
                benefitEntity.getBenefitName(),
                benefitEntity.getBenefitDescription(),
                benefitEntity.getPrice().getPriceId(),
                benefitEntity.getProduct().getProductId()
        );
    }
}
