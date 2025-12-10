export default function Button({onClick, textValue, className} 
    : {onClick: () => void, textValue: string, className: string}) {

    return <button onClick={onClick} className={className}>{textValue}</button>

}