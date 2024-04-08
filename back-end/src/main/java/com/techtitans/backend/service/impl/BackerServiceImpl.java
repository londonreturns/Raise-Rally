package com.techtitans.backend.service.impl;

import com.techtitans.backend.dto.BackerRequestDto;
import com.techtitans.backend.dto.BackerResponseDto;
import com.techtitans.backend.entity.BackerEntity;
import com.techtitans.backend.mapper.BackerMapper;
import com.techtitans.backend.repository.BackerRepository;
import com.techtitans.backend.service.BackerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BackerServiceImpl implements BackerService {
    @Autowired
    private BackerRepository backerRepository;

    @Override
    // Function to create company
    public BackerResponseDto createBacker(BackerRequestDto backerRequestDto) {
        BackerEntity backerEntity = BackerMapper.mapToBacker(backerRequestDto);
        BackerEntity savedBacker = backerRepository.save(backerEntity);
        return BackerMapper.mapToBackerDto(savedBacker);
    }
}
