package com.techtitans.backend.dto.admin;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor

// DTO representing the request for admin entity
public class AdminRequestDto implements Serializable {
    private int adminId;
    private String name;
    private String email;
    private String password;
}
