import React from "react"
import "./Card.css"

export default (props) => {

    const cardStyle = {
        backgroundColor: props.color || '#4d2bff',
        borderColor: props.color || '#4d2bff'
    }

    return (
        <div className="card" style={cardStyle}>
            <div className="title">
                {props.titulo}
            </div>
            <div className="content">
                {props.children}
            </div>
        </div>
    )
}