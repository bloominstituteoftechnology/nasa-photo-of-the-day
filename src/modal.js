import React from 'react'
// import styled from 'styled-components'

// const Button = styled.button`
//  color: black;
// `;

const Modal = props => {
   
    return (
        // <DarkContainer>
        <div className={`modal ${props.show ? 'show' : ''}`} onClick={props.onClose}>
            
                <div className='modal-content' onClick={e => e.stopPropagation()}>
                <div className='modal-header'>
                    <h4 className='modal-title'>{props.title}</h4>
                </div>
                <div className='modal-body'>{props.children}</div>
                <div className='modal-footer'>
                    <button onClick={props.onClose} className='button'>Close</button>
                </div>
            </div> 
              
        </div>
        // </DarkContainer>
    )
}

// const ModalContent = styled.div`

// `


export default Modal