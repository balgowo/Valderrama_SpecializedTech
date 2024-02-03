import '../App.css'

interface CalculatorButtonProps {
    value: string;
    color?: string;
    handleClick: (value: string) => void;
}

export default function CalculatorButton({ value, color, handleClick }: CalculatorButtonProps) {
    return (
        <div 
        onClick={()=>handleClick(value)} 
        className="buttonWrapper" 
        style={{ backgroundColor: color }}
        >{value}</div>
    )
}
