// import logo from './logo.svg';
import { DndProvider } from 'react-dnd';
import Header from './components/Header';
import './App.css';
import Sidebar from './components/Sidebar';
import Body from './components/Body';
import { Provider } from 'react-redux';
import store from './store';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
  return (
    <>
    <DndProvider  backend={HTML5Backend}>
    <Provider store={store}>
    <div className="App">
      <Header/>
      <div className='flex'>
        <Sidebar/>
        <Body/>
      </div>
    </div>
    </Provider>
    </DndProvider></>
  );
}

export default App;
