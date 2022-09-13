package com.greatlearning.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.greatlearning.model.Result;

public interface ResultRepository extends JpaRepository<Result, Long> {
	Result findByStudent_id(Long id);
}
