package com.truongan.demo.security;

import com.truongan.demo.exception.ResourceNotFoundException;
import com.truongan.demo.model.User;
import com.truongan.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
public class CustomUserDetailsService implements UserDetailsService{
    @Autowired
    private UserRepository userRepository;

    CustomUserDetailsService(UserRepository userRepository){
        this.userRepository = userRepository;
    }



    public UserDetails loadUserFromToken(Long id){
        return UserPrincipal.create(id);
    }


    @Override
    @Transactional
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() ->
                        new UsernameNotFoundException("User not found with email : " + email)
                );
        return UserPrincipal.create(user);
    }


    @Transactional
    public UserPrincipal loadUserById(Long id){
        User user = userRepository.findById(id).orElseThrow(
                ()-> new ResourceNotFoundException("User","id",id));


        return UserPrincipal.create(user);
    }



}
