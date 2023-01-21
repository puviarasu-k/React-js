import { useState } from "react";
import { useEffect } from "react";
import axios from './axios';
import instance from './axios'

function Apicall() {
    const [data, setdata] = useState()
    useEffect(() => {

        // const data = await 
        // setdata(data.data)
        // console.log(data.data).
        axios.get('todos/50')
            .then(response => {
                setdata(response.data)
                console.log(response.data)
            })
    }, [])
    return (
        <div>
            {data?.title}<br />
            {data?.id}<br />
            {data?.completed}
        </div>
    );
}

export default Apicall







