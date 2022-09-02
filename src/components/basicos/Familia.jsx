import React from "react"
import FamiliaMembro from './FamiliaMembro'

export default (props) =>{
    return (
        <div>
            <FamiliaMembro nome="Vinícius" sobrenome="Monteiro"/>
            <FamiliaMembro nome="Bianca"{...props}/>
            <FamiliaMembro nome="Marli" sobrenome={props.sobrenome}/>
        </div>    
    )
}