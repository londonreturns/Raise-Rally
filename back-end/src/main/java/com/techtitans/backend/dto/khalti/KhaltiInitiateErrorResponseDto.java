package com.techtitans.backend.dto.khalti;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class KhaltiInitiateErrorResponseDto implements Serializable {
    private List<String> return_url;
    private List<String> website_url;
    private List<String> purchase_order_id;
    private List<String> purchase_order_name;
    private List<String> amount;
    private String error_key;

    public KhaltiInitiateErrorResponseDto(KhaltiInitiateGenericResponseDto khaltiInitiateGenericResponseDto) {
        this.return_url = khaltiInitiateGenericResponseDto.getReturn_url();
        this.website_url = khaltiInitiateGenericResponseDto.getWebsite_url();
        this.purchase_order_id = khaltiInitiateGenericResponseDto.getPurchase_order_id();
        this.purchase_order_name = khaltiInitiateGenericResponseDto.getPurchase_order_name();
        this.amount = khaltiInitiateGenericResponseDto.getAmount();
    }
}
