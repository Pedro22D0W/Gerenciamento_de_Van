package com.example.proj_vans.proj_vans;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Configuration
@ConfigurationProperties(prefix = "file") // Carrega todas as propriedades com prefixo "file" do application.properties
public class FileStorageProperties {

    private String uploadDir;
    private String passageirosProfileDir;
    private String motoristasProfileDir;

    // Getters e Setters
    public String getUploadDir() {
        return uploadDir;
    }

    public void setUploadDir(String uploadDir) {
        this.uploadDir = uploadDir;
    }

    public String getPassageirosProfileDir() {
        return passageirosProfileDir;
    }

    public void setPassageirosProfileDir(String passageirosProfileDir) {
        this.passageirosProfileDir = passageirosProfileDir;
    }

    public String getMotoristasProfileDir() {
        return motoristasProfileDir;
    }

    public void setMotoristasProfileDir(String motoristasProfileDir) {
        this.motoristasProfileDir = motoristasProfileDir;
    }
}



