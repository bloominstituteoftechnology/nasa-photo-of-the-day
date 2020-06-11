import styled from 'styled-components'

const Container = styled.div`
  border: 1px solid rgb(210, 210, 210);
  box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
  border-radius: ${props => props.count || 8}px;
  margin: 15px;
  padding: 16px 8px 12px 16px;
  background-color: white;
  color: ${props => {
    return props.danger ? 'red' : 'inherit';
  }};

`
export default Container