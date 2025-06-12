import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider,createBrowserRouter} from 'react-router-dom'
import App from './App.tsx'
import HomePage from './pages/HomePage.tsx';


const router = createBrowserRouter(
  [
    {
      element: <App />,
      children: [
        { path: "/", element: <HomePage /> },
        // { path: "/contact", element: <ContactPage /> },
        // { path: "/about", element: <AboutPage /> },
      ],
    },
  ],
  {
    // basename: "/portfolio", // 👈 important!
  }
);

const rootElement = document.getElementById("root");
if (rootElement == null) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);