import { TextField, Button } from "@mui/material";
import React, { Suspense } from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { store } from "./index";
import NewComp from "./newcomp";
// const NewComp = React.lazy(() => import('./newcomp'));
function Reduxhome() {
    let navigate = useNavigate();
    const [firstname, setfn] = useState("")
    const [lastname, setln] = useState("")

    // const buttonclick = () => {
    //     store.dispatch({
    //         type: 'SETDETAILS',
    //         payload: {
    //             firstname: firstname,
    //             lastname: lastname
    //         }
    //     });
    //     navigate('/reduxresult')
    // }

    const fn = (e) => {
        console.log(e)
        var firstn = e.target.value
        setfn(e.target.value)
        store.dispatch({
            type: 'SETDETAILS',
            payload: {
                firstname: firstn,
                lastname: lastname
            }
        });
    }
    const ln = (e) => {
        setln(e.target.value)
        var lastn = e.target.value
        store.dispatch({
            type: 'SETDETAILS',
            payload: {
                firstname: firstname,
                lastname: lastn
            }
        });
    }
    return (
        <>
            <div>
                <TextField id="outlined-basic" label="firstname" value={firstname} onChange={fn} variant="outlined" style={{ margin: 10 }} /><br />
                <TextField id="outlined-basic" label="lastname" value={lastname} onChange={ln} variant="outlined" style={{ margin: 10 }} />
                {/* <Button variant="contained" onClick={buttonclick}>SUBMIT</Button> */}
            </div>
            <Suspense fallback={<div>Loading...</div>}>
                <NewComp />
            </Suspense>
        </>
    );
}

export default Reduxhome