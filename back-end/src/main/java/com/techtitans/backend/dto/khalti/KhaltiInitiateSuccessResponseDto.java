package com.techtitans.backend.dto.khalti;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class KhaltiInitiateSuccessResponseDto implements Serializable {
    private String pidx;
    private String payment_url;
    private String expires_at;
    private int expires_in;

    public KhaltiInitiateSuccessResponseDto(KhaltiInitiateGenericResponseDto khaltiInitiateGenericResponseDto) {
        this.pidx = khaltiInitiateGenericResponseDto.getPidx();
        this.payment_url = khaltiInitiateGenericResponseDto.getPayment_url();
        this.expires_at = khaltiInitiateGenericResponseDto.getExpires_at();
        this.expires_in = khaltiInitiateGenericResponseDto.getExpires_in();
    }
}
