package com.greatlearning.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.greatlearning.model.Teacher;

public interface TeacherRepository extends JpaRepository<Teacher, Long> {

}
