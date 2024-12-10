package com.example.proj_vans.proj_vans;

public enum UserRole {
    ADMIN("admin"),
    PASSAGEIRO("passageiro"),
    MOTORISTA("motorista");

    private String role;
    UserRole(String role){
        this.role = role;
    }
    public String getRole(){
        return role;
    }
}
