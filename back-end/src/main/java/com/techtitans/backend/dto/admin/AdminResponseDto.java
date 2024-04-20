package com.techtitans.backend.dto.admin;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor

// DTO representing the response for admin entity
public class AdminResponseDto implements Serializable {
    private int adminId;
    private String name;
    private String email;
}
