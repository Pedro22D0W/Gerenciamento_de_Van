package com.example.proj_vans.proj_vans.services;

import com.example.proj_vans.proj_vans.admin.AdminRepository;
import com.example.proj_vans.proj_vans.motorista.MotoristaRepository;
import com.example.proj_vans.proj_vans.passageiro.PassageiroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class AuthorizationService implements UserDetailsService {
    @Autowired
    AdminRepository adminRepository;
    @Autowired
    MotoristaRepository motoristaRepository;
    @Autowired
    PassageiroRepository passageiroRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        System.out.println("Tentando carregar usuário: " + email);
        
        UserDetails user = adminRepository.findByEmail(email);
        if (user == null) {
            user = motoristaRepository.findByEmail(email);
        }
        if (user == null) {
            user = passageiroRepository.findByEmail(email);
        }
        if (user == null) {
            throw new UsernameNotFoundException("Usuário não encontrado com o email fornecido");
        }
        
        return user;
    }
}
