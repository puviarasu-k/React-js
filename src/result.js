import { useContext } from "react";
import userContext from "./context";
function Result() {
    const details = useContext(userContext);
    return (
      <>
      Username:{details.user}<br></br>
      Password:{details.pass}      
      </>
    );
  }
  
  export default Result