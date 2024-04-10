import { ThemeProvider } from "styled-components";
import { TagMessageComponent } from "./components/TagMessageComponent";
import { defaultTheme } from "./styles/themes/default";
import { Global } from "./styles/global";
import { Home } from "./pages/Home/Home";
import { NavBarComponent } from "./components/NavBarComponent";
import { AboutMe } from "./pages/AboutMe";
import { Projects } from "./pages/Projects";

export function App() {


  return (
    <ThemeProvider theme={defaultTheme}>
      <Global/>
      
      <NavBarComponent/>
      
      <Home/>
      <AboutMe/>
      <Projects/>
    


    </ThemeProvider>
  )
}

