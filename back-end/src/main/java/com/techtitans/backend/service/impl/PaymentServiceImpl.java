package com.techtitans.backend.service.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.techtitans.backend.entity.PaymentEntity;
import com.techtitans.backend.exception.ValidationException;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;

@Service
public class PaymentServiceImpl {

    private static final String JSON_FILE_PATH = "payment_data.json";
    private static final int MIN_AMOUNT = 100;

    public static String savePayment(PaymentEntity payment) throws IOException {
        // Validate amount
        if (checkAmount(payment.getActualPaidPrice())) {
            // Save file
            ObjectMapper objectMapper = new ObjectMapper();
            objectMapper.writeValue(new File(JSON_FILE_PATH), payment);
            return "Payment saved as JSON file.";
        }
        else{
            return new ValidationException("Payment not saved as JSON file.").getMessage();
        }
    }

    public static PaymentEntity getPayment() throws IOException {
        // Get file
        ObjectMapper objectMapper = new ObjectMapper();
        return objectMapper.readValue(new File(JSON_FILE_PATH), PaymentEntity.class);
    }

    public static boolean checkAmount(float amount) {
        return amount >= MIN_AMOUNT;
    }
}
