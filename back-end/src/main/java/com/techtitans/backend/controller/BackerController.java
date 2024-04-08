package com.techtitans.backend.controller;

import com.techtitans.backend.constants.PathConstants;
import com.techtitans.backend.dto.BackerRequestDto;
import com.techtitans.backend.dto.BackerResponseDto;
import com.techtitans.backend.entity.BackerEntity;
import com.techtitans.backend.service.BackerService;
import lombok.AllArgsConstructor;
import org.apache.tomcat.util.http.parser.HttpParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpOutputMessage;
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

    // Build get backer from id API
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

    // Build update backer from API
    @PutMapping(PathConstants.GET_BY_ID_PATH)
    public ResponseEntity<BackerResponseDto> updateBackerById(
            @PathVariable("id" ) int backerId,
            @RequestBody BackerRequestDto backerRequestDto
    ){
        BackerResponseDto savedBacker = backerService.updateBackerById(backerId, backerRequestDto);
        return new ResponseEntity<>(savedBacker, HttpStatus.OK);
    }
}
