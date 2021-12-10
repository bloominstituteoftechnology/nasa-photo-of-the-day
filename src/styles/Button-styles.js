import styled from 'styled-components'


  const Button = styled.button`
    border: 1px solid #4f4f4f;
    font-size: 1.2rem;
    width: 20vh;
    height: 3vh;
    margin-top: 10px;
    border-radius: 5px;
    background: ${(props) => props.bgColor};
`

export default Button