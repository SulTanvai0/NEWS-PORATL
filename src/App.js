import { RouterProvider } from 'react-router-dom';
import {routes} from './Routes/Routes/Routes'
import './App.css';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className='app'>
      <RouterProvider router={routes}></RouterProvider>
      <Toaster/>
    </div>
  );
}

export default App;
