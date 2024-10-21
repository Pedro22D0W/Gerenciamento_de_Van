package com.example.proj_vans.proj_vans.infra.security;

import com.example.proj_vans.proj_vans.admin.AdminRepository;
import com.example.proj_vans.proj_vans.motorista.MotoristaRepository;
import com.example.proj_vans.proj_vans.passageiro.PassageiroRepository;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class SecurityFilter extends OncePerRequestFilter {
    @Autowired
    TokenService tokenService;
    @Autowired
    AdminRepository adminRepository;
    @Autowired
    MotoristaRepository motoristaRepository;
    @Autowired
    PassageiroRepository passageiroRepository;
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        var token = this.recoverToken(request);
        System.out.println("token recuperado: " + token );
        
        
        if (token != null){
            var login = tokenService.validateToken(token);
            System.out.println("E-mail decodificado admin: " + login);
            UserDetails user = adminRepository.findByEmail(login);
            if(user == null){
                user = motoristaRepository.findByEmail(login);
                System.out.println("E-mail decodificado motorista: " + login);
            }
            if(user == null){
                user = passageiroRepository.findByEmail(login);
                System.out.println("E-mail decodificado passageiro: " + login);
            }

            var authentication = new UsernamePasswordAuthenticationToken(user,null,user.getAuthorities());
            SecurityContextHolder.getContext().setAuthentication(authentication);
        }
        filterChain.doFilter(request, response);
    }

    private String recoverToken(HttpServletRequest request) {
        var authHeader = request.getHeader("Authorization");
        if(authHeader == null){
             System.out.println("header nulo ");
         return null;}
         System.out.println("header =" + authHeader);
        return authHeader.replace(("Bearer "),"");
    }
}
