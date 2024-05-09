package com.techtitans.backend.service.impl;

import com.techtitans.backend.dto.backer.BackerRequestDto;
import com.techtitans.backend.dto.backer.BackerResponseDto;
import com.techtitans.backend.dto.backer.BackerUpdateRequestDto;
import com.techtitans.backend.entity.BackerEntity;
import com.techtitans.backend.exception.ResourceNotFoundException;
import com.techtitans.backend.exception.ValidationException;
import com.techtitans.backend.mapper.BackerMapper;
import com.techtitans.backend.repository.BackerRepository;
import com.techtitans.backend.security.PasswordEncryptionService;
import com.techtitans.backend.security.Validation;
import com.techtitans.backend.service.BackerService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class BackerServiceImpl implements BackerService {
    // Dependency Injection
    @Autowired
    private BackerRepository backerRepository;

    @Override
    // Function to create company
    public BackerResponseDto createBacker(BackerRequestDto backerRequestDto) {
        // Validate request dto
        validateRequest(backerRequestDto);
        BackerEntity backerEntity = BackerMapper.mapToBacker(backerRequestDto);
        BackerEntity savedBacker = backerRepository.save(backerEntity);
        return BackerMapper.mapToBackerDto(savedBacker);
    }

    @Override
    // Function to get company from id
    public BackerResponseDto getBackerById(int backerId) {
        // Check if id exists
        BackerEntity backer = backerRepository.findById(backerId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Backer does not exists with the given id " + backerId));
        return BackerMapper.mapToBackerDto(backer);
    }

    @Override
    // Function to get company from email
    public BackerResponseDto getBackerByEmail(String backerEmail) {
        BackerEntity backer = backerRepository.fetchByEmail(backerEmail)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Backer does not exists with the given email " + backerEmail));
        ;
        return BackerMapper.mapToBackerDto(backer);
    }


    @Override
    // Function to get all companies
    public List<BackerResponseDto> getAllBackers() {
        List<BackerEntity> backers = backerRepository.findAll();
        return backers.stream()
                .map(BackerMapper::mapToBackerDto)
                .collect(Collectors.toList());
    }

    @Override
    // Function to update backer details by id
    public BackerResponseDto updateBackerById(int backerId, BackerUpdateRequestDto backerUpdateRequestDto) {
        // Validate request dto
        validateRequest(backerUpdateRequestDto);
        // Check if id exists
        BackerEntity backerEntityFromDatabase = backerRepository.findById(backerId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Backer does not exists with the given id " + backerId));

        // Old encrypted password
        String encryptedPassword = PasswordEncryptionService.encrypt(backerUpdateRequestDto.getOldPassword());
        if (!backerEntityFromDatabase.getPassword().equals(encryptedPassword)) {
            throw new ValidationException("Invalid password");
        }

        // Update details
        updateAttributes(backerEntityFromDatabase, backerUpdateRequestDto);
        // Save details to database
        BackerEntity savedBacker = backerRepository.save(backerEntityFromDatabase);
        return BackerMapper.mapToBackerDto(savedBacker);
    }

    @Override
    // Function to delete backer by id
    public void deleteBackerById(int backerId) {
        // Check if id exists
        backerRepository.findById(backerId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Backer does not exists with the given id " + backerId));
        // Delete backer from database
        backerRepository.deleteById(backerId);
    }

    // Update attributes of entity
    public void updateAttributes(BackerEntity backerEntity, BackerUpdateRequestDto backerUpdateRequestDto){
        backerEntity.setName(backerUpdateRequestDto.getName());
        backerEntity.setPassword(PasswordEncryptionService.encrypt(backerUpdateRequestDto.getNewPassword()));
    }

    // Validate RequestDTO
    public static void validateRequest(BackerRequestDto backerRequestDto){
        if (!Validation.isNameValid(backerRequestDto.getName()) ||
                !Validation.isEmailValid(backerRequestDto.getEmail()) ||
                !Validation.isPasswordValid(backerRequestDto.getPassword())) {
            throw new ValidationException("Validation error");
        }
    }

    // Validate RequestDTO
    public static void validateRequest(BackerUpdateRequestDto backerUpdateRequestDto){
        if (!Validation.isNameValid(backerUpdateRequestDto.getName()) ||
                !Validation.isPasswordValid(backerUpdateRequestDto.getNewPassword()) ||
                !Validation.isPasswordValid(backerUpdateRequestDto.getOldPassword())) {
            throw new ValidationException("Validation error");
        }
    }
}
