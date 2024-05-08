package com.techtitans.backend.controller;

import com.techtitans.backend.constants.PathConstants;
import com.techtitans.backend.dto.backer.BackerRequestDto;
import com.techtitans.backend.dto.backer.BackerResponseDto;
import com.techtitans.backend.dto.backer.BackerUpdateRequestDto;
import com.techtitans.backend.service.BackerService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

// Making REST API Endpoints
@RestController
@AllArgsConstructor
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

    // Build get backer from id from API
    @GetMapping(PathConstants.GET_BY_ID_PATH)
    public ResponseEntity<BackerResponseDto> getBackerById(
            @PathVariable int id
    ){
        BackerResponseDto backer = backerService.getBackerById(id);
        return new ResponseEntity<>(backer, HttpStatus.OK);
    }

    // Build get all backers from API
    @GetMapping
    public ResponseEntity<List<BackerResponseDto>> getAllBackers(){
        List<BackerResponseDto> backers = backerService.getAllBackers();
        return new ResponseEntity<>(backers,HttpStatus.OK);
    }

    // Build get backer from email from API
    @GetMapping(PathConstants.GET_BY_EMAIL_PATH)
    public ResponseEntity<BackerResponseDto> getBackerByEmail(
            @PathVariable("email") String backerEmail
    ){
        BackerResponseDto backerResponseDto = backerService.getBackerByEmail(backerEmail);
        return new ResponseEntity<>(backerResponseDto, HttpStatus.OK);
    }

    // Build update backer from API
    @PatchMapping(PathConstants.GET_BY_ID_PATH)
    public ResponseEntity<BackerResponseDto> updateBackerById(
            @PathVariable("id") int backerId,
            @RequestBody BackerUpdateRequestDto backerUpdateRequestDto
    ){
        BackerResponseDto savedBacker = backerService.updateBackerById(backerId, backerUpdateRequestDto);
        return new ResponseEntity<>(savedBacker, HttpStatus.OK);
    }

    // Build delete backer from API
    @DeleteMapping(PathConstants.GET_BY_ID_PATH)
    public ResponseEntity<String> deleteBackerById(
            @PathVariable("id") int backerId
    ){
        backerService.deleteBackerById(backerId);
        return new ResponseEntity<>("Backer deleted", HttpStatus.OK);
    }
}