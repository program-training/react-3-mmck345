import './CardsContainer.css'
import UsersFromServer from "../UsersFromServer/UsersFromServer";
import Timer from "../Timer/Timer";


const MainContainer = () => {
  return (
    <div className="main-container">
        <UsersFromServer></UsersFromServer>
        <Timer></Timer>
    </div>
  );
};

export default MainContainer;