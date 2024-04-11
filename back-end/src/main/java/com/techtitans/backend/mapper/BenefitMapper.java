package com.techtitans.backend.mapper;

import com.techtitans.backend.dto.BenefitRequestDto;
import com.techtitans.backend.dto.BenefitResponseDto;
import com.techtitans.backend.entity.BenefitEntity;

public class BenefitMapper {
    public static BenefitEntity mapToBenefitEntity(BenefitRequestDto benefitRequestDto){
        return new BenefitEntity(
                benefitRequestDto.getBenefitId(),
                benefitRequestDto.getBenefitName(),
                benefitRequestDto.getBenefitDescription(),
                benefitRequestDto.getPrice(),
                benefitRequestDto.getProduct()
        );
    }

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
