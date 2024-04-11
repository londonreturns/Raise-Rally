package com.techtitans.backend.mapper;

import com.techtitans.backend.dto.PriceRequestDto;
import com.techtitans.backend.dto.PriceResponseDto;
import com.techtitans.backend.entity.PriceEntity;

public class PriceMapper {
    public static PriceEntity mapToPriceEntity(PriceRequestDto priceRequestDto) {
        return new PriceEntity(
                priceRequestDto.getId(),
                priceRequestDto.getAmount(),
                priceRequestDto.getBenefit()
        );
    }

    public static PriceResponseDto mapToPriceDto(PriceEntity priceEntity) {
        return new PriceResponseDto(
                priceEntity.getPriceId(),
                priceEntity.getAmount()
        );
    }
}
