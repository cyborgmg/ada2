package br.com.adaApi.api.service.impl;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import br.com.adaApi.api.entity.Profile;
import br.com.adaApi.api.entity.User;
import br.com.adaApi.api.enums.ProfileEnum;
import br.com.adaApi.api.repository.UserRepository;
import br.com.adaApi.api.service.UserService;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepository;
	
	@Override
	public User findByEmail(String email) {
		// TODO Auto-generated method stub
		return userRepository.findByEmail(email);
	}

	@Override
	public User createOrUpdate(User user) {
		for (Profile profile : user.getPerfils()) {
			profile.setUsuario(user);
		}
		User u = userRepository.save(user);
		u.setPassword(null);
		return u;
	}

	@Override
	public User findById(Long id) {
		// TODO Auto-generated method stub
		return userRepository.findById(id).get();
	}

	@Override
	public void delete(Long id) {
		// TODO Auto-generated method stub
		userRepository.deleteById(id);
	}

	@Override
	public List<User> findAll() {
		// TODO Auto-generated method stub
		return userRepository.findAll();
	}
	
	@Override
	public List<User> findUserParams(String email){
		
		String semail = ((email!=null)&&(!email.isEmpty()))?email:"";
		
		List<User> users = userRepository.findUserParams(semail);
		
		users.forEach( (User user) -> {
			user.setPassword(null);
		});
		
	return users;	
	}

}
