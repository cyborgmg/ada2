package br.com.adaApi.api.service;

import java.util.List;

import org.springframework.data.domain.Page;

import br.com.adaApi.api.entity.User;
import br.com.adaApi.api.enums.ProfileEnum;

public interface UserService {
	
	User findByEmail(String email);
	
	User createOrUpdate(User user);
	
	User findById(Long id);
	
	void delete(Long id);
	
	List<User> findUserParams(String email);

	List<User> findAll();

}
