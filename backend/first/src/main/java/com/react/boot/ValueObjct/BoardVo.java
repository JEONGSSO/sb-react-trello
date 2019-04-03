package com.react.boot.ValueObjct;

import java.util.Date;

import lombok.Data;

@Data
public class BoardVo {

   private Integer bno;
   private String title;
   private String content;
   private String writer;
   private Date regdata;
   private int viewcnt;
   private int replycnt;

}