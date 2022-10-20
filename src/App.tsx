import React from 'react';

import { useTheme } from 'hocs/ThemeProvider/ThemeProvider';

import { Header } from 'components/Header/Header';
import { Form } from 'components/Form/Form';
import { List } from 'components/List/List';
import { ThemeSwitcher } from 'components/ThemeSwitcher/ThemeSwitcher';
import styles from './App.module.css';

const App = () => {
  const { theme } = useTheme();

  return (
    <div
      className={styles.host}
      style={
        {
          ...theme,
        } as React.CSSProperties
      }
    >
      <Header />
      <ThemeSwitcher />
      <main>
        <Form />
        <List />
      </main>
    </div>
  );
};

export default App;
