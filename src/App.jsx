// App.jsx

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
        const logo = darkTheme ? "/images/lightLogo.svg": "/images/darkLogo.svg"
    useEffect(() => {
      document.body.className = theme;
    }, [theme]);

    const setIsActive = (index) => {
        setData(current =>
            current.map((item, i) =>
                i === index ? { ...item, isActive: !item.isActive } : item
            )
        )
    }

    const removeExtension = (index) =>{
        setData(current => 
            current.filter((item,i) => i !== index)
        )
    }

    // Gestione dei filtri
    // -1: Non active
    // 0: All
    // 1: Active
    const [filter,setFilter] = useState(0)

    const filteredData = data.filter((e) => {
        if (filter === 1) return e.isActive;
        if (filter === -1) return !e.isActive;
        return true;
    });

    return(
        <>

            {/* QUI IL PRIMO DIV GESTISCE IL TEMA E IL TITOLO ( FAMMI DIVENTARE UN COMPONENTE! ) */}
            <div className={"logoContainer " + theme}>
                <img src={logo} alt="" />

                <ThemeButton darkTheme={darkTheme} setDark={setDark}></ThemeButton>
                
            </div>

            <FilterBar theme={theme} filter={filter} setFilter={setFilter}/>

            <div className={"extensionsContainer " + theme}>
                {
                    filteredData.map((e, i) => (
                        <ExtensionCard
                            key={e.name}
                            index={data.indexOf(e)} // Passo l'indice originale per setIsActive e removeExtension
                            name={e.name}
                            desc={e.description}
                            logo={e.logo}
                            isActive={e.isActive}
                            theme={theme}
                            setIsActive={setIsActive}
                            removeExtension={removeExtension}
                        />
                    ))
                }              
            </div>

        </>
    )

}

