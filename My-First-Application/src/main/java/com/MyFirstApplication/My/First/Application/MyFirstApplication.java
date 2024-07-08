package com.MyFirstApplication.My.First.Application;

import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class MyFirstApplication {

	public static void main(String[] args) {

		 SpringApplication.run(MyFirstApplication.class, args);
	}
	@Bean
	public ModelMapper modalMapper(){
		return new ModelMapper();
	}
}
