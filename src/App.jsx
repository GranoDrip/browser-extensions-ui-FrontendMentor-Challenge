import { useEffect, useState } from 'react';
import FilterBar from './Components/FilterBar';
import ThemeButton from './Components/ThemeButton';
import ExtensionCard from './Components/ExtensionCard';

import dataFile from "./assets/data.json" // File con i dati delle estensioni
import "./appStyle.css"

export default function App(){
    
    const [data,setData] = useState([]) // Inizializzazione array di dati
    // Riempio l'array con i dati dal file
    useEffect(()=>{
        setData(dataFile)
    },[])

    // Gestione del tema
    const [darkTheme, setDark] = useState(false);
    const theme = darkTheme ? "dark" : "light"
    const logo = darkTheme ? "src/assets/images/lightLogo.svg": "src/assets/images/darkLogo.svg"
    useEffect(() => {
      document.body.className = theme;
    }, [theme]);

    return(
        <>

            {/* QUI IL PRIMO DIV GESTISCE IL TEMA E IL TITOLO ( FAMMI DIVENTARE UN COMPONENTE! ) */}
            <div className={"logoContainer " + theme}>
                <img src={logo} alt="" />

                <ThemeButton darkTheme={darkTheme} setDark={setDark}></ThemeButton>
                
            </div>

            <FilterBar theme={theme}/>

            {console.log(data[0])}

            {data[0] && <ExtensionCard name={data[0].name} desc={data[0].description} logo={data[0].logo} theme={theme} />}

        </>
    )

}

