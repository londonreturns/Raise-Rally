package com.techtitans.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

// We use company dto class to transfer the data between client and server
public class CompanyRequestDto implements Serializable {
    private int companyId;
    private String name;
    private String email;
    private int active;
    private int ticked;
    private String password;
}
