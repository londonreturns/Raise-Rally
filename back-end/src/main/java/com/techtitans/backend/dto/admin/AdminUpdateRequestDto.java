package com.techtitans.backend.dto.admin;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class AdminUpdateRequestDto implements Serializable {
    private int adminId;
    private String name;
    private String oldPassword;
    private String newPassword;
}
