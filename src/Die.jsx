export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "#fff"
    }

    return (
        <div 
            className="die" 
            style={styles} 
            onClick={props.onClick}
            aria-label={`Die with a value of ${props.value}, ${props.isHeld ? "held" : "not held"}`}
            aria-pressed={props.isHeld}
            role="button"
        >
            {props.value}
        </div>
    );
}