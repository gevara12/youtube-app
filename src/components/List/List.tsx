import React from 'react';
import styles from './List.module.css';

const videoIds = ['ff98sB3k5Tk'];
export const List = () => {
  React.useEffect(() => {
    localStorage.setItem('videoIds', JSON.stringify(videoIds));
  }, []);

  console.log('kek', localStorage.getItem('videoIds'));
  return (
    <div className={styles.list}>
      {videoIds.map((item) => (
        <div key={item}>
          <a href={`https://www.youtube.com/watch?v=${item}`}>
            <img
              className={styles.image}
              src={`https://i3.ytimg.com/vi/${item}/sddefault.jpg`}
              alt='cover'
            />
            <span>{item}</span>
          </a>

          <button>delete</button>
        </div>
      ))}
    </div>
  );
};
