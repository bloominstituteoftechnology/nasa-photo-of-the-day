import styled from "styled-components";





const NasaBG = styled.section`
${props => (props.type === 'main' ? `background: lightblue;` : null)}
${props => (props.type === 'highlight' ? `background: grey;` : null)}
${props => (props.type === 'hl2' ? `background: lightgray;` : null)}`;


export default NasaBG;