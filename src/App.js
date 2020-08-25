import React from "react";
import "./App.css";
import { Card, ICardTokens, ICardSectionStyles, ICardSectionTokens } from '@uifabric/react-cards';
import { FontWeights, Icon, IIconStyles, Image, Stack, IStackTokens, Text, ITextStyles } from 'office-ui-fabric-react';

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <Card aria-label="Clickable horizontal card " horizontal  >
          <Card.Item fill>
            <Image src="https://placehold.it/180x135" alt="Placeholder image." />
          </Card.Item>
          <Card.Section>
            <Text variant="small">
              Contoso
            </Text>
            <Text>Contoso Denver expansion design marketing hero guidelines</Text>
            <Text variant="small" >
              Is this recommendation helpful?
            </Text>
          </Card.Section>
          <Card.Section >
            <Icon iconName="RedEye" />
            <Icon iconName="SingleBookmark" />
            <Stack.Item grow={1}>
              <span />
            </Stack.Item>
            <Icon iconName="MoreVertical"  />
          </Card.Section>
        </Card>
    </div>
  );
}

export default App;
