package com.techtitans.backend.service;

import com.techtitans.backend.dto.benefit.BenefitResponseDto;
import com.techtitans.backend.dto.product.ProductResponseDto;

public interface BenefitService {
    BenefitResponseDto getBenefitById(int id);

    ProductResponseDto getProductByBenefitId(int benefitId);
}
