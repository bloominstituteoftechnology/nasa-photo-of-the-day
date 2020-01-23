import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import styled from 'styled-components';


const ModalExample = (props) => {
    const {
      buttonLabel,
      className
    } = props;
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

  return (
    <StyledDiv>
      <Button  onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
        <img className="world-img" width="400px"src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/The_Earth_seen_from_Apollo_17_with_transparent_background.png/905px-The_Earth_seen_from_Apollo_17_with_transparent_background.png" alt="world"/>
          There is no planet 2!
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </StyledDiv>
  );
}
const StyledDiv=styled.div`
    color:rgb(240, 226, 243);
    ModalBody{
        color:rgb(240, 226, 243);
        img{width:100px;}
    }
`

export default ModalExample;