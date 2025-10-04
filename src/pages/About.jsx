export default function About() {
   return (
      <div className='space-y-4 max-w-3xl mx-auto'>
         <h1 className='text-3xl font-bold'>About This Project</h1>
         <p>
            This project is a demonstration of how to build a **React SPA**
            using modern tools: Zustand for global state management, React
            Router for multi-page navigation, and Tailwind CSS for styling.
         </p>
         <p>
            The counter on the Counter page uses Zustand with persistence and
            async initialization. This shows how state can be shared across
            multiple pages without prop drilling or using Context.
         </p>
         <p>
            Tailwind CSS is used for styling, with a **dark theme** enabled for
            night viewing. Users can toggle between dark and light themes using
            the button in the navbar.
         </p>
         <p>
            React Router demonstrates nested routes, navigation links, and a 404
            page. This project can be extended into dashboards, forms, or even a
            full-stack application.
         </p>
         <p>
            The purpose of this About section is to provide **enough content**
            so that users can scroll and read through the explanation, which is
            also good for observing layouts in long-form content and how
            dark/light themes apply consistently.
         </p>
         <p>
            Enjoy experimenting with the project! Try adding new features like
            nested dashboards, theme-dependent charts, or even integrating APIs
            for dynamic content.
         </p>
      </div>
   );
}
