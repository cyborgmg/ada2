package br.com.adaApi.api.entity;

import java.io.Serializable;
import javax.persistence.*;


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
	@SequenceGenerator(name="PERFIL_ID_GENERATOR", sequenceName="USER_SQ")
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="PERFIL_ID_GENERATOR")
	private long id;

	@Column(name="ENUM")
	private String role;

	//bi-directional many-to-one association to User
	@ManyToOne
	@JoinColumn(name="ID_USUARIO")
	private User usuario;

	public Profile() {
	}

	public long getId() {
		return this.id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public User getUsuario() {
		return this.usuario;
	}

	public void setUsuario(User usuario) {
		this.usuario = usuario;
	}

}