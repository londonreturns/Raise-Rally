package com.techtitans.backend.dto.khalti;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class KhaltiCallbackResponseDto implements Serializable {
    private String pidx;
    private int total_amount;
    private String status;
    private String transaction_id;
    private int fee;
    private boolean refunded;
}
