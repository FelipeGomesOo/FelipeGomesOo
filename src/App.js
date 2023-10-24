import React  from 'react';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import Root from './components/Root.js';
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'; 

const appRouter = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Root/>}>  
    <Route index element={<HomePage/>} />  
    <Route path="projects/:projectName" element={<ProjectPage/>} />          
  </Route>
));

export default function App() {
  
  return (
    <>      
      <RouterProvider router={appRouter}  />
    </>
  );
} 