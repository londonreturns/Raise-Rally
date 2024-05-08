package com.techtitans.backend.service.impl;

import com.techtitans.backend.constants.PaymentConstants;
import com.techtitans.backend.dto.khalti.*;
import com.techtitans.backend.service.KhaltiService;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.client.WebClient;

@Service
public class KhaltiServiceImpl implements KhaltiService {
    @Override
    // Function to initiate payment
    public Object initiatePayment(KhaltiInitiateRequestDto body) {
        String url = PaymentConstants.INITIATE_PAYMENT_URL;
        String auth = PaymentConstants.KEY;

        WebClient.Builder builder = WebClient.builder();
        KhaltiInitiateGenericResponseDto khaltiInitiateGenericResponseDto = builder.build()
                .post()
                .uri(url)
                .header("Authorization", auth)
                .header("Content-Type", "application/json")
                .bodyValue(body)
                .retrieve()
                .bodyToMono(KhaltiInitiateGenericResponseDto.class)
                .block();

        System.out.println(khaltiInitiateGenericResponseDto);

        if (khaltiInitiateGenericResponseDto != null && khaltiInitiateGenericResponseDto.getError_key() == null){
            return new KhaltiInitiateSuccessResponseDto(khaltiInitiateGenericResponseDto);
        }else if(khaltiInitiateGenericResponseDto != null){
            return new KhaltiInitiateErrorResponseDto(khaltiInitiateGenericResponseDto);
        }
        return null;

    }

    @Override
    // Function to callback payment
    public KhaltiCallbackResponseDto checkCallback(KhaltiCallbackRequestDto body) {
        String khaltiApiUrl = PaymentConstants.LOOKUP_PAYMENT_URL;
        String khaltiSecretKey = PaymentConstants.KEY;

        WebClient webClient = WebClient.builder()
                .baseUrl(khaltiApiUrl)
                .defaultHeader(HttpHeaders.AUTHORIZATION, khaltiSecretKey)
                .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                .build();

        String requestBody = "{\"pidx\": \"" + body.getPidx() + "\"}";


        return webClient.post()
                .body(BodyInserters.fromValue(requestBody))
                .retrieve()
                .bodyToMono(KhaltiCallbackResponseDto.class)
                .block();
    }
}
