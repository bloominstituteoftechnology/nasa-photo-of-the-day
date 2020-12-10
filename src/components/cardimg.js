import React, { useState } from 'react';
import styled from 'styled-components';
import {
  CardText,
  CardImg,
  CardImgOverlay,
  Modal,
  ModalBody,
} from 'reactstrap';

export default function CardImage({ url }) {
  const toggle = () => setModal(!modal);

  const [modal, setModal] = useState(false);

  return (
    <StyledCardImg>
      <CardImg
        className='fullimg'
        top
        width='100%'
        src={url}
        alt='NASA Photo of the Day'
      />
      <CardImgOverlay onClick={toggle}>
        <CardText className='zoomtext' tag='h2'>
          Click to Zoom
        </CardText>
      </CardImgOverlay>
      <Modal isOpen={modal} toggle={toggle} className='test' size='xl'>
        <ModalBody>
          <img src={url} alt='Zoomed'></img>
        </ModalBody>
      </Modal>
    </StyledCardImg>
  );
}

const StyledCardImg = styled.div`
  .fullimg {
    padding: 7px;
    position: relative;
    text-align: center;
    display: flex;
  }

  .zoomtext {
    opacity: 0;
    text-shadow: 2px 2px black;
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &:hover {
    .zoomtext {
      opacity: 1;
    }
  }
`;
