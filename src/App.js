
import './App.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { RouterProvider } from 'react-router-dom';
import { useEffect } from 'react';
import router from './Components/Routes/Routes';
import { Toaster } from 'react-hot-toast';




function App() {
  
    useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);
  return (
    <div className='body'>
      <RouterProvider router={router}></RouterProvider>
    <Toaster></Toaster>
    </div>
  );
}

export default App;
