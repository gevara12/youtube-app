import React from 'react';

const videoIds = ['ff98sB3k5Tk'];
export const List = () => {
  React.useEffect(() => {
    localStorage.setItem('videoIds', JSON.stringify(videoIds));
  }, []);

  console.log('kek', localStorage.getItem('videoIds'));
  return (
    <div>
      {videoIds.map((item) => (
        <div key={item}>
          <span>{item}</span>
          <img
            src={`https://i3.ytimg.com/vi/${item}/sddefault.jpg`}
            alt='cover'
          />

          <button>delete</button>
        </div>
      ))}
    </div>
  );
};
