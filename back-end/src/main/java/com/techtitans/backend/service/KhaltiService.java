package com.techtitans.backend.service;

import com.techtitans.backend.dto.khalti.KhaltiCallbackRequestDto;
import com.techtitans.backend.dto.khalti.KhaltiCallbackResponseDto;
import com.techtitans.backend.dto.khalti.KhaltiInitiateRequestDto;

public interface KhaltiService {
    Object initiatePayment(KhaltiInitiateRequestDto body);

    KhaltiCallbackResponseDto checkCallback(KhaltiCallbackRequestDto body);
}
