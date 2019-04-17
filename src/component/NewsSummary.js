import React, { Component } from 'react'

export default class NewsSummary extends Component {
   
   render() {
      return (
   <div className="summaryWrapper">
      <div className="summaryHeader">
         <span>종목별 주요뉴스</span>
         마진
         <CategotyBtn/>
      </div>
      <div className="summaryContent">
         <div className="summaryPicture">
            사진
            <img src="" alt=""/>
         </div>
         <div className="contetnTitle">
            <h3>피오렌티나</h3>
         </div>
         <div className="contetnQQQ">
            <h5>선임</h5>
         </div>
      </div>
      <div className="summaryList">
         <CategoryList/>
      </div>
      
      <style jsx>{`
      
      .summaryContent {
         display: flex;
      }
      
      `}


      </style>
   </div>

      )
   }
}

const CategotyBtn = () => (
   <span>
      <a>축구</a>
      <a>야구</a>
      <a>농구</a>
      <a>배구</a>
      <a>기타</a>
   </span>
)



const CategoryList = () => (
   <React.Fragment>
      <ul>
         <li>List</li>
         <li>List</li>
         <li>List</li>
         <li>List</li>
         <li>List</li>
      </ul>
   </React.Fragment>
)