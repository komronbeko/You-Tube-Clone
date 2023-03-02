
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Home from "./pages/Home/Home";
import Loading from "./utils/Loading/Loading";
import Error from "./utils/Error/Error";


function App() {
  return (
    <div className="App">
      <Home/>
      <Loading/>
      <Error/>
    </div>
  );
}

export default App;
