package com.techtitans.backend.controller;

import com.techtitans.backend.constants.PathConstants;
import com.techtitans.backend.dto.BackerRequestDto;
import com.techtitans.backend.dto.BackerResponseDto;
import com.techtitans.backend.service.BackerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

// Making REST API Endpoints
@RestController
// Request mapping for the controller
@RequestMapping(PathConstants.BACKER)
public class BackerController {
    // Service Dependency Injection
    @Autowired
    private BackerService backerService;

    // Build add backer API
    @PostMapping
    public ResponseEntity<BackerResponseDto> createBacker(
            @RequestBody BackerRequestDto backerRequestDto) {
        BackerResponseDto savedBacker = backerService.createBacker(backerRequestDto);
        return new ResponseEntity<>(savedBacker, HttpStatus.OK);
    }
}
