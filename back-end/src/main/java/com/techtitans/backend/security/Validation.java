package com.techtitans.backend.security;

import java.time.LocalDate;
import java.util.regex.Pattern;

public class Validation {
    // Regular expression for validation
    private static final Pattern NAME_PATTERN = Pattern.compile("^[a-zA-Z]+(?:\\s[a-zA-Z]+)*$");
    private static final Pattern EMAIL_PATTERN = Pattern.compile("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.com$");
    private static final Pattern PASSWORD_PATTERN = Pattern.compile("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,15}$");

    // Name validation
    public static boolean isNameValid(String name){
        if (name == null) {
            return false;
        }
        String strippedName = name.strip();
        return !strippedName.isEmpty() && NAME_PATTERN.matcher(strippedName).matches();
    }

    // Email validation
    public static boolean isEmailValid(String email){
        if (email == null) {
            return false;
        }
        String trimmedEmail = email.strip();
        return !trimmedEmail.isEmpty() && EMAIL_PATTERN.matcher(trimmedEmail).matches();
    }

    // Password validation
    public static boolean isPasswordValid(String password){
        if (password == null) {
            return false;
        }
        String trimmedPassword = password.strip();
        return trimmedPassword.length() >= 8 && trimmedPassword.length() <= 15 && PASSWORD_PATTERN.matcher(trimmedPassword).matches();
    }


    // Product Description validation
    public static boolean isDescriptionValid(String description) {
        return description != null && !description.isBlank();
    }

    // Goal validation
    public static boolean isGoalValid(int goal) {
        return goal > 0;
    }

    // Amount validation
    public static boolean isAmountValid(int amount) {
        return amount >= 0;
    }

    // Date validation
    public static boolean isDateValid(LocalDate date) {
        return date != null && date.isAfter(LocalDate.now());
    }

    // Date is after validation
    public static boolean isDateValid(LocalDate startDate, LocalDate endDate) {
        return startDate.isBefore(endDate);
    }
}