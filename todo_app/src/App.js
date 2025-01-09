import './App.css';

import Button from './components/Button';
import Header from './components/Header';
import Item from "./components/Item"

function App() {
  return (
    <>
      <div className='todo-container'>
        <Header></Header>
        <Item text='Eat'></Item>
        <Item completed='true' text='Play'></Item>
        <Item text='Sleep'></Item>
        <Item text='Outing'></Item>
        <Item text='Study'></Item>
        <Button></Button>
      </div>
    </>
  );
}

export default App;
