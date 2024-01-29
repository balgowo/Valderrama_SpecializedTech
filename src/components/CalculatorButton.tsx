import '../App.css'

export default function CalculatorButton({ value, color, handleClick }) {
    return (
        <div 
        onClick={()=>handleClick(value)} 
        className="buttonWrapper" style={{ backgroundColor: color }}>{value}</div>
    )
}
