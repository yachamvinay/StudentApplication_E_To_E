package com.greatlearning.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.greatlearning.model.Student;
import com.greatlearning.service.StudentService;

@RestController
@CrossOrigin(origins = "*")
public class LoginController {
	
	@Autowired
	private StudentService studentService;
	
	@GetMapping("/login")
	public Student getLoginUser(@RequestParam(name = "uname") String uname,
			@RequestParam(name = "password") String password)
	{
		return studentService.findByUsernameAndPassword(uname, password);
	}

}
