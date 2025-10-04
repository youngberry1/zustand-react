import { useCounterStore } from '../store';

export default function ThemeToggle() {
   const theme = useCounterStore((state) => state.theme);
   const toggleTheme = useCounterStore((state) => state.toggleTheme);

   return (
      <button
         onClick={toggleTheme}
         className='px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600'
      >
         {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
      </button>
   );
}
