import React, { useState } from 'react';
import { Modal, Button, Paper } from '@material-ui/core';

interface APODDataProps {
  copyright: string;
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
}
interface APODProps {
  response: {
    data: APODDataProps;
  };
}
function APOD({ response }: APODProps) {
  const {
    explanation = '',
    media_type = '',
    title = 'Loading...',
    url = '',
  } = response !== undefined ? response.data : {};

  const [isModalOpen, setIsModalOpen] = useState(false);

  interface HandleModalToggleArg {
    isChangingToOpenState: boolean;
  }
  const handleModalToggle = ({ isChangingToOpenState }: HandleModalToggleArg) => {
    return () => setIsModalOpen(isChangingToOpenState);
  };

  return (
    <div>
      <h1>{title}</h1>
      { media_type === 'image' ?
        <img src={url} alt="space stuff"/> :
        <iframe title={title} src={url}></iframe> }
      <Button
        onClick={handleModalToggle({ isChangingToOpenState: true })}
      >
        Details
      </Button>
      <Modal
        open={isModalOpen}
        onClose={handleModalToggle({ isChangingToOpenState: false })}
      >
        <Paper>
          <p>{explanation}</p>
        </Paper>
      </Modal>
    </div>
  );
}

export default APOD;
