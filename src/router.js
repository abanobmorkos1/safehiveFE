import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import App from "./App"
import Index from "./pages/Index"
import Show from "./pages/Show"


const router = createBrowserRouter(createRoutesFromElements(
    <>
    <Route path="/" elements={<App />}>
        <Route path="" elements={<Index />}/>
        <Route path="post/:id" elements={<Show/>}/>
        <Route path="create"/>   
        <Route path="update/:id"/>
        <Route path="delete/:id"/>       
    </Route>
    </>
))

export default router