package com.techtitans.backend.mapper;

import com.techtitans.backend.dto.backer.BackerRequestDto;
import com.techtitans.backend.dto.backer.BackerResponseDto;
import com.techtitans.backend.entity.BackerEntity;
import com.techtitans.backend.entity.ContributionEntity;
import com.techtitans.backend.security.PasswordEncryptionService;

public class BackerMapper {
    // Mapping backer entity to company response dto
    public static BackerResponseDto mapToBackerDto(BackerEntity backerEntity) {
        return new BackerResponseDto(
                backerEntity.getBackerId(),
                backerEntity.getName(),
                backerEntity.getEmail(),
                backerEntity.getContributions().stream().map(ContributionEntity::getId).toList()
        );
    }

    // Mapping backer request entity to backer entity
    public static BackerEntity mapToBacker(BackerRequestDto backerRequestDto) {
        return new BackerEntity(
                backerRequestDto.getBacker_id(),
                backerRequestDto.getName(),
                backerRequestDto.getEmail(),
                PasswordEncryptionService.encrypt(backerRequestDto.getPassword()),
                backerRequestDto.getContributions()
        );
    }
}
