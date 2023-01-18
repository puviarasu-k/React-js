import { TextField,Button } from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import userContext from "./context";
function Home() {
  let navigate =useNavigate();
  const { user, setuser, pass, setpass } = useContext(userContext)
  
  return (
    <>
      <TextField id="outlined-basic" label="Username" value={user} onChange={(e) => setuser(e.target.value)} variant="outlined" style={{ margin: 10 }} /><br />
      <TextField id="outlined-basic" label="Password" value={pass} onChange={(e) => setpass(e.target.value)} variant="outlined" style={{ margin: 10 }} />
      <Button variant="contained" onClick={() => navigate('/result')}>SUBMIT</Button>
    </>
  );
}

export default Home
