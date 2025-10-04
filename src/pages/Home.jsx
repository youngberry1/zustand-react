export default function Home() {
   return (
      <div className='space-y-4'>
         <h1 className='text-3xl font-bold'>Welcome to My Mini Project</h1>
         <p>
            This app uses <strong>React</strong>, <strong>Zustand</strong>,{' '}
            <strong>React Router</strong>, and <strong>Tailwind CSS</strong> to
            create a dark-themed, responsive multi-page application.
         </p>
         <p>
            Navigate through the pages to explore the Counter, About section,
            and theme toggle!
         </p>
      </div>
   );
}
