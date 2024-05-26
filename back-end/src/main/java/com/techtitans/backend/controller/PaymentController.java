package com.techtitans.backend.controller;

import com.techtitans.backend.constants.PathConstants;
import com.techtitans.backend.entity.PaymentEntity;
import com.techtitans.backend.service.PaymentService;
import com.techtitans.backend.service.impl.PaymentServiceImpl;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@AllArgsConstructor
@RequestMapping(PathConstants.PAYMENT)
@RestController
public class PaymentController {

    // Save payment
    @PostMapping("/savePayment")
    public ResponseEntity<String> savePayment(@RequestBody PaymentEntity paymentEntity) throws IOException {
        return new ResponseEntity<>(PaymentServiceImpl.savePayment(paymentEntity), HttpStatus.OK);
    }

    // Read payment
    @GetMapping("/readPayment")
    public ResponseEntity<PaymentEntity> readPayment() throws IOException {
        return new ResponseEntity<>(PaymentServiceImpl.getPayment(), HttpStatus.OK);
    }
}
