package com.react.boot.Mappers;

import java.util.List;

import com.react.boot.ValueObjct.ReplyVo;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

public interface ReplyMapper {

   @Select("select * from reply where bno = #{bno}")
   public List<ReplyVo> getReplyAll(@Param("bno") int bno);

   @Insert("insert into reply(bno, rtext, replyer) values( #{bno}, #{rtext}, #{replyer})")
   public void addReply(ReplyVo replyvo);

   @Update("update board set replycnt = replycnt + #{amt} where bno = #{bno}")
   public void updateReplycnt(@Param("bno") int bno, @Param("amt") int amt);

   @Update("update reply set rtext = #{rtext}, rdate = now(), isEdit = true where bno = #{bno} and rno = #{rno}")
   public void replyEdit(ReplyVo replyvo);

   @Delete("delete from reply where bno = #{bno} and rno = #{rno}")
   public void replyDel(@Param("bno") int bno, @Param("rno") int rno);

}