package com.techtitans.backend.dto.price;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
// DTO representing the response for price entity
public class PriceResponseDto implements Serializable {
    private int id;
    private int amount;
}
