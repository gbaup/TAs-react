import './App.css'
import {useEffect, useState} from "react";

function App() {
    const [data, setData] = useState('')

    useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(json => {
                    setData(json[0])
                })
        }
        ,
        []
    )


    return (
        <>
            <h1>React App</h1>
            <p>
                {data.name}
                {data.email}
            </p>


        </>
    )
}

export default App
