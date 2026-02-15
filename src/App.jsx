
import './App.css'
import Body from './components/Body';
import Header from './components/Header';
import { Provider } from 'react-redux';
import store from './hooks/store';

function App() {


  return (
    <>
    <Provider store={store}>
      {/* <div className='font-bold'>
        Youtube
        </div> */}
        <Header/>
        <Body/>
      </Provider>
    </>
  )
}

export default App
