import { NavLink } from "react-router";
import Button, { ButtonRegister } from "./components/utils/Button";
import Navbar from "./components/layouts/Navbar";

function App() {
  return (
    <>
      <nav>
        <NavLink to="/about"> About </NavLink>
      </nav>
      <h1 className="text-5xl text-red-700">React first day</h1>
      <Button title="Login" style={"bg-green-600 rounded-full"} />
      <Button title="Sign Up" />
      <Button title="" />
      <ButtonRegister />
    </>
  );
}

export default App;
