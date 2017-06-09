import React from 'react';

class Abc extends React.Component {
   a:string = "ABC";

   constructor(props) {
      super(props);
		
      this.state = {
         data: 0,
         Content: "Content from state..",
         count: 0
      }                

      //a:any = "abc";
      //this.a = "Syda";

      this.setNewNumber = this.setNewNumber.bind(this)
      this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
   };

   forceUpdateHandler(){
      //this.forceUpdate(); // support by reactjs
      this.state.count += 1;
      console.log(this.state.count)
   }

   setNewNumber(t) {
      console.log(t.target);
      this.setState({data: this.state.data + 1})
   }

   render() {
      return (
         <div>
            <button onClick = {this.forceUpdateHandler}>FORCE UPDATE</button>
            <h4>Random number: {Math.random()}</h4>
            <h2>{this.state.count}</h2>
            <button onClick = {this.setNewNumber}>INCREMENT</button>
            <input type="button" value="add more" onClick= {this.setNewNumber}/>
            <p>{this.a}</p>
            <Content myNumber = {this.state.data}></Content>
         </div>
      );
   }
}

class Content extends React.Component {

   show(){
      console.log("AAAAAA");
   }

   componentWillMount() {
      console.log('Component WILL MOUNT!')
   }

   componentDidMount() {
      console.log('Component DID MOUNT!');
      /*window.setInterval(function () {
         this.show();
      }.bind(this), 1000);*/
   }

   componentWillReceiveProps(newProps) {    
      console.log('Component WILL RECIEVE PROPS!')
   }

   shouldComponentUpdate(newProps, newState) {
      return true;
   }

   componentWillUpdate(nextProps, nextState) {
      console.log('Component WILL UPDATE!');
   }

   componentDidUpdate(prevProps, prevState) {
      console.log('Component DID UPDATE!')
   }

   componentWillUnmount() {
      console.log('Component WILL UNMOUNT!')
   }
	
   render() {
      return (
         <div>
            <h3>{this.props.myNumber}</h3>
         </div>
      );
   }
}

export default Abc;