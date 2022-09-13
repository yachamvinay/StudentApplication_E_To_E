package com.greatlearning.DAO;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.greatlearning.model.Student;


@Repository
public class StudentDAO {
	
	private static List<Student> list = new ArrayList<Student>();
	
	

	public List<Student> getAllStudents()
	{
		return list;
	}
	
	public void addStudent(Student student)
	{
		list.add(student);
	}
}
