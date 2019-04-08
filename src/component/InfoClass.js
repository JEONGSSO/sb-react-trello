import React, { Component } from 'react';

class InfoClass extends Component {
   state = {
      id: '',
      pw: ''
   }

   handleId(e) {
      this.setState({ id: e.target.value })
   }

   handlePw(e) {
      this.setState({ pw: e.target.value })
   }

   render() {
      return (
         <React.Fragment>
            <div>
               <input type="text" onChange={e => this.handleId(e)} />
               <span><b>{this.state.id}</b></span>
            </div>
            <div>
               <input type="text" onChange={e => this.handlePw(e)} />
               <span><b>{this.state.pw}</b></span>
            </div>
         </React.Fragment>
      );
   }
}

export default InfoClass;
