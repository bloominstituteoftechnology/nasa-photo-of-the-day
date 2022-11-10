import TextBackground from "./TextBackground"
import TextStyling from "./TextStyling"

const TextStyle = (props) => {
    return(
        <TextBackground>
            <TextStyling type={props.textType}>
                {props.children}
            </TextStyling>
        </TextBackground>
    )
}

export default TextStyle