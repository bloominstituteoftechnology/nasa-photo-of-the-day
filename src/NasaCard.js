import React from "react";
import "./App.css";
import { Toast, ToastBody, ToastHeader } from "reactstrap";
import styled from 'styled-components';

const NasaCard = props => {

    return (
        <div className='img-centerer'>
            <div>
                <Toast>
                    <ToastHeader>
                        {props.title}
                    </ToastHeader>
                    <ToastBody>
                        {props.media_type}
                        <br />
                        {props.service_version}
                        <br />
                        {props.url}
                        <br />
                        {props.hdurl}
                    </ToastBody>
                </Toast>
                <br />
                {props.explanation}
                <br />
                <br />
                <img src={props.url} alt={props.title} />
            </div>
        </div>
    )
}

export default NasaCard;