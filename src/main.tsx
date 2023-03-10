import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import { App } from './App';
import { ErrorBoundary } from './ErrorBoundary';
import './main.css';
import { Explore } from './Sidebar/Explore';
import { Start } from './Sidebar/Start';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} >
      <Route path="/" element={<Start />} />
      <Route path="explore" element={<Explore />} />
      <Route path="*" element={<h2 style={{color: '#B7B78A'}}>404 not found</h2>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </React.StrictMode>,
);
