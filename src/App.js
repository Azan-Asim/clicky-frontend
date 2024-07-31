import React from 'react';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/Home';
import Women from './pages/Women';
import Newarrival from './pages/Newarrival';
import Sale from './pages/Sale';
import Customercare from './pages/Customercare';
import Productpage from './pages/Productpage';
import Shoppingbag from './pages/Shoppingbag';
import Searchpage from './pages/Searchpage';
import Notification from './pages/Notification';
import './App.css';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/women",
    element: <Women />,
  },
  {
    path: "/Newarrival",
    element: <Newarrival />,
  },
  {
    path: "/Sale",
    element: <Sale />,
  },
  {
    path: "/Customercare",
    element: <Customercare />,
  },
  {
    path: "/Productpage",
    element: <Productpage />,
  },
  {
    path: "/Shoppingbag",
    element: <Shoppingbag />,
  },
  {
    path: "/Searchpage",
    element: <Searchpage />,
  },
  {
    path: "/Notification",
    element: <Notification />,
  },
]) //added a path for our route



function App() {
  return (
    <RouterProvider router={router} /> //wrapped our component(s) in the React router provider.

    );
}

export default App;
