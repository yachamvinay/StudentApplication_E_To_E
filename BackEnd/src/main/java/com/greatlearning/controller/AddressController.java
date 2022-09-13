package com.greatlearning.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AddressController {
	
	@GetMapping("/")
	public String getLogin()
	{
		return "Login";
	}
	@GetMapping("/contact")
	public String getContact()
	{
		return "Contact";
	}

}
