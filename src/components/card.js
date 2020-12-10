import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  CardHeader,
  Modal,
  ModalBody,
} from 'reactstrap';

function CardMain({ copyright, date, explanation, title, url }) {
  const toggle = () => setModal(!modal);

  const [modal, setModal] = useState(false);

  return (
    <StyledCard>
      <Card className='card'>
        <CardHeader tag='h1'>NASA Photo of the Day</CardHeader>
        <div className='cardimg'>
          <CardImg
            top
            width='100%'
            src={url}
            alt='NASA Photo of the Day'
            onClick={toggle}
          ></CardImg>
        </div>
        <Modal isOpen={modal} toggle={toggle} className='test' size='xl'>
          <ModalBody>
            <img src={url} alt='Zoomed'></img>
          </ModalBody>
        </Modal>
        <CardBody>
          <CardTitle tag='h2'>{title}</CardTitle>
          <CardText>{date}</CardText>
          <CardText>{explanation}</CardText>
          <CardText>
            <small tag='text-muted'>© {copyright}</small>
          </CardText>
        </CardBody>
      </Card>
    </StyledCard>
  );
}

const StyledCard = styled.div`
  margin: 30px auto;
  border: 1px solid #d2d2d2;
  box-shadow: 0px 1px 10px -2px #807f7f;
  border-radius: 20px;
  width: 35%;

  .card {
    background-color: whitesmoke;
  }

  .cardimg {
    padding: 7px;
  }
`;

export default CardMain;
