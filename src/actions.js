import {redirect} from 'react-router-dom'

const URL = "https://safehivebe.onrender.com"

// create action

export const createAction = async ({request}) => {
    const formData = await request.formData()

    const newData = {
        address: formData.get('address'),
        incident: formData.get('incident'),
        emergency: formData.get('emergency')
        
    }

    console.count()

    await fetch(URL +'/safehive/' , {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newData)
    })

    return redirect("/")
}


//update action

export const updateAction = async ({request , params}) => {
    const formData= await request.formData()

    const id = params.id


    const updateData = {
        address: formData.get('address'),
        incident: formData.get('incident'),
        emergency: formData.get('emergency')
    }

    await fetch(URL + `/safehive/${id}/`, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updateData)
    })

    return redirect (`/`)
}

export const deleteAction = async ({params}) => {
    const id = params.id

    await fetch(URL + `/safehive/${id}/`, {
        method: "delete",
    })

    return redirect ("/")
}
