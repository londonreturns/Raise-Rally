package com.techtitans.backend.service;

import com.techtitans.backend.entity.PaymentEntity;

public interface PaymentService {
    String savePayment(PaymentEntity payment);
    PaymentEntity getPayment();
}
