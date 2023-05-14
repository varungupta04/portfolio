import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
import UTrackerImg from '../images/utracker.jpg';
import GreenCtgImg from '../images/greenctg.jpg';
import CoinTrackerImg from '../images/cointracker.jpg';
import CavinImg from '../images/cavinimg.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Doctor-appointment',
    desc:
      'MERN prject that helps users get an appointment from doctors and communicate wuth them in this online phase live link in the repo (switch to master branch)https://github.com/varungupta04/doc-proj ',
    img: UTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'edu4u',
    desc:
      'on going project that helps tution centres freelance websites for their communication and assignments https://github.com/varungupta04/backend-edu4u',
    img: GreenCtgImg,
  },
  {
    id: uuidv4(),
    name: 'landing page',
    desc: 'using react to make landing pages with animations and smooth scroll complete front end https://github.com/varungupta04/Gifting_solution   https://github.com/varungupta04/3d-wesite',
    img: CoinTrackerImg,
  },
  {
    id: uuidv4(),
    name: "Varun's portfolio",
    desc:
      'A portfolio for myself still making betterments and using new tech for it',
    img: CavinImg,
  },
  {
    id: uuidv4(),
    name: 'arcade games',
    desc:
      'A marketplace for multiple games - hacktober fest https://github.com/csivitu/ArcadeGames',
    img: ProjectImg,
  },
];

export default projects;
