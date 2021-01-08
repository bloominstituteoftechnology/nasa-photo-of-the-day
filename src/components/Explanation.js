import React, { useState } from "react";
import { Button, Collapse, Card, CardBody} from 'reactstrap'

const Explanation = props => {

    const {explanation} = props

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);


    return (
        <div>
      
      <Collapse isOpen={isOpen}>
        <Card body inverse style={{ backgroundColor: '#141414', borderColor: '#333' }}>
          <CardBody>
            {explanation}
          </CardBody>
        </Card>
      </Collapse>
      <Button color="secondary" onClick={toggle} style={{ marginBottom: '1rem', marginTop: '1rem' }}>About Photo</Button>
    </div>
    )
}

export default Explanation