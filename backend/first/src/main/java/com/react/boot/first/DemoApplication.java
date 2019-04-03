package com.react.boot.first;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
  
@ComponentScan("com.react.boot")	//com.test 밑의 패키지들 bean을 자동 등록 404,
									//페이지 못찾을떼
@MapperScan("com.react.boot.Mappers")	//매퍼 위치 설정
@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

}
