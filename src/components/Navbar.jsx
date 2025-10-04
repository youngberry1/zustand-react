import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
   return (
      <nav className='flex justify-between items-center p-4 bg-gray-800 text-white dark:bg-gray-900'>
         <div className='space-x-4'>
            <Link to='/' className='hover:text-blue-400'>
               Home
            </Link>
            <Link to='/about' className='hover:text-blue-400'>
               About
            </Link>
            <Link to='/counter' className='hover:text-blue-400'>
               Counter
            </Link>
         </div>
         <ThemeToggle />
      </nav>
   );
}
