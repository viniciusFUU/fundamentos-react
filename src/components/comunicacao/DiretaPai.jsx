import React from "react";
import DiretaFilho from './DiretaFilho'

export default props => {
    return (
        <div>
            <DiretaFilho nome="Vinícius" idade={24} nerd={true}/>
            <DiretaFilho nome="Bianca" idade={20} nerd={false}/>
        </div>
    )
}