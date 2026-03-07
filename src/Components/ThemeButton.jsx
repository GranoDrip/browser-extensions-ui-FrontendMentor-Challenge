import "./compStyles/ThemeButton.css"

export default function ThemeButton({darkTheme,setDark}){
    
    const theme = darkTheme ? "dark" : "light";
    const icon = darkTheme ? "src/assets/images/icon-sun.svg" : "src/assets/images/icon-moon.svg";


    return (
      <button onClick={() => setDark(!darkTheme)} className={"themeButton " + theme}>
        <img src={icon} alt="Toggle theme" />
      </button>
    );

}