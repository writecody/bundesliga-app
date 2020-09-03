import AugsburgLogo from '../assets/augsburg-logo.png';
import AugsburgStadiumImage from '../assets/id-5-team-photo.jpg';
import AugsburgTeamImage from '../assets/id-5-stadium-photo.jpg';
import BayernLogo from '../assets/bayern-logo.png';
import DortmundLogo from '../assets/dortmund-logo.png';
import DortmundTeamImage from '../assets/id-1-team-photo.jpg';
import DortmundStadiumImage from '../assets/id-1-stadium-photo.jpg';
import DusseldorfLogo from '../assets/dusseldorf-logo.png';
import FrankfurtLogo from '../assets/frankfurt-logo.png';
import FreiburgLogo from '../assets/freiburg-logo.png';
import HamburgLogo from '../assets/hamburg-logo.png';
import HannoverLogo from '../assets/hannover-logo.png';
import HerthaLogo from '../assets/hertha-logo.png';
import HoffenheimLogo from '../assets/hoffenheim-logo.png';
import KolnLogo from '../assets/koln-logo.png';
import LeverkusenLogo from '../assets/leverkusen-logo.png';
import MainzLogo from '../assets/mainz-logo.png';
import MoenchengladbachLogo from '../assets/moenchengladbach-logo.png';
import NurembergLogo from '../assets/nuremberg-logo.png';
import PaderbornLogo from '../assets/paderborn-logo.png';
import RBLeipzigLogo from '../assets/rb-leipzig-logo.png';
import SchalkeLogo from '../assets/schalke-logo.png';
import StuttgartLogo from '../assets/stuttgart-logo.png';
import UnionBerlinLogo from '../assets/union-berlin-logo.png';
import WerderBremenLogo from '../assets/werder-bremen-logo.png';
import WolfsburgLogo from '../assets/wolfsburg-logo.png';

