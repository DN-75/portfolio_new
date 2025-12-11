import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound.tsx";
import {Toaster} from "./components/ui/toaster.tsx";
import { Analytics } from '@vercel/analytics/react';

function App() {


  return (
      <>
          <Toaster/>
          <Analytics/>
          <BrowserRouter>
              <Routes>
                    <Route index element={<Home />} />
                    <Route path={'*'} element={<NotFound/>} />
              </Routes>
          </BrowserRouter>
      </>
  )
}

export default App
