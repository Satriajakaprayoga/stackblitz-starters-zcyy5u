import * as React from 'react';
import './style.css';
import { Button, Stack, ToggleButton } from '@mui/material';
import { useState } from 'react';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup/ToggleButtonGroup';

export default function App() {
  const [kampret, setKampret] = useState<string | null>(null)
  console.log({ kampret });
  const handleKampretChange = (
    _event: React.MouseEvent<HTMLElement>,
    updatedKampret: string | null
  ) => {
    setKampret(updatedKampret);
  };

  const[text, setText] = useState<string | null> (null)
  console.log({text})
  const handleTextChange = (_event: React.MouseEvent<HTMLElement>, updateText: string | null) => {
    setText(updateText)
  };
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happening :)</p>
      <Stack direction="row">
        <Button
          variant="contained"
          aria-label="kampret"
          onClick={() => alert('kampret telah diklik')}
          value="kampret telah diubah"
        >
          kampret
        </Button>
        <ToggleButton
          variant="contained"
          aria-label="kampret"
          onChange={handleKampretChange}
          onClick={() => alert('kampret diubah lagi')}
          value="kampret telah diubah"
        >
          kasusan
        </ToggleButton>
      </Stack>
      <Stack direction='row'>
        <ToggleButtonGroup
          variant='text formatting'
          value={text}
          onChange={handleTextChange}
          exclusive
        >
          <ToggleButton value='satu datu aku sayang ibu'>
            text satu
          </ToggleButton>
          <ToggleButton value='dua'>
            text dua
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </div>
  );
}
