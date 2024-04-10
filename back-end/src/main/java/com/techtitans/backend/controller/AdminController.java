package com.techtitans.backend.controller;

import com.techtitans.backend.constants.PathConstants;
import com.techtitans.backend.dto.AdminRequestDto;
import com.techtitans.backend.dto.AdminResponseDto;
import com.techtitans.backend.dto.BackerRequestDto;
import com.techtitans.backend.dto.BackerResponseDto;
import com.techtitans.backend.service.AdminService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor

// Request mapping for the controller
@RequestMapping(PathConstants.ADMIN)
public class AdminController {
    // Service Dependency Injection
    @Autowired
    private AdminService adminService;

    //Build add admin API
    @PostMapping
    public ResponseEntity<AdminResponseDto> createAdmin(
            @RequestBody AdminRequestDto adminRequestDto) {
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

}
