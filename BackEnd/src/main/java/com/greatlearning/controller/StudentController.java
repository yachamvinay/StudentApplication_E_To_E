package com.greatlearning.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.greatlearning.model.Result;
import com.greatlearning.model.Student;
import com.greatlearning.service.StudentService;

@RestController
@CrossOrigin(origins = "*")
public class StudentController {
	
	@Autowired
	private StudentService studentService;
	
	@GetMapping(path = "/details")
	public List<Student> getStudentList()
	{
		return studentService.getAllStudents();
	}
	
	@PostMapping(path = "/addstudent")
	public List<Student> addStudentList(@RequestBody Student student)
	{
		studentService.addStudent(student);
		return studentService.getAllStudents(); 
	}
	@GetMapping(path = "/getStudent" )
	public Optional<Student> getStudentDetails(@RequestParam(name = "id") Long id)
	{
		return studentService.findById(id);
	}
	@PostMapping(path = "/saveResult")
	public Result saveResult(@RequestBody Result result)
	{
		Student s=new Student();
		s.setId(result.getStudentId());
		result.setStudent(s);
		return studentService.saveResult(result);
	}
	@PostMapping("/fileUpload/{stid}")
	public int fileUpload(@PathVariable int stid,@RequestParam MultipartFile file)
	{
		return studentService.storeImage(file, stid); 
	}
	
	@GetMapping("/getResult")
	public String getResult(@RequestParam Long id)
	{
		
		return studentService.getResult(id);
	}

}
 