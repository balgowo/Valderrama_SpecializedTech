import '../App.css'

interface InputProps {
    expression: string[];
    result: string[];
}


export default function Input({expression, result}: InputProps) {
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
