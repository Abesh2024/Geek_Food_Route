
import Layout from './Layout';
import QuotePage  from './components/Quote_Page';
// import {Home} from './home/home'
import { HomeScreen } from './home/HomeScreen';
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom";   
// import { Home } from './home/home';
import { QuoteScreen } from './components/quoteScreen';
import Restaurant from './restaurants/Restaurant';
// import Wrap from './restaurants/Wrap';


function App() {

  const allPaths = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      children:  [
        {
          path: '/',
          element: <HomeScreen/>
        },
        {
          path: 'quotes',
          element: <QuoteScreen/>
        },
        {
          path: 'restaurant',
          element: <Restaurant />
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
