//importing she move song details
import she_move_img from '../assets/images/she_move.jpg';
import she_move_song from '../assets/songs/she_move.mp3';

// importing nikle current song details
import nikle_current_img from '../assets/images/nikle_current.jpg';
import nikle_current_song from '../assets/songs/nikle_current.mp3';

// importing qaafirana song details
import qaafirana_img from '../assets/images/qaafirana.jpg';
import qaafirana_song from '../assets/songs/qaafirana.mp3';

export let song = {
  she_move: {
    name: 'She Move',
    image:she_move_img,
    song = new Audio(she_move_song),
  },
  nikle_current = {
    name : 'Nikle Current',
    image:nikle_current_img,
    song = new Audio(nikle_current_song),
  },
  qaafirana = {
    name : "Qaafirana",
    image:qaafirana_img,
    song : new Audio(qaafirana_song),
  },
};
