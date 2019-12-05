package br.com.adaApi.api.entity;

import java.io.Serializable;
import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import java.util.ArrayList;
import java.util.List;


/**
 * The persistent class for the USUARIO database table.
 * 
 */
@Entity
@Table(name="USUARIO")
@NamedQuery(name="User.findAll", query="SELECT u FROM User u")
public class User implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@SequenceGenerator(name="USUARIO_ID_GENERATOR", sequenceName="USER_SQ", allocationSize = 1)
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="USUARIO_ID_GENERATOR")
	private long id;

	@Column(unique = true)
	@NotBlank(message = "Email requerido")
	@Email(message = "Email inválido")
	private String email;

	private String password;

	//bi-directional many-to-one association to Profile
	@OneToMany(mappedBy="usuario", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	private List<Profile> perfils = new ArrayList<Profile>();

	public User() {
	}
	
	public User(@NotBlank(message = "Email requerido") @Email(message = "Email inválido") String email, String password, List<Profile> perfils) {
		super();
		this.email = email;
		this.password = password;
		this.perfils = perfils;
	}

	public long getId() {
		return this.id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getEmail() {
		return this.email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return this.password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public List<Profile> getPerfils() {
		return this.perfils;
	}

	public void setPerfils(List<Profile> perfils) {
		this.perfils = perfils;
	}

	public Profile addPerfil(Profile perfil) {
		getPerfils().add(perfil);
		perfil.setUsuario(this);

		return perfil;
	}

	public Profile removePerfil(Profile perfil) {
		getPerfils().remove(perfil);
		perfil.setUsuario(null);

		return perfil;
	}

}