import React, {Component} from 'react'
class Message extends Component {
    //rconst snippet
    constructor() {
      super()  
      this.state = {
         msg:'Welcome Visitor'
      }
    }
    changemsg(){
        this.setState({
            msg:"Thanks u for Subsribing"
        })
    }
    //cc snippet
    render() { 
        return (
        <div>
            <h1>{this.state.msg}</h1>
            <div className="mx-auto" style={{width: '700px'}}>
            <button onClick={()=>this.changemsg()}>Click Here to Subscribe</button>
            </div>
        </div>
        );
    }
}
 
export default Message;