
import './App.css'
import Body from './components/Body';
import Header from './components/Header';
import { Provider } from 'react-redux';
import store from './hooks/store';
import { GoogleOAuthProvider } from "@react-oauth/google";


function App() {


  return (
    <>
    <GoogleOAuthProvider clientId="425778344627-jggdqtb5moekb4dde3rmppl7558f4q0h.apps.googleusercontent.com">
      <Provider store={store}>
        {/* <div className='font-bold'>
          Youtube
          </div> */}
          <Header/>
          <Body/>
        </Provider>
      </GoogleOAuthProvider>
    </>
  )
}

export default App
