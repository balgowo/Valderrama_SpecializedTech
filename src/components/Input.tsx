import '../App.css'

import React from 'react'

export default function Input({expression, result}) {
    return (
        <div className="inputWrapper">
            <div className="result">
                <h1>{result}</h1>
            </div>

            <div className="text">
                <h3>{expression}</h3>
            </div>
        </div>
    )
}
