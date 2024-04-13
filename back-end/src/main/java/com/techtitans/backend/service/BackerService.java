package com.techtitans.backend.service;

import com.techtitans.backend.dto.backer.BackerRequestDto;
import com.techtitans.backend.dto.backer.BackerResponseDto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface BackerService {
    BackerResponseDto createBacker(BackerRequestDto backerRequestDto);

    BackerResponseDto getBackerById(int backerId);

    BackerResponseDto getBackerByEmail(String backerEmail);

    List<BackerResponseDto> getAllBackers();

    BackerResponseDto updateBackerById(int backerId, BackerRequestDto backerRequestDto);

    void deleteBackerById(int backerId);
}
