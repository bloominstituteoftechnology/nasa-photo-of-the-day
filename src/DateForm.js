import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Divider, Form, Label, Button } from 'semantic-ui-react'
import styled from 'styled-components'

//styling
const StyleDetails = styled.div`
  
  margin: 3% auto;
  width: 250px;

  `


const DateForm = () => (
  <StyleDetails>
  <Form>
    <Form.Field>
    <Label className="date-label" pointing='below'>Enter a date</Label>
      <input type='date' placeholder='First name' />
      
    </Form.Field>
    <Button type='submit'>Submit</Button>
    <Divider />
  </Form>
  </StyleDetails>
  
)

export default DateForm