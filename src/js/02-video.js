import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const savedTime = localStorage.getItem('videoplayer-current-time');

let initialTime;

if (savedTime) {
  initialTime = parseFloat(savedTime);
} else {
  initialTime = 0;
}

player.setCurrentTime(initialTime);

player.on(
  'timeupdate',
  throttle(function (data) {
    const curentTime = data.seconds;
    localStorage.setItem('videoplayer-current-time', curentTime.toFixed(2));
  }, 1000)
);
