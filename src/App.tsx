import React from 'react';

import { Header } from 'components/Header/Header';
import { Form } from 'components/Form/Form';

const App = () => {
  return (
    <div className='App'>
      <Header />

      <main>
        <Form />
      </main>
    </div>
  );
};

export default App;
