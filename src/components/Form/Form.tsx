import React from 'react';
import styles from './Form.module.css';

export const Form = () => {
  const [value, setValue] = React.useState<string>('ff98sB3k5Tk');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  const saveVideo = () => {
    const oldData = JSON.parse(localStorage.getItem('videoIds') || '') || [];

    localStorage.setItem('videoIds', JSON.stringify([...oldData, value]));

    console.info(localStorage.getItem('videoIds'));
  };

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

      <button onClick={saveVideo} className={styles.button}>
        Сохранить видео
      </button>
    </div>
  );
};
