import * as React from 'react';
import NavBar from './components/navBar';
import { AuthProvider } from './context/AuthContext';

export const App = () => {
  return (
    <>
    <AuthProvider>
    <NavBar/>
    </AuthProvider>
    </>
  )};

export default App