package com.greatlearning.service;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.greatlearning.model.Result;
import com.greatlearning.model.Student;
import com.greatlearning.repository.ResultRepository;
import com.greatlearning.repository.StudentRepository;

@Service
public class StudentServiceImpl implements StudentService{
	
	@Autowired
	private StudentRepository studentRepository;
	
	@Autowired
	private ResultRepository resultRepository;
	
	private static String UPLOAD_FOLDER="D:\\CASE_STUDY\\Images";

	@Override
	public List<Student> getAllStudents() {
		
		return studentRepository.findAll();
	}

	@Override
	public void addStudent(Student student) {
		
		studentRepository.save(student);
		
	}

	@Override
	public Student findByUsernameAndPassword(String username, String password) {
		// TODO Auto-generated method stub
		return studentRepository.findByUsernameAndPassword(username,password);
	}

	@Override
	public Optional<Student> findById(Long id) {
		// TODO Auto-generated method stub
		 return studentRepository.findById(id);
	}

	@Override
	public Result saveResult(Result result) {
		// TODO Auto-generated method stub
		return resultRepository.save(result);
	}

	@Override
	public int storeImage(MultipartFile file, int id) {
		try {
			Path getPath=Paths.get("D:\\CASE_STUDY\\Images");
			Files.copy(file.getInputStream(),getPath.resolve(file.getOriginalFilename()));
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		
		return 1;
	}

	@Override
	public String getResult(Long id) {
		// TODO Auto-generated method stub
		return resultRepository.findByStudent_id(id);
	}
}
