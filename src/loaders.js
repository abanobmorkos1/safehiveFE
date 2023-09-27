import {createBrowserRouter 
    , createRoutesFromElements
    , Route 
    , Routes } from "react-router-dom"
import App from './App'


const router = createBrowserRouter(createRoutesFromElements(
    <> 
        <Route path="/" elementName={<App/>}>

        </Route>

    </>
    ))
