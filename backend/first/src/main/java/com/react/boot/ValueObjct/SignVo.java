package com.react.boot.ValueObjct;

import lombok.Data;
import lombok.ToString;

@Data
@ToString(exclude={"upw"})
public class SignVo {

   private String uid;
   private String upw;

}