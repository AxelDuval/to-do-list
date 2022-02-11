import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Form from "./Components/Form";
import "./App.css";
import ThemeContextProvider from "./Context/ThemeContext";
import { FirebaseDatabaseMutation } from "@react-firebase/database";



function App() {
  return (
    <>
      <ThemeContextProvider>
        <Form />
      </ThemeContextProvider>
    </>
  );
}

export default App;
