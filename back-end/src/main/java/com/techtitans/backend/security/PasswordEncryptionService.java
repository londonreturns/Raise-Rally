package com.techtitans.backend.security;


import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class PasswordEncryptionService {

    // Static method to encrypt
    public static String encrypt(String password) {
        try {
            // MessageDigest instance for SHA-256
            MessageDigest digest = MessageDigest.getInstance("SHA-256");

            // Generate the hash for the password bytes
            byte[] hash = digest.digest(password.getBytes());

            // StringBuilder to store the hexadecimal representation of the hash
            StringBuilder hexString = new StringBuilder();

            // For each loop to convert byte to String one by one using the hexadecimal format
            for (byte b : hash) {
                String hex = Integer.toHexString(0xff & b);

                // Ensure that each byte generates two characters in the hexadecimal string
                if (hex.length() == 1) {
                    hexString.append('0');
                }
                // Append the hexadecimal representation to the StringBuilder
                hexString.append(hex);
            }

            // Return the hexadecimal string representing the hashed password
            return hexString.toString();
        } catch (NoSuchAlgorithmException e) {
            // Exception handling
            e.printStackTrace();
            return null;
        }
    }
}