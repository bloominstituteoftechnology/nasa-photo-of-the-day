import styled from "styled-components"

const TextStyling = styled.div`
    color: white;
    opacity: 100%;
    ${(props) => props.type === "header" ? `font-size: 4rem;` : null}
    ${(props) => props.type === "header" ? `font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;` : null}
    ${(props) => props.type === "article-title" ? `font-size: 3rem;` : null}
    ${(props) => props.type === "article-title" ? `font-family: 'Times New Roman', Times, serif;` : null}
    ${(props) => props.type === "article-content" ? `font-size: 1.5rem;` : null}
    ${(props) => props.type === "article-content" ? `font-family: 'Times New Roman', Times, serif;` : null}
`

export default TextStyling