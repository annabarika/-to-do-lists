import React from 'react';
import './App.css';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


function App() {
  return (
    <div className="App">
      <Container>
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Container>
    </div>
  );
}

export default App;
