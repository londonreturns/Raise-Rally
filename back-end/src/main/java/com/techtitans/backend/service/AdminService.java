package com.techtitans.backend.service;

import com.techtitans.backend.dto.admin.AdminRequestDto;
import com.techtitans.backend.dto.admin.AdminResponseDto;
import com.techtitans.backend.dto.admin.AdminUpdateRequestDto;
import com.techtitans.backend.dto.backer.BackerRequestDto;
import com.techtitans.backend.dto.backer.BackerResponseDto;

import java.util.List;

public interface AdminService {
    AdminResponseDto createAdmin(AdminRequestDto adminRequestDto);

    AdminResponseDto getAdminById(int adminId);

    List<AdminResponseDto> getAllAdmins();

    AdminResponseDto getAdminByEmail(String adminEmail);

    AdminResponseDto updateAdminById(int adminId, AdminUpdateRequestDto adminUpdateRequestDto);

    void deleteAdminById(int adminId);

    AdminResponseDto loginAdmin(String email, AdminRequestDto adminRequestDto);
}



