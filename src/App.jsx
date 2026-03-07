import { useEffect, useState } from 'react';
import dataFile from "./assets/data.json" // File con i dati delle estensioni
import "./appStyle.css"

// Posso pensare di fare una concatenazione di classi (themeBlack, themeWhite) in modo da evitare cose strane

export default function App(){
    
    const [data,setData] = useState([]) // Inizializzazione array di dati
    // Riempio l'array con i dati dal file
    useEffect(()=>{
        setData(dataFile)
    },[])

    // Gestione del tema
    const [darkTheme, setDark] = useState(false);
    const theme = darkTheme ? "dark" : "light"
    useEffect(() => {
      document.body.className = theme;
    }, [theme]);

    return(
        <>

            <div className={"logoContainer " + theme}>
                <img src="src\assets\images\logo.svg" alt="" />
            </div>

        

        </>
    )

}

