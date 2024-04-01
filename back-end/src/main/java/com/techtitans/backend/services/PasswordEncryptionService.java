package com.techtitans.backend.services;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class PasswordEncryptionService {

    //static method to encrypt
    public String encrypt(String password) {
        try {
            // Create a MessageDigest instance for SHA-256
            MessageDigest digest = MessageDigest.getInstance("SHA-256");

            // Generate the hash for the password bytes
            byte[] hash = digest.digest(password.getBytes());

            // StringBuilder to store the hexadecimal representation of the hash
            StringBuilder hexString = new StringBuilder();

            //for each loop to convert byte to String one by one using the hexadecimal format
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
            // Handle exception
            e.printStackTrace();
            return null;
        }
    }
}