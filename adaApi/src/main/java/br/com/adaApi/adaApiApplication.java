package br.com.adaApi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

import br.com.adaApi.api.entity.Profile;
import br.com.adaApi.api.entity.User;
import br.com.adaApi.api.enums.ProfileEnum;
import br.com.adaApi.api.repository.UserRepository;
import br.com.adaApi.api.security.service.RedisService;

@SpringBootApplication
public class adaApiApplication {
	
	@Autowired
	private RedisService redisService;

	public static void main(String[] args) {
		SpringApplication.run(adaApiApplication.class, args);
	}
	
	@Bean
	CommandLineRunner init(UserRepository userRepository, PasswordEncoder passwordEncoder) {
		return args -> {
				initUsers(userRepository, passwordEncoder);
			};
	}
	
	private void initUsers(UserRepository userRepository, PasswordEncoder passwordEncoder) {
		User admin = new User();
		admin.setEmail("admin@helpdesk.com");
		admin.setPassword(passwordEncoder.encode("123456"));
		//admin.setProfile(ProfileEnum.ROLE_ADMIN);
		admin.getPerfils().add(new Profile(ProfileEnum.ROLE_ADMIN,admin));
		
		User find = userRepository.findByEmail("admin@helpdesk.com");
		if(find == null ) {
			userRepository.save(admin);
		}
		
		redisService.getJedis().flushDB();
	}
	
}
