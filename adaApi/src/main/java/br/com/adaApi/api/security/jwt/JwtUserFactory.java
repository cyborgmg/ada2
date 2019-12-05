package br.com.adaApi.api.security.jwt;

import java.util.ArrayList;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import br.com.adaApi.api.entity.Profile;
import br.com.adaApi.api.entity.User;
import br.com.adaApi.api.enums.ProfileEnum;

public class JwtUserFactory {

	private JwtUserFactory() {}
	
	public static JwtUser create(User user) {
		return new JwtUser(user.getId(), 
						   user.getEmail(), 
						   user.getPassword(), 
						   mapToGrantedAuthorities(user.getPerfils()) );	
	}
	
	private static List<GrantedAuthority> mapToGrantedAuthorities(List<Profile> perfils){
		List<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();
		
		for (Profile perfil : perfils) {
			
			authorities.add(new SimpleGrantedAuthority( perfil.getProfile().toString() ));
		}
		
		return authorities;
	}
}
