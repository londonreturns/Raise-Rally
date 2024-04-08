package com.techtitans.backend.service.impl;

import com.techtitans.backend.dto.BackerRequestDto;
import com.techtitans.backend.dto.BackerResponseDto;
import com.techtitans.backend.entity.BackerEntity;
import com.techtitans.backend.exception.ResourceNotFoundException;
import com.techtitans.backend.mapper.BackerMapper;
import com.techtitans.backend.repository.BackerRepository;
import com.techtitans.backend.security.PasswordEncryptionService;
import com.techtitans.backend.service.BackerService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
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

    @Override
    // Function to get company from id
    public BackerResponseDto getBackerById(int backerId) {
        BackerEntity backer = backerRepository.findById(backerId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Backer does not exists with the given id " + backerId));
        return BackerMapper.mapToBackerDto(backer);
    }

    @Override
    // Function to get all companies
    public List<BackerResponseDto> getAllBackers() {
        List<BackerEntity> backers = backerRepository.findAll();
        return backers.stream()
                .map((backer) -> BackerMapper.mapToBackerDto(backer))
                .collect(Collectors.toList());
    }

}
