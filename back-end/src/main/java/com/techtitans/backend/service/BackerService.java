package com.techtitans.backend.service;

import com.techtitans.backend.dto.backer.BackerRequestDto;
import com.techtitans.backend.dto.backer.BackerResponseDto;
import com.techtitans.backend.dto.backer.BackerUpdateRequestDto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface BackerService {
    BackerResponseDto createBacker(BackerRequestDto backerRequestDto);

    BackerResponseDto getBackerById(int backerId);

    BackerResponseDto getBackerByEmail(String backerEmail);

    List<BackerResponseDto> getAllBackers();

    BackerResponseDto updateBackerById(int backerId, BackerUpdateRequestDto backerUpdateRequestDto);

    void deleteBackerById(int backerId);
}
