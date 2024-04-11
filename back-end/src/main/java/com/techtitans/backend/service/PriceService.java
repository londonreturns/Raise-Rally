package com.techtitans.backend.service;

import com.techtitans.backend.dto.PriceResponseDto;

public interface PriceService {
    PriceResponseDto getPrice(int priceId);
}
