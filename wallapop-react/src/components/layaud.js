import React from "react";

function Layaud () {
    const tw = ['hola', 'tweet', 'pepe', 'js']
    const t = tw.map(tuit => {
        return <div>{tuit}</div>
    })
    return (
        <div>
            <p>{t}</p>
        </div>

    )
}

export default Layaud;