package com.techtitans.backend.controller;

import com.techtitans.backend.constants.PathConstants;
import com.techtitans.backend.dto.khalti.KhaltiCallbackRequestDto;
import com.techtitans.backend.dto.khalti.KhaltiCallbackResponseDto;
import com.techtitans.backend.dto.khalti.KhaltiInitiateRequestDto;
import com.techtitans.backend.service.KhaltiService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
// Request mapping for the controller
@RequestMapping(PathConstants.KHALTI)
public class KhaltiController {
    // Service Dependency Injection
    @Autowired
    private KhaltiService khaltiService;

    // Initiate payment
    @PostMapping({PathConstants.INITIATE})
    public Object khaltiInitiate(@RequestBody KhaltiInitiateRequestDto body) {
        System.out.println();
        return khaltiService.initiatePayment(body);
    }

    // Callback payment
    @GetMapping(PathConstants.CALLBACK)
    public ResponseEntity<KhaltiCallbackResponseDto> khaltiCallback(@RequestBody KhaltiCallbackRequestDto callback) {
        KhaltiCallbackResponseDto o = khaltiService.checkCallback(callback);
        return new ResponseEntity<>(o, HttpStatus.OK);
    }
}
