import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { MainLayout } from "./components/MainLayout";

import { FifteenthClass } from './lessons/FifteenthClass'
import { FifthClass } from './lessons/FifthClass'
import { TableFifthClass } from './lessons/TableFifthClass'
import { FourteenthClass } from './lessons/FourteenthClass'
import { FourthClass } from './lessons/FourthClass'
import { SecondClass } from './lessons/SecondClass'
import { SeventhClass } from './lessons/SeventhClass'
import { TableSeventhClass } from './lessons/TableSeventhClass'
import { TableThirteenthClass } from './lessons/TableThirteenthClass'
import { ThirdClass } from './lessons/ThirdClass'
import { ThirteenthClass } from './lessons/ThirteenthClass'
import { DHGames } from './pages/DHGames'
import { Login } from './pages/Login'
import { InstagramTimeLine } from "./challenges/InstagramTimeLine";
import { ToDo } from "./pages/ToDo";

import { ThemeProvider } from "./hooks/useTheme";
import { Configurations } from "./pages/Configurations";

function App() {

  const appRouter = createBrowserRouter([
    
    {
      path: '',
      element: <MainLayout />,
      children: [
        
        {
          path: '',
          element: <Login />
        },
        {
          path: 'segunda-aula',
          element: <SecondClass />
        },
        {
          path: 'terceira-aula',
          element: <ThirdClass />
        },
        {
          path: 'quarta-aula',
          element: <FourthClass />
        },
        {
          path: 'quinta-aula',
          element: <FifthClass />
        },
        {
          path: 'mesa-quinta-aula',
          element: <TableFifthClass />
        },
        {
          path: 'setima-aula',
          element: <SeventhClass />
        },
        {
          path: 'mesa-setima-aula',
          element: <TableSeventhClass />
        },
        {
          path: 'decima-terceira-aula',
          element: <ThirteenthClass />
        },
        {
          path: 'mesa-decima-terceira-aula',
          element: <TableThirteenthClass />
        },
        {
          path: 'decima-quarta-aula',
          element: <FourteenthClass />
        },
        {
          path: 'decima-quinta-aula',
          element: <FifteenthClass />
        },
        {
          path: 'challenges',
          element: <InstagramTimeLine />
        },
        {
          path: 'to-do',
          element: <ToDo />
        },
        // {
        //   path: 'login',
        //   element: <Login />
        // },
        {
          path: 'configurations',
          element: <Configurations />
        },
        {
          path: 'dh-games',
          element: < DHGames />
        },
      ]
    }
    
  ])
  

  return (
    
    <ThemeProvider>    
      {/* <LanguageProvider>   */}
        <RouterProvider router={appRouter} />
      {/* </LanguageProvider>       */}
    </ThemeProvider>

  )
}

export default App
