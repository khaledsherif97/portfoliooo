import logo from './logo.svg';
import './App.css';
import LayOut from './components/LayOut/LayOut';
import About from './components/About/About';
import Resmue from './components/Resmue/Resmue';
import Projects from './components/Projects/Projects';
import NotFound from './components/NotFound/NotFound';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

function App() {
  let routes = createBrowserRouter([
    {
      path: "portfoliooo/", element: <LayOut />, children: [
        { path: "" , element: <About /> },
        { path: "resmue", element: <Resmue /> },
        { path: "projects", element: <Projects /> },




        { path: "*", element: <NotFound /> },

      ]
    }
  ])
  return (
    <>
    <RouterProvider router={routes} />
    </>
  );
}

export default App;
