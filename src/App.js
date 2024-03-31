
import Layout from './Layout';
import { HomeScreen } from './home/HomeScreen';
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom";   
import { QuoteScreen } from './components/quoteScreen';
import Restaurant from './restaurants/Restaurant';
import Food from './Food';
import Contact from './Contact';
import Signup from './authentication/Signup';


function App() {

  const allPaths = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      children:  [
        {
          path: '/',
          element: <Signup/>
        },
        {
          path: '/home',
          element: <HomeScreen/>
        },
        {
          path: 'quotes',
          element: <QuoteScreen/>
        },
        {
          path: 'restaurant',
          element: <Restaurant />
        },
        {
          path: 'food',
          element: <Food />
        },
        {
          path: 'contact',
          element: <Contact />
        }
      ]
    }
  ])
    
  
  return (
    <>
    {/* <BrowserRouter>
      <Routes>
      <Route path='/' element = { <HomeScreen/> } />
      <Route path='/quotes' element = {<QuotePage/>} />
      </Routes>
      </BrowserRouter> */}

      <RouterProvider router={allPaths} />
    </>

  );
}

export default App;
