package com.techtitans.backend.controller;

import com.techtitans.backend.constants.PathConstants;
import com.techtitans.backend.dto.admin.AdminRequestDto;
import com.techtitans.backend.dto.admin.AdminResponseDto;
import com.techtitans.backend.dto.admin.AdminUpdateRequestDto;
import com.techtitans.backend.service.AdminService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor

// Request mapping for the controller
@RequestMapping(PathConstants.ADMIN)
public class AdminController {
    // Service Dependency Injection
    @Autowired
    private AdminService adminService;

    // Build add admin API
    @PostMapping
    public ResponseEntity<AdminResponseDto> createAdmin(
            @RequestBody AdminRequestDto adminRequestDto
    ) {
        AdminResponseDto savedAdmin = adminService.createAdmin(adminRequestDto);
        return new ResponseEntity<>(savedAdmin, HttpStatus.OK);
    }

    // Build get admin from id from API
    @GetMapping(PathConstants.GET_BY_ID_PATH)
    public ResponseEntity<AdminResponseDto> getAdminById(
            @PathVariable int id
    ){
        AdminResponseDto admin = adminService.getAdminById(id);
        return new ResponseEntity<>(admin, HttpStatus.OK);
    }

    // Build get all admin API
    @GetMapping(PathConstants.GET_ALL_PATH)
    public ResponseEntity<List<AdminResponseDto>> getAllAdminsList() {
        List<AdminResponseDto> admins = adminService.getAllAdmins();
        return new ResponseEntity<>(admins, HttpStatus.OK);
    }

    // Build get admin by email REST API
    @GetMapping(PathConstants.GET_BY_EMAIL_PATH)
    public ResponseEntity<AdminResponseDto> getAdminByEmail(
            @PathVariable("email") String email
    ){
        AdminResponseDto adminResponseDto = adminService.getAdminByEmail(email);
        return new ResponseEntity<>(adminResponseDto, HttpStatus.OK);
    }

    // Build update admin from API
    @PatchMapping(PathConstants.GET_BY_ID_PATH)
    public ResponseEntity<AdminResponseDto> updateAdminById(
            @PathVariable("id") int adminId,
            @RequestBody AdminUpdateRequestDto adminUpdateRequestDto
            ){
        AdminResponseDto savedAdmin = adminService.updateAdminById(adminId, adminUpdateRequestDto);
        return new ResponseEntity<>(savedAdmin, HttpStatus.OK);
    }

    // Build delete admin from API
    @DeleteMapping(PathConstants.GET_BY_ID_PATH)
    public ResponseEntity<String> deleteAdminById(
            @PathVariable("id") int adminId
    ){
        adminService.deleteAdminById(adminId);
        return new ResponseEntity<>("Admin deleted", HttpStatus.OK);
    }


}
