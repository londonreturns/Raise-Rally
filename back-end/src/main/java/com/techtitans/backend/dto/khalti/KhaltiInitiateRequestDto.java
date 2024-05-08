package com.techtitans.backend.dto.khalti;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class KhaltiInitiateRequestDto implements Serializable {
    private String return_url;
    private String website_url;
    private int amount;
    private String purchase_order_id;
    private String purchase_order_name;
    private String merchant_username;
    private String merchant_extra;
}
