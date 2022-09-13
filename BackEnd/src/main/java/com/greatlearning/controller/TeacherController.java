package com.greatlearning.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.greatlearning.model.Teacher;
import com.greatlearning.service.TeacherService;


@RestController
@CrossOrigin(origins = "*")
public class TeacherController {
	
	@Autowired
	private TeacherService teacherService;
	
	@PostMapping("/addteacher")
	public Teacher addTeacher(@RequestBody Teacher teacher)
	{
		System.out.println(teacher);
		return teacherService.addTeacher(teacher);
		
	}
	

}
