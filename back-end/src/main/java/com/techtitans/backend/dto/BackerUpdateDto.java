package com.techtitans.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
// DTO for updating backer entity
public class BackerUpdateDto implements Serializable {
    private int backerId;
    private String name;
    private String email;
    private String oldPassword;
    private String newPassword;
}
