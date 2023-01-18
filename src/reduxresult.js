import { store } from "./index";

function Reduxresult() {
    return (
      <>
      firstname:{store.getState().firstname}<br></br>
      lastname:{store.getState().lastname}      
      </>
    );
  }
  
  export default Reduxresult