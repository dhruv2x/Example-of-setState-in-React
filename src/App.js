import React,{Component} from  'react'
import Message from './component/Message';
class App extends Component {
  render() 
  { 
    return (
      //I have used boostrap for heading
      <div className="mx-auto" style={{width: '700px'}}>
      <div class="card">
        <div class="card-body">
        Below is Just a example of setState in React JS :)
        </div>
      </div>
    <Message/>
    </div>
    );
  }
}

export default App;
