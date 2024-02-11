import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Dashboard from "./scenes/dashboard";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Home from "./scenes/Home/Home";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Maharashtra" element={<Dashboard />} />
              <Route path="/Bihar" element={<Dashboard />} />
              <Route path="/West-Bengal" element={<Dashboard />} />
              <Route path="/Tamil-Nadu" element={<Dashboard />} />
              <Route path="/Jharkhand" element={<Dashboard />} />
              <Route path="/Uttar-Pradesh" element={<Dashboard />} />
              <Route path="/Rajasthan" element={<Dashboard />} />
              <Route path="/Madhya-Pradesh" element={<Dashboard />} />
              <Route path="/Gujarat" element={<Dashboard />} />
              <Route path="/Kerela" element={<Dashboard />} />
              <Route path="/Punjab" element={<Dashboard />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
