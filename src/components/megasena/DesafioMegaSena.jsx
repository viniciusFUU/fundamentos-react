import React from "react";

export default props =>{
    const {min1, max1} = props
    const {min2, max2} = props
    const {min3, max3} = props
    const {min4, max4} = props
    const {min5, max5} = props
    const {min6, max6} = props

    const numeroAleatorio1 = Math.floor(Math.random() * (max1 - min1) + min1)
    const numeroAleatorio2 = Math.floor(Math.random() * (max2 - min2) + min2)
    const numeroAleatorio3 = Math.floor(Math.random() * (max3 - min3) + min3)
    const numeroAleatorio4 = Math.floor(Math.random() * (max4 - min4) + min4)
    const numeroAleatorio5 = Math.floor(Math.random() * (max5 - min5) + min5)
    const numeroAleatorio6 = Math.floor(Math.random() * (max6 - min6) + min6)

    return (
        <div>
            <h3>Possiveis números da Megasena</h3>
            <div>
                <p>{numeroAleatorio1} - {numeroAleatorio2} - {numeroAleatorio3} - {numeroAleatorio4} - {numeroAleatorio5} - {numeroAleatorio6}</p>
            </div>
        </div>
    )
}