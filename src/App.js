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

function App() {

  const myRouter = createBrowserRouter(createRoutesFromElements(
      <Route path='/' element={<Template />}>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<p>This page is not available!</p>} />
      </Route>

   )
  );


  return (
    <div className="App">
      <RouterProvider router={myRouter} />
    </div>
  );
}

export default App;
