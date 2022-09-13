package com.greatlearning.service;

import java.util.List;
import java.util.Optional;

import org.springframework.web.multipart.MultipartFile;

import com.greatlearning.model.Result;
import com.greatlearning.model.Student;

public interface StudentService {
	
	public List<Student> getAllStudents();
	public void addStudent(Student student);
	public Student findByUsernameAndPassword(String username,String password);
	public Optional<Student> findById(Long id);
	public Result saveResult(Result result);
	public int storeImage(MultipartFile file,int id);
	public String getResult(Long id);
}
 