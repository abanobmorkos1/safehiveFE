import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import App from "./App"
import './App.css';
import { indexLoader, showLoader } from "./loaders"
import Index from "./pages/Index"
import Show from "./pages/Show"
import About from "./pages/about"


import {createAction , updateAction , deleteAction} from "./actions"


const router = createBrowserRouter(createRoutesFromElements(
    <>
    <Route path="/" element={<App/>}>
        <Route path="" element={<Index/>} loader={indexLoader}/>
        <Route path="post/:id" element={<Show/>} loader={showLoader}/>
        <Route path="create" action={createAction}/>   
        <Route path="update/:id" action={updateAction}/>
        <Route path="delete/:id" action={deleteAction}/> 
        <Route path="/about" element={<About/>}/>

              
    </Route>
    </>
))

export default router