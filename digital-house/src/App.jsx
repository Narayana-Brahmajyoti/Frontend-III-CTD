import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { MainLayout } from "./components/MainLayout";

import { FifteenthClass } from './lessons/FifteenthClass'
import { FifthClass } from './lessons/fifthClass'
import { TableFifthClass } from './lessons/TableFifthClass'
import { FourteenthClass } from './lessons/FourteenthClass'
import { FourthClass } from './lessons/fourthClass'
import { SecondClass } from './lessons/SecondClass'
import { SeventhClass } from './lessons/SeventhClass'
import { TableSeventhClass } from './lessons/TableSeventhClass'
import { TableThirteenthClass } from './lessons/TableThirteenthClass'
import { ThirdClass } from './lessons/ThirdClass'
import { ThirteenthClass } from './lessons/ThirteenthClass'
import { DHGames } from './pages/dhGames'
import { Login } from './pages/Login'
import { FourteenthClassIten } from "./components/FourteenthClassIten";
import { InstagramTimeLine } from "./challenges/InstagramTimeLine";
import { ToDo } from "./pages/ToDo";


function App() {

  const appRouter = createBrowserRouter([
    
    {
      path: '',
      element: <MainLayout />,
      children: [
        {
          path: 'segunda-aula',
          element: <SecondClass />
        },
        {
          path: 'terceira-aula',
          element: <ThirdClass />
        },{
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
          path: 'checkpoint-I',
          element: <DHGames />
        },
        {
          path: 'challenges',
          element: <InstagramTimeLine />
        },
        {
          path: 'to-do',
          element: <ToDo />
        }
      ]
    },
    

    
  ]);
  

  return (
    // <SecondClass />
    // <ThirdClass />
    // <FourthClass />
    // <FifthClass />
    // <TableFifthClass/>
    // <Login />
    // <SeventhClass />
    // <TableSeventhClass />
    // <DHGames />
    // <ThirteenthClass />
    // <TableThirteenthClass />
    // <FourteenthClass/>
    // <FifteenthClass />

    <RouterProvider router={appRouter} />


  )
}

export default App