export const teamInfo = [
  {
    name: 'Borussia Dortmund', 
    stadium_name: 'Westfalenstadion', 
    logo_image: DortmundLogo, 
    alt_text: 'Borussia Dortmund logo', 
    team_id: 1, 
    primary_color: '#000',
    secondary_color: '#FDE34D',
    location: 'Dortmund, North Rhine-Westphalia',
    nickname: 'BVB',
    team_image: DortmundTeamImage,
    stadium_image: DortmundStadiumImage
  },
  {
    name: 'FC Bayern Munchen',
    stadium_name: 'Allianz Arena',
    logo_image: BayernLogo,
    alt_text: 'FC Bayern Munchen logo',
    team_id: 2,
    primary_color: '#DB332E',
    secondary_color: '#1B67B4',
    location: 'Munich, Bavaria',
    nickname: 'The Reds',
    team_image: '',
    stadium_image: ''
  },
  {
    name: 'FC Schalke 04',
    stadium_name:  'Veltins-Arena',
    logo_image: SchalkeLogo,
    alt_text: 'FC Schalke 04 logo',
    team_id: 3,
    primary_color: '#0040A3',
    secondary_color: '#000',
    location: 'Gelsenkirchen, North Rhine-Westphalia',
    nickname: 'The Royal Blue',
    team_image: '',
    stadium_image: ''
  },
  {
    name: 'Hamburger SV', 
    stadium_name: 'Volksparkstadion', 
    logo_image: HamburgLogo, 
    alt_text: 'HamburgerSV logo', 
    team_id: 4, 
    primary_color: '#0D52BB', 
    secondary_color: '#000', 
    location: 'Hamburg', 
    nickname: 'The Dinosaur', 
    team_image: '', 
    stadium_image: ''
  },
  {
    name: 'FC Augsburg', 
    stadium_name: 'WWK Arena', 
    logo_image: AugsburgLogo, 
    alt_text: 'FC Augsburg logo', 
    team_id: 5, 
    team_image: AugsburgTeamImage, 
    stadium_image: AugsburgStadiumImage, 
    primary_color: '#CA1C19', 
    secondary_color: '#347549', 
    location: 'Augsburg, Bavaria', 
    nickname: 'Residents of the Fugger City', 
    team_image: '', 
    stadium_image: ''
  }, 
  {
    name: 'Fortuna Dusseldorf', 
    stadium_name: 'Merkur Spiel-Arena', 
    logo_image: DusseldorfLogo, 
    alt_text: 'Fortuna Dusseldorf logo', 
    team_id: 6, 
    primary_color: '#F60000', 
    secondary_color: '#000', 
    location: 'Dusseldorf, North Rhine-Westphalia', 
    nickname: 'From the District of Flingern', 
    team_image: '', 
    stadium_image: ''},
  {
    name: 'Eintracht Frankfurt', 
    stadium_name: 'Commerzbank-Arena', 
    logo_image: FrankfurtLogo, 
    alt_text: 'Eintracht Frankfurt logo', 
    team_id: 7, 
    primary_color: '#F40000', 
    secondary_color: '#000', 
    location: 'Frankfurt, Hesse', 
    nickname: 'The Eagles', 
    team_image: '', 
    stadium_image: ''
  },
  {
    name: 'SC Freiburg', 
    stadium_name: 'Schwarzwald-Stadion', 
    logo_image: FreiburgLogo, 
    alt_text: 'SC Freiburg logo', 
    team_id: 8, 
    primary_color: '#000', 
    secondary_color: '#CC3333', 
    location: 'Freiburg im Breisgau, Baden-Wurttemberg', 
    nickname: 'Brazilians of Breisgau', 
    team_image: '', 
    stadium_image: ''},
  {
    name: 'Hannover 96', 
    stadium_name: 'HDI-Arena', 
    logo_image: HannoverLogo, 
    alt_text: 'Hannover 96 logo', 
    team_id: 9, 
    primary_color: '#179D33', 
    secondary_color: '#000', 
    location: 'Hanover, Lower Saxony', 
    nickname: 'The Reds', 
    team_image: '', 
    stadium_image: ''
  },
  {
    name: 'Hertha BSC', 
    stadium_name: 'Olympiastadion', 
    logo_image: HerthaLogo, 
    alt_text: 'Hertha BSC logo', 
    team_id: 10, 
    primary_color: '#0042A5', 
    secondary_color: '#000', 
    location: 'Charlottenburg, Berline', 
    nickname: 'The Old Lady', 
    team_image: '', 
    stadium_image: ''
  },
  {
    name: 'TSG 1899 Hoffenheim', 
    stadium_name: 'PreZero Arena', 
    logo_image: HoffenheimLogo, 
    alt_text: 'TSG Hoffenheim 1899 logo', 
    team_id: 11, 
    primary_color: '#0059BD', 
    secondary_color: '#000', 
    location: 'Hoffenheim, Baden-Wurttemberg', 
    nickname: 'From the Kraichgau Region', 
    team_image: '', 
    stadium_image: ''
  },
  {
    name: '1. FC Koln', 
    stadium_name: 'RheinEnergieStadion', 
    logo_image: KolnLogo, 
    alt_text: '1. FC Koln logo', 
    team_id: 12, 
    primary_color: '#FF0000', 
    secondary_color: '#000', 
    location: 'Cologne, North Rhine-Westphalia', 
    nickname: 'The Billy Goats', 
    team_image: '', 
    stadium_image: ''
  },
  {
    name: 'Bayer 04 Leverkusen', 
    stadium_name: 'BayArena', 
    logo_image: LeverkusenLogo, 
    alt_text: 'Bayer 04 Leverkusen logo', 
    team_id: 13, 
    primary_color: '#F50000', 
    secondary_color: '#F3EA00', 
    location: 'Leverkusen, North Rhine-Westphalia', 
    nickname: 'The Eleven of the Company', 
    team_image: '', 
    stadium_image: ''},
  {
    name: '1. FSV Mainz 05', 
    stadium_name: 'Opel Arena', 
    logo_image: MainzLogo, 
    alt_text: '1. FSV Mainz 05 logo', 
    team_id: 14, 
    primary_color: '#D40000', 
    secondary_color: '#000', 
    location: 'Mainz, Rhineland-Palatinate', 
    nickname: 'The O-Fives', 
    team_image: '', 
    stadium_image: ''
  },
  {
    name: 'Borussia Moenchengladbach', 
    stadium_name: 'Borussia-Park', 
    logo_image: MoenchengladbachLogo, 
    alt_text: 'Borussia Moenchengladbach logo', 
    team_id: 15, 
    primary_color: '#000', 
    secondary_color: '#00FF97', 
    location: 'Moenchengladbach, North Rhine-Westphalia', 
    nickname: 'The Foals', 
    team_image: '', 
    stadium_image: ''
  },
  {
    name: '1. FC Nurnberg', 
    stadium_name: 'Max-Morlock-Stadion', 
    logo_image: NurembergLogo, 
    alt_text: '1. FC Nurnberg logo', 
    team_id: 16, 
    primary_color: '#AD1732', 
    secondary_color: '#000', 
    location: 'Nuremberg, Bavaria', 
    nickname: 'The Club', 
    team_image: '', 
    stadium_image: ''
  },
  {
    name: 'SC Paderborn 07', 
    stadium_name: 'Benteler-Arena', 
    logo_image: PaderbornLogo, 
    alt_text: 'SC Paderborn 07 logo', 
    team_id: 17, 
    primary_color: '#0055AF', 
    secondary_color: '#000', 
    location: 'Paderborn, North Rhine-Westphalia', 
    nickname: '', 
    team_image: '', 
    stadium_image: ''
  },
  {
    name: 'RB Leipzig', 
    stadium_name: 'Red Bull Arena', 
    logo_image: RBLeipzigLogo, 
    alt_text: 'RB Leipzig logo', 
    team_id: 18, 
    primary_color: '#F0002C', 
    secondary_color: '#001348', 
    location: 'Leipzig, Saxony', 
    nickname: 'The Red Bulls', 
    team_image: '', 
    stadium_image: ''
  },
  {
    name: 'VfB Stuttgart', 
    stadium_name: 'Mercedes-Benz Arena', 
    logo_image: StuttgartLogo, 
    alt_text: 'VfB Stuttgart logo', 
    team_id: 19, 
    primary_color: '#E60000', 
    secondary_color: '#FFE200', 
    location: 'Stuttgart, Baden-Wurttemberg', 
    nickname: 'The Swabians', 
    team_image: '', 
    stadium_image: ''
  },
  {
    name: '1. FC Union Berlin', 
    stadium_name: 'Stadion An der Alten Forsterei', 
    logo_image: UnionBerlinLogo, 
    alt_text: '1. FC Union Berlin logo', 
    team_id: 20, 
    primary_color: '#FE0000', 
    secondary_color: '#FFE200', 
    location: 'Kopenick, Berlin', 
    nickname: 'The Iron Ones', 
    team_image: '', 
    stadium_image: ''
  },
  {
    name: 'SV Werder Bremen', 
    stadium_name: 'Weserstadio', 
    logo_image: WerderBremenLogo, 
    alt_text: 'SV Werder Bremen logo', 
    team_id: 21, 
    primary_color: '#00984E', 
    secondary_color: '#000', 
    location: 'Bremen, Free Hanseatic City of Bremen', 
    nickname: 'The River Islanders', 
    team_image: '', 
    stadium_image: ''
  },
  {
    name: 'VfL Wolfsburg', 
    stadium_name: 'Volkswagen Arena', 
    logo_image: WolfsburgLogo, 
    alt_text: 'VfL Wolfsburg logo', 
    team_id: 22, 
    primary_color: '#65B32E', 
    secondary_color: '#000', 
    location: 'Wolfsburg, Lower Saxony', 
    nickname: 'The Wolves', 
    team_image: '', 
    stadium_image: ''
  },
];
