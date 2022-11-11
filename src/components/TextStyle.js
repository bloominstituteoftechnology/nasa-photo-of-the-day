import TextBackground from "./TextBackground"
import TextStyling from "./TextStyling"

const TextStyle = (props) => {
    return(
        <TextBackground type={props.textType}>
            <TextStyling type={props.textType}>
                {props.children}
            </TextStyling>
        </TextBackground>
    )
}

export default TextStyle