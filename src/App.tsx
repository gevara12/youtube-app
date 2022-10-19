import React from 'react';

import { Header } from 'components/Header/Header';
import { Form } from 'components/Form/Form';
import { List } from 'components/List/List';

const App = () => {
  return (
    <div className='App'>
      <Header />

      <main>
        <Form />
        <List />
      </main>
    </div>
  );
};

export default App;
