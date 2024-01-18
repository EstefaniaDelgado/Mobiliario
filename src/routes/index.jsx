import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../views/Home";
import Projects from "../views/Projects";
import Error404 from "../views/Error404";
import Detail from "../views/Projects/components/Detail";


const router = createBrowserRouter([
   {
    path:'/',
    element: <Home/>,
    errorElement: <Error404/>
   },
   {
    path:'/proyectos',
    element: <Projects/>,
    children:[
      {
         path:'detalle/:projectId',
         element: <Detail/>

      }
    ],
   }
])

const MyRoutes = ()=> <RouterProvider router={router}/>

export default MyRoutes;