package com.techtitans.backend.service;

import com.techtitans.backend.dto.BackerRequestDto;
import com.techtitans.backend.dto.BackerResponseDto;

public interface BackerService {
    BackerResponseDto createBacker(BackerRequestDto backerRequestDto);
}
