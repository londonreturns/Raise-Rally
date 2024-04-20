package com.techtitans.backend.service;

import com.techtitans.backend.dto.benefit.BenefitResponseDto;

public interface BenefitService {
    BenefitResponseDto getBenefitById(int id);
}
