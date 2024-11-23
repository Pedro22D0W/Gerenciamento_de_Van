package com.example.proj_vans.proj_vans.infra.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfigurations {
   @Autowired
    SecurityFilter securityFilter;
    @Bean
    public SecurityFilterChain SecurityFilterChain(HttpSecurity httpSecurity) throws Exception{
        return httpSecurity
                .cors()  // Habilita CORS
                .and()
                .csrf(csrf -> csrf.disable())
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .authorizeHttpRequests(authorize -> authorize
                       .requestMatchers(HttpMethod.POST,"auth").permitAll()
                        .requestMatchers(HttpMethod.POST,"/motorista/store").hasRole("ADMIN")
                        .requestMatchers(HttpMethod.GET,"/motorista/getAll").hasRole("ADMIN")
                        .requestMatchers(HttpMethod.POST,"/passageiro/store").hasRole("ADMIN")
                        .requestMatchers(HttpMethod.GET,"/passageiro/getAll").hasRole("ADMIN")
                        .requestMatchers(HttpMethod.POST,"/motorista/PassageirosDaLinha").hasRole("MOTORISTA")
                        .requestMatchers(HttpMethod.POST,"/motorista/PassageirosDaVolta").hasRole("MOTORISTA")
                        .requestMatchers(HttpMethod.POST,"/motorista/get-profile").permitAll()
                        .requestMatchers(HttpMethod.POST,"/passageiro/get-profile").permitAll()
                        .requestMatchers(HttpMethod.PUT,"/boleto/{id}/updateStatus").permitAll()
                        .requestMatchers(HttpMethod.GET,"/passageiro/boletos-passageiro").permitAll()
                        .requestMatchers(HttpMethod.GET,"/passageiro/boletos/{passageiroId}").permitAll()
                        .requestMatchers(HttpMethod.GET,"/passageiro//get-my-motorista").permitAll()
                        .requestMatchers(HttpMethod.GET,"/passageiro//get-my-motorista-volta").permitAll()
                        .requestMatchers("/profile_passageiros/**").permitAll()
                        .requestMatchers("/profile_motoristas/**").permitAll()
                        .anyRequest().authenticated())
                .addFilterBefore(securityFilter, UsernamePasswordAuthenticationFilter.class)
                .build();
    }
    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }
    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }
}
