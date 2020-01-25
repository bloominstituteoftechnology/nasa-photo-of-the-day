import React, { useState } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "30%",
    minWidth: "400px"
  }
};

const ModalContainer = props => {
  var subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#000";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button style={{ opacity: ".5", margin: "5px" }} onClick={openModal}>
        Details
      </button>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <h2 ref={_subtitle => (subtitle = _subtitle)}>{props.data.title}</h2>
        <p>{props.data.explanation}</p>
        <p>copyrights: {props.data.copyright}</p>
        <p> {props.data.date}</p>
        <p>Note: {"\u25BC"}</p>
        <p>
          Use calendar to pick another date<br></br> to see the image from that
          day {"\u30C4"}
        </p>
      </Modal>
    </div>
  );
};

export default ModalContainer;
