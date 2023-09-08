import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './to-do'
import Actor from './actor'
import Singers from './singers'
import BookStor from './BookStore'

function App() {

  const actors =['Sakib', 'Bappy', 'Homain Forid', 'Salman Shaa', 'Robai'];

  const singers = [
    {id:1, name: 'Dr. Mahfuzur', age:68},
    {id:2, name: 'Asif', age:38},
    {id:3, name: 'Eva Rahman', age:28},
    {id:4, name: 'Milon', age:48},
    {id:5, name: 'James', age:68},
  ]

  const books = [
    {id:1, name:'Phusice', price: 100},
    {id:2, name:'Biolog', price: 200},
    {id:3, name:'Chemistry', price: 150},
    {id:1, name:'Math', price: 300},
  ]

  return (
    <>
      <h1>Vite + React</h1>
      {/* <Person></Person> */}
      {/* <Student></Student> */}
      {/* <Developer></Developer> */}
      {/* <Device name="Laptop" price="55k"></Device> */}
      {/* <Device name="Mobile" price="25k"></Device> */}
      {/* <Device name="Watch" price="5k"></Device> */}
      {/* <Students age='16' id='420'></Students>
      <Students></Students> */}
      {/* <Students1 score='95' grade='7' ></Students1>
      <Students1></Students1>
      <Students1 score='69' grade='9' ></Students1> */}
      {/* <Todo task ='Learn React' isDone={true}></Todo>
      <Todo task ='Core Concepts' isDone={false}></Todo>
      <Todo task ='Try JSX' isDone={true}></Todo> */}
      {/* <Actor name={"Bappa Razz"}></Actor>
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      } */}

      {/* {
        singers.map(singer => <Singers singer ={singer} ></Singers>)
      } */}
      <BookStor books={books}></BookStor>
      </>
  )
}

function Person(){
  const age = 25;
  const money =100;
  const person={ name: 'Sakib', age: 45}
  return <h3> I am {person.name} person with age : {age}</h3>

};

function Student( ){
  return <div className='student'>
    <h2>This is a student</h2>
    <h3>Age :</h3>
    <h3>Id</h3>
  </div>
};

function Developer(){
  const developerStyle = {
    margin:'20px',
    padding:'20px',
    border:'2px solid purple',
    borderRadius:'25px'
  }
  return(
    <>
    <div style={developerStyle}>
      <h2>Dev Dev Dev</h2>
      <h4>Coding now :</h4>
    </div>;
    <div style={{
      margin:'20px',
      padding:'20px',
      border:'2px solid purple',
      borderRadius:'25px'
    }}>
      <h2>Dev2--Dev2--Dev2</h2>
      <h4>Coding now :</h4>
    </div>
    </>
  )
};

function Device(props){
  // console.log(props);
  return<h3 className='deviceStyle'>This Device : {props.name} == {props.price} </h3>
};

function Students(props){
  return <div className='student'>
    <h2>This is a student</h2>
    <h3>Age : {props.age} </h3>
    <h3>ID: {props.id} </h3>
  </div>
};

const {grade , score} = {grade: '7', score: '95'}
function Students1({grade= '5', score = '0'}){
  console.log(grade, score)
  return <div className='student'>
    <h2>This is a student</h2>
    <h3>Grade : {grade} </h3>
    <h3>Score: {score} </h3>
  </div>
};


export default App
