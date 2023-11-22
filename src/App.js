import './App.css';
import { About } from './Components/About';
import { Contact } from './Components/Contact';
import { Home } from './Components/Home';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Template } from './Template/Template';
import { createContext, useState } from 'react';


export const AppContext = createContext();

function App() {
  const [userName, setUserName] = useState("Red");

  const myRouter = createBrowserRouter(createRoutesFromElements(
      <Route path='/' element={<Template />}>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<p>This page is not available!</p>} />
      </Route>

   )
  );


  return (
    <div className="App">
      <AppContext.Provider value={{userName, setUserName}}>
      <RouterProvider router={myRouter} />
      </AppContext.Provider>
    </div>
  );
}

export default App;
