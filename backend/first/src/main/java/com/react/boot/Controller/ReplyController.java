package com.react.boot.Controller;

import java.util.ArrayList;
import java.util.List;

import com.react.boot.ValueObjct.ReplyVo;
import com.react.boot.Mappers.ReplyMapper;

import org.apache.ibatis.jdbc.Null;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping("reply")
public class ReplyController {

   @Autowired
   private ReplyMapper replyMapper;
   
   @GetMapping("/bno/{bno}")
   public List<ReplyVo> getReply(@PathVariable int bno) {
      List<ReplyVo> replyall = new ArrayList<>();
      replyall = replyMapper.getReplyAll(bno);
      return replyall;
   }

   @Transactional
   @PostMapping("/bno/{bno}")
   public ResponseEntity<Null> addReply(@RequestBody ReplyVo replyvo) {
      try {
         replyMapper.addReply(replyvo);
         replyMapper.updateReplycnt(replyvo.getBno(), 1);
         return new ResponseEntity<>(HttpStatus.OK);
      } catch (Exception e) {
         return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
      }
   }

   @PatchMapping("")
   public ResponseEntity<Null> replyEdit(@RequestBody ReplyVo replyvo) {
      try {
         replyMapper.replyEdit(replyvo);
         return new ResponseEntity<>(HttpStatus.OK);
      } catch (Exception e) {
         return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
      }
   }

   @Transactional
   @DeleteMapping("/bno/{bno}/rno/{rno}")
   public void replyDel(@PathVariable int bno, @PathVariable int rno) {
      replyMapper.replyDel(bno, rno);
      replyMapper.updateReplycnt(bno, -1);
   }
   
}