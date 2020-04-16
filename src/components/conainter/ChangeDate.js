import React from "react";
import { InputGroup, Input } from 'reactstrap';
import styled from 'styled-components';

//styled
const DescriptionDiv = styled.div`
  width: 20%;
  height: 50px;
`;

const ButtonDiv = styled.div`
  display: flex;
`;
const Button = styled.button`
display: flex;
`;

//func

function ChangeDate ({changeDate}) {

    return (
        <DescriptionDiv>
            <InputGroup htmlfor="date">
                <Input type="date"name="date" id= "date" placeholder="username"/>
                <ButtonDiv>
                    <Button onClick={changeDate}>
                        Change Date
                    </Button>
                </ButtonDiv>
                
                
            </InputGroup>
        </DescriptionDiv>
    )
    
}

export default ChangeDate;