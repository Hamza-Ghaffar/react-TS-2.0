import React from 'react';
import Home_Page from './components/homepage';
import './App.css';
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core'; // Import Anchor component


const App: React.FC = () => {
  return (
    <MantineProvider>
      <Home_Page />
    </MantineProvider>
  );
};

export default App;
