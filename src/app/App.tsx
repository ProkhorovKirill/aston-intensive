import './App.css';
import ThemeProvider from '../shared/lib/theme/ThemeProvider';
import Header from '../widgets/LayoutHeader/Header';
import { RouterProvider } from 'react-router-dom';
import { router } from './providers/router/router';

function App() {

  return (

      <>

        <RouterProvider router={router} />
        
      </>

  )
}

export default App