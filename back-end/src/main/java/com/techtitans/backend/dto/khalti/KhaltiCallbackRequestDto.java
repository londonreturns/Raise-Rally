package com.techtitans.backend.dto.khalti;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class KhaltiCallbackRequestDto implements Serializable {
    private String pidx;
}
