package com.techtitans.backend.mapper;

import com.techtitans.backend.dto.price.PriceRequestDto;
import com.techtitans.backend.dto.price.PriceResponseDto;
import com.techtitans.backend.entity.PriceEntity;

public class PriceMapper {
    // Mapping price entity to response dto
    public static PriceEntity mapToPriceEntity(PriceRequestDto priceRequestDto) {
        return new PriceEntity(
                priceRequestDto.getId(),
                priceRequestDto.getAmount(),
                priceRequestDto.getBenefit()
        );
    }

    // Mapping price entity to response dto
    public static PriceResponseDto mapToPriceDto(PriceEntity priceEntity) {
        return new PriceResponseDto(
                priceEntity.getPriceId(),
                priceEntity.getAmount()
        );
    }
}
