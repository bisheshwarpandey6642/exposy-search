import React, { Component } from 'react';
import './Contact.css';


const people= [
   {  id:1,
      first:"bisheshwar",
      last: "pandey",
      age :24
   },
   {   id:2,
      first:"Ram",
      last: "Singh",
      age :71
   },
   {  id:3,
      first:"sai",
      last: "reddy",
      age :23
   },
   {  id:4,
      first:"Ramesh",
      last: "kumar",
      age :3
   },
   {  id:5,
      first:"kamlesh",
      last: "pathak",
      age :56
   },
   {  id:6,
      first:"kamal",
      last: "nayan",
      age :12
   },
   ]

   // eslint-disable-next-line no-unused-vars
   function searching(hand){
      return function(x){
         return x.first.toLowerCase().includes(hand.toLowerCase()) || !hand;
      }
   }

class Contact extends Component
{
   // eslint-disable-next-line no-useless-constructor
   constructor(props){
      super(props);
      this.state = {
         people: people,
         hand:''
      }
      this.searchHandle = this.searchHandle.bind(this);
   }
   searchHandle(event){
      this.setState({hand: event.target.value})
   }
   
   render(){
      // eslint-disable-next-line no-unused-vars
      const {hand, people} = this.state;
   return ( <div className="body">
      <form><br/><br/><br/>
         <input type = "text" placeholder= "serach by first name"
         onChange={this.searchHandle}
         value={hand }
         />
      </form><br/>
        {
           // eslint-disable-next-line array-callback-return
           this.state.people.filter(searching(this.state.hand)).map(function(person){
              return( 
              <table>
                  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>age</th>
  </tr>
                 <tr>
              <td>{person.first}</td>
              <td>{person.last}</td>
              <td>{person.age}</td>
                 </tr>
              </table>
             
              )
           })
        }<br/>
   </div>

   )
      }
}

export default Contact;