package com.greatlearning.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Entity
@Data
public class Teacher {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	@Column
	private String firstname;
	@Column
	private String lastname;
	@Column
	private String subject;
	@Column
	private String qualification;
	@Column
	private String email; 
	@Column
	private String address;
	@Column
	private Long phno;
	@Override
	public String toString() {
		return "Teacher [id=" + id + ", firstname=" + firstname + ", lastname=" + lastname + ", subject=" + subject
				+ ", qualification=" + qualification + ", email=" + email + ", address=" + address + ", phno=" + phno
				+ "]";
	}
	
	

}
