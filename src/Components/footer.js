import React, {useState, useEffect} from "react";
import {BASE_URL, API_KEY} from '../Constants/index'
import axios from 'axios'
import styled from 'styled-components'

const StyledFooter = styled.div`

padding: 20px;
margin: 35px;

`

function Footer (props) {

    const { photoURL } = props

    return (
        <StyledFooter>
            <h4>Photo source: <a href={photoURL} target='_blank'>{photoURL}</a></h4>
        </StyledFooter>

    )
}

export default Footer