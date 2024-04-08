package com.techtitans.backend.service;

import com.techtitans.backend.dto.BackerRequestDto;
import com.techtitans.backend.dto.BackerResponseDto;
import com.techtitans.backend.entity.BackerEntity;
import com.techtitans.backend.mapper.BackerMapper;

import java.util.List;
import java.util.Optional;

public interface BackerService {
    BackerResponseDto createBacker(BackerRequestDto backerRequestDto);
    BackerResponseDto getBackerById(int backerId);
    BackerResponseDto getBackerByEmail(String backerEmail);
    List<BackerResponseDto> getAllBackers();
    BackerResponseDto updateBackerById(int backerId, BackerRequestDto backerRequestDto);
    void deleteBackerById(int backerId);
}
