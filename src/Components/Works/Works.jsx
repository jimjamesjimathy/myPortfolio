import { useState } from 'react';
import './works.scss';

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: '1',
      icon: '',
      title: 'Web Design',
      desc:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
      img:
        'https://ibb.co/RSGYwnN',
      projectType: 'web'
    },
    {
      id: '2',
      icon: './assets/globe.png',
      title: 'Mobile Application',
      desc:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      img:
        'https://ibb.co/nzQbpVz',
        projectType: 'mobile'
    },
    {
      id: '3',
      icon: '',
      title: 'Branding',
      desc:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      img:
        'https://ibb.co/nzQbpVz',
        projectType: 'web'
    },
  ];

  const handleClick = (direction) => {
    direction === 'left'
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className='works' id='works'>
      <div
        className='slider'
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className='container'>
            <div className='item'>
              <div className='left'>
                <div className='leftContainer'>
                  <img src={data.icon} />
                  <h2>Title: {d.title}</h2>
                    <div className='slideDescription'>
                      <h2>Description: </h2>
                    <p>{d.desc}</p>
                    </div>
                  <h2>Type:</h2>
                  <p>{d.projectType}</p>
                </div>
              </div>
              <div className='right'>
                <img
                  src='https://i.ibb.co/7Qy46PS/20211205-121040.jpg'
                  alt=''
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src='Assets/right.png'
        className='arrow left'
        alt=''
        onClick={() => handleClick('left')}
      />
      <img
        src='Assets/right.png'
        className='arrow right'
        alt=''
        onClick={() => handleClick()}
      />
    </div>
  );
}