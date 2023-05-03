import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
import UTrackerImg from '../images/utracker.jpg';
import GreenCtgImg from '../images/greenctg.jpg';
import CoinTrackerImg from '../images/cointracker.jpg';
import CavinImg from '../images/cavinimg.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Habit Tracker',
    desc:
      'An application to track your habits from one place. I developed it using kotlin',
    img: UTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'edu4u',
    desc:
      'on going project that helps tution centres freelance websites for their communication and assignments',
    img: GreenCtgImg,
  },
  {
    id: uuidv4(),
    name: 'event_sol',
    desc: 'using web 3.0 making a safe event-gateway',
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
    name: 'notifee',
    desc:
      'A slcak bot that schedules meetings straight from the message of the sender',
    img: ProjectImg,
  },
];

export default projects;
