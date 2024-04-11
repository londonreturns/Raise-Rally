package com.techtitans.backend.service;

import com.techtitans.backend.dto.BenefitResponseDto;

public interface BenefitService {
    BenefitResponseDto getBenefitById(int id);
}
