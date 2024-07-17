import { useState } from 'react';
import { Container } from './components/ui/contaner'
import { Playground } from './components/ui/playground'

function App() {

  const [value, setValue] = useState<string>('');
  return (
    <Container>
      <Playground value={value} setValue={setValue} />
    </Container>
  )
}

export default App
