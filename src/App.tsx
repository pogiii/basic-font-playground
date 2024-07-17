import { useState } from 'react';
import { Container } from './components/ui/contaner'
import { Playground } from './components/ui/playground'
import { ToggleGroup, ToggleGroupItem } from './components/ui/toggle-group';

function App() {
  
  const [value, setValue] = useState<string>('');
  const [fontFamily, setFontFamily] = useState<string>('shtark-1906');
  return (
    <Container>
      <div>
        <h1 className="text-white">
          פונט שטארק
        </h1>
        <ToggleGroup type="single">
          <ToggleGroupItem value="1906">1906</ToggleGroupItem>
          <ToggleGroupItem value="2024">2024</ToggleGroupItem>
        </ToggleGroup>
      </div> 
      <Playground fontFamily={fontFamily} value={value} setValue={setValue} />
    </Container>
  )
}

export default App
