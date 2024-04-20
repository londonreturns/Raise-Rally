package com.techtitans.backend.service;

import com.techtitans.backend.dto.price.PriceResponseDto;

public interface PriceService {
    PriceResponseDto getPrice(int priceId);
}
