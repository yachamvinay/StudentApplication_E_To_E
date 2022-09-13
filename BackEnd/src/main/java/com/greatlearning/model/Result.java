package com.greatlearning.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Temporal;
import javax.persistence.Transient;

import lombok.Data;

@Entity
@Data
public class Result {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "student_id",nullable = false,unique = true)
	private Student student;
	@Column
	private String result;
	
	@Transient
	private Long studentId; 
	
	

}
