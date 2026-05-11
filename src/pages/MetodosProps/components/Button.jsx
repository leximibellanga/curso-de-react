

const Button = ({ text, event }) => {
    return (
        <button 
            className="btn btn-sm btn-primary"
            onClick={event}    
        >
                {text}
        </button>
    )
}

export default Button