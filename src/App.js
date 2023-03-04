import Home from "./pages/Home/Home";
import Error from "./utils/Error/Error";
import { useContext } from "react";
import { ContextApi } from "./context/context";
import { ThemeProvider, createTheme } from '@mui/material/styles';

import "react-loading-skeleton/dist/skeleton.css";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  const {relatedToTheme} = useContext(ContextApi);
  const theme = relatedToTheme.theme;
  const themeMode = createTheme({
    palette: {
      mode: theme ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={themeMode}>
      <Home />
      <Error />
    </ThemeProvider>
  );
}

export default App;
