package com.techtitans.backend.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

// This exception is used to indicate that a requested resource was not found.
@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException{
   // Constructs a new ResourceNotFoundException with the specified detail message.
    public ResourceNotFoundException(String message){
        super(message);
    }
}


