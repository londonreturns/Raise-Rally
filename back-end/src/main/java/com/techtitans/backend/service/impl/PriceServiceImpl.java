package com.techtitans.backend.service.impl;

import com.techtitans.backend.dto.PriceResponseDto;
import com.techtitans.backend.entity.PriceEntity;
import com.techtitans.backend.mapper.PriceMapper;
import com.techtitans.backend.repository.PriceRepository;
import com.techtitans.backend.service.PriceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PriceServiceImpl implements PriceService {
    @Autowired
    private PriceRepository priceRepository;

    public PriceResponseDto getPrice(int priceId) {
        PriceEntity price = priceRepository.findById(priceId).orElseThrow(
                () -> new IllegalArgumentException("Invalid price id: " + priceId)
        );
        return PriceMapper.mapToPriceDto(price);
    }
}
