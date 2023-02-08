import React from 'react';

import './App.css'
import { CounterMultiply } from './components/CounterMultiply';
import { CounterSquare } from './components/CounterSquare';
import { CounterUpdater } from './components/CounterUpdater';
import { Login } from './components/Login';
import { Logout } from './components/Logout';
import {useSelector} from 'react-redux';
import { Input } from './components/Input';
function App() {
  const userName: string = useSelector<any, string>(state => state.auth.userName);
  const [operand, setOperand] = React.useState(1);
  const [factor, setFactor] = React.useState(10);
  const ADMIN: string = 'admin';
  return <div>
    {userName && <div>
      <p>user name: {userName}</p>
        <Input placeHolder={'Enter operand'} inputProcess={function (value: string):
         string {
        setOperand(+value);
        return '';
      } }></Input>
        <Input placeHolder={'Enter factor'} inputProcess={function (value: string):
         string {
        setFactor(+value);
        return '';
      } }></Input>
      </div>}
    {userName && <div>
    <CounterUpdater operand={operand}></CounterUpdater>
    <CounterSquare></CounterSquare>
    <CounterMultiply factor={factor}></CounterMultiply>
  </div>}
  {userName && <Logout></Logout>}
  {!userName && <Login loginValidation= {
    (userName: string): boolean => {return userName.includes(ADMIN)}} ></Login>}
  </div>

}
export default App;


