package com.techtitans.backend.dto.khalti;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class KhaltiInitiateGenericResponseDto implements Serializable {
    private List<String> return_url;
    private List<String> website_url;
    private List<String> purchase_order_id;
    private List<String> purchase_order_name;
    private List<String> amount;
    private String error_key;
    private String pidx;
    private String payment_url;
    private String expires_at;
    private int expires_in;
}
