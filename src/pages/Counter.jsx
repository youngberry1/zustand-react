import { useEffect } from 'react';
import { useCounterStore } from '../store';

export default function Counter() {
   // Select state and actions from the store
   const count = useCounterStore((state) => state.count);
   const loading = useCounterStore((state) => state.loading);
   const increase = useCounterStore((state) => state.increase);
   const decrease = useCounterStore((state) => state.decrease);
   const reset = useCounterStore((state) => state.reset);
   const fetchInitialCount = useCounterStore(
      (state) => state.fetchInitialCount
   );

   // Fetch initial count on mount
   useEffect(() => {
      fetchInitialCount();
   }, [fetchInitialCount]);

   return (
      <div className='p-6 text-center space-y-4'>
         <h1 className='text-3xl font-bold'>
            {loading ? 'Loading...' : `Count: ${count}`}
         </h1>
         <div className='space-x-2'>
            <button
               onClick={increase}
               className='px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600'
            >
               Increase
            </button>
            <button
               onClick={decrease}
               className='px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600'
            >
               Decrease
            </button>
            <button
               onClick={reset}
               className='px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600'
            >
               Reset
            </button>
         </div>
      </div>
   );
}
