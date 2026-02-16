
import './App.css'
import Body from './components/Body';
import Header from './components/Header';
import { Provider } from 'react-redux';
import store from './hooks/store';
import { GoogleOAuthProvider } from "@react-oauth/google";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";



const appRouter = createBrowserRouter([{
  path:"/",
  element: <Body/>,
  children:[
    {
      path:"/",
      element:<MainContainer/>
    },
    {
      path:"watch",
      element:<WatchPage/>
    },
  ]
}])


function App() {


  return (
    <>
    <GoogleOAuthProvider>
      <Provider store={store}>
        {/* <div className='font-bold'>
          Youtube
          </div> */}
          <Header/>
          <RouterProvider router={appRouter}>
            <Body/>
          </RouterProvider>
        </Provider>
      </GoogleOAuthProvider>
    </>
  )
}

export default App
