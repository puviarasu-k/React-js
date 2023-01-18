import { store } from "./index";
import './index.css'

function newComp() {
    return (
      <div className="contianer">
      firstname:{store.getState().firstname}<br></br>
      lastname:{store.getState().lastname}      
      </div>
    );
  }
  
  export default newComp