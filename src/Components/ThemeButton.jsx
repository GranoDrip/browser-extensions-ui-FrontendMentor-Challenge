// ThemeButton.jsx
 
import "./compStyles/ThemeButton.css"

export default function ThemeButton({darkTheme,setDark}){
    
    const theme = darkTheme ? "dark" : "light";
    const icon = darkTheme ? "/images/icon-sun.svg" : "/images/icon-moon.svg";


    return (
      <button onClick={() => setDark(!darkTheme)} className={"themeButton " + theme}>
        <img src={icon} alt="Toggle theme" />
      </button>
    );

}