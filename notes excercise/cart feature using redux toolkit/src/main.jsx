import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './redux/Store'
import { Provider } from 'react-redux'
import { RouterProvider,createBrowserRouter } from "react-router-dom";
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home.jsx';
import Langingpage from './components/Langingpage.jsx';
import ProductDetails from './components/ProductDetails.jsx';
import Cart from './components/Cart.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // This includes Navbar, Footer, etc.
    children: [
      {
        index:true,
        element:<Langingpage/>
      },
      {
        path:"home",
        element:<Home/>
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "product/:id",
        element: <ProductDetails />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <Provider store={store}>

     <RouterProvider router={router} />
    </Provider>
  // </StrictMode>,
)
