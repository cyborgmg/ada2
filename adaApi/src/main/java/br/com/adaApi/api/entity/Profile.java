package br.com.adaApi.api.entity;

import java.io.Serializable;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

import br.com.adaApi.api.enums.ProfileEnum;


/**
 * The persistent class for the PERFIL database table.
 * 
 */
@Entity
@Table(name="PERFIL")
@NamedQuery(name="Profile.findAll", query="SELECT p FROM Profile p")
public class Profile implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@SequenceGenerator(name="PERFIL_ID_GENERATOR", sequenceName="PERFIL_SQ", allocationSize = 1)
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="PERFIL_ID_GENERATOR")
	private long id;

	@Column(name="ENUM")
	@Enumerated(EnumType.STRING)
	private ProfileEnum profile;

	//bi-directional many-to-one association to User
	@ManyToOne
	@JsonIgnore
	@JoinColumn(name="ID_USUARIO")
	private User usuario;

	public Profile() {
	}

	public Profile(ProfileEnum profile, User usuario) {
		super();
		this.profile = profile;
		this.usuario = usuario;
	}

	public long getId() {
		return this.id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public ProfileEnum getProfile() {
		return profile;
	}

	public void setProfile(ProfileEnum profile) {
		this.profile = profile;
	}

	public User getUsuario() {
		return this.usuario;
	}

	public void setUsuario(User usuario) {
		this.usuario = usuario;
	}

}