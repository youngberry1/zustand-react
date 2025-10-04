import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Counter from './pages/Counter';
import { useCounterStore } from './store';

export default function App() {
   // Get theme from Zustand store
   const theme = useCounterStore((state) => state.theme);

   return (
      <div
         className={
            theme === 'dark'
               ? 'dark bg-gray-900 text-white min-h-screen transition-colors duration-300'
               : 'bg-white text-black min-h-screen transition-colors duration-300'
         }
      >
         <BrowserRouter basename='/zustand-react'>
            <Navbar />
            <div className='p-6'>
               <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/about' element={<About />} />
                  <Route path='/counter' element={<Counter />} />
                  <Route
                     path='*'
                     element={
                        <h1 className='text-red-500 text-center text-3xl'>
                           404 Not Found
                        </h1>
                     }
                  />
               </Routes>
            </div>
         </BrowserRouter>
      </div>
   );
}
