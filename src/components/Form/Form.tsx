import React from 'react';
import styles from './Form.module.css';

export const Form = () => {
  const [value, setValue] = React.useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);
  return (
    <div>
      <label className={styles.label} htmlFor='text'>
        Добавить видео
      </label>
      <input
        className={styles.input}
        id='text'
        type='text'
        value={value}
        onChange={handleChange}
        placeholder='TVdNjR1iWF4'
      />

      <button className={styles.button}>Сохранить видео</button>
    </div>
  );
};
