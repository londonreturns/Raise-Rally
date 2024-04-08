package com.techtitans.backend.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

// Exception is thrown when validation is invalid
@ResponseStatus(value = HttpStatus.I_AM_A_TEAPOT)
public class ValidationException extends RuntimeException{
    public ValidationException(String message){
        super(message);
    }
}