package com.react.boot.Controller;

import javax.servlet.http.HttpSession;

import com.react.boot.ValueObjct.SignVo;
import com.react.boot.Mappers.SignMapper;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("sign")
public class SignController {

   private static final Logger logger = LoggerFactory.getLogger(SignController.class);

   @Autowired
   private SignMapper signMapper;

   @PostMapping("/login")
   public ResponseEntity<Integer> login(@RequestBody SignVo signvo) throws Exception {
      try {
         int login = signMapper.login(signvo);

         if (login == 1) {
            signvo.setUpw(null);
            return new ResponseEntity<>(login, HttpStatus.OK);
         } else {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
         }
      } catch (Exception e) {
         e.printStackTrace();
         return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
      }

   }

   @PostMapping("")
   public ResponseEntity<String> signUp(@RequestBody SignVo signvo) {
      try {
         signMapper.signUp(signvo);
         return new ResponseEntity<>(HttpStatus.OK);
      } catch (Exception e) {
         return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
      }
   }

}