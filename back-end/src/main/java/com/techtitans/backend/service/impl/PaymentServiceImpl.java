package com.techtitans.backend.service.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.techtitans.backend.entity.PaymentEntity;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;

@Service
public class PaymentServiceImpl {

    private static final String JSON_FILE_PATH = "payment_data.json";

    public static String savePayment(PaymentEntity payment) throws IOException {
        // Save file
        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.writeValue(new File(JSON_FILE_PATH), payment);
        return "Payment saved as JSON file.";
    }

    public static PaymentEntity getPayment() throws IOException {
        // Get file
        ObjectMapper objectMapper = new ObjectMapper();
        return objectMapper.readValue(new File(JSON_FILE_PATH), PaymentEntity.class);
    }
}
