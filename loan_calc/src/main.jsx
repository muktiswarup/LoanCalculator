import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider as CustomThemeProvider } from "./Context/ThemeContext";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useTheme } from "./Context/ThemeContext";
import CssBaseline from "@mui/material/CssBaseline";

function ThemedApp() {
  const { theme } = useTheme();

  // Create Material-UI theme based on custom theme
  const muiTheme = createTheme({
    palette: {
      mode: theme === "light" ? "light" : "dark",
      background: {
        default: theme === "light" ? "#fff" : "#000",
        paper: theme === "light" ? "#fff" : "#1c2526",
      },
      text: {
        primary: theme === "light" ? "#000" : "#fff",
      },
    },
  });

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <CustomThemeProvider>
    <ThemedApp />
  </CustomThemeProvider>
);