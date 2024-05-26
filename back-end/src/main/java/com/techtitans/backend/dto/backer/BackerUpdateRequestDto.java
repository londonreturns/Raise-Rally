package com.techtitans.backend.dto.backer;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Data
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class BackerUpdateRequestDto implements Serializable {
    private int backerId;
    private String name;
    private String oldPassword;
    private String newPassword;
}
