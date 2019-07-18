import React, { useEffect, useState } from "react";
import { Loader, Segment, Dimmer } from "semantic-ui-react";


const LoaderExampleIndeterminate = () => (
    <div>
      <Segment>
        <Dimmer active>
          <Loader indeterminate></Loader>
        </Dimmer>
      </Segment>
    </div>
  )

  export default () => (<div><LoaderExampleIndeterminate/></div>)