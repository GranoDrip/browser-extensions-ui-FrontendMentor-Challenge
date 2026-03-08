// ExtensionCard.jsx

import { Switch } from 'antd';
import "./compStyles/ExtensionCardStyle.css"

export default function ExtensionCard({index,name,logo,desc,isActive,theme,setIsActive,removeExtension}){

    return(
        <>
            <div className={"cardContainer " + theme}>
                <div className={"headerContainer " + theme}>
                    <img src={logo} alt="logo" className={"logoIcon " + theme} />
                    <div className={"textContainer " + theme}>
                        <h3 className={"title " + theme}>{name}</h3>
                        <p className={"description " + theme}>{desc}</p>
                    </div>
                </div>

                <div className={"buttonsContainer " + theme}>
                    <button className={"removeBtn " + theme} onClick={()=>removeExtension(index)}>Remove</button>
                    <Switch checked={isActive} onClick={()=>setIsActive(index)}/>
                </div>
            </div>
        </>
    )
}