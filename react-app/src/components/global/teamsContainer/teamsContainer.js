import React from 'react';
import '../../../index.css';

import AugsburgLogo from '../../../assets/augsburg-logo.png';
import BayernLogo from '../../../assets/bayern-logo.png';
import DortmundLogo from '../../../assets/dortmund-logo.png';
import DusseldorfLogo from '../../../assets/dusseldorf-logo.png';
import FrankfurtLogo from '../../../assets/frankfurt-logo.png';
import FreiburgLogo from '../../../assets/freiburg-logo.png';
import HamburgLogo from '../../../assets/hamburg-logo.png';
import HannoverLogo from '../../../assets/hannover-logo.png';
import HerthaLogo from '../../../assets/hertha-logo.png';
import HoffenheimLogo from '../../../assets/hoffenheim-logo.png';
import KolnLogo from '../../../assets/koln-logo.png';
import LeverkusenLogo from '../../../assets/leverkusen-logo.png';
import MainzLogo from '../../../assets/mainz-logo.png';
import MoenchengladbachLogo from '../../../assets/moenchengladbach-logo.png';
import NurembergLogo from '../../../assets/nuremberg-logo.png';
import PaderbornLogo from '../../../assets/paderborn-logo.png';
import RBLeipzigLogo from '../../../assets/rb-leipzig-logo.png';
import SchalkeLogo from '../../../assets/schalke-logo.png';
import StuttgartLogo from '../../../assets/stuttgart-logo.png';
import UnionBerlinLogo from '../../../assets/union-berlin-logo.png';
import WerderBremenLogo from '../../../assets/werder-bremen-logo.png';
import WolfsburgLogo from '../../../assets/wolfsburg-logo.png';

const teamInfo = [
  {imageFile: DortmundLogo, altText: 'Dortmund logo', teamId: 1},
  {imageFile: BayernLogo, altText: 'Bayern logo', teamId: 2},
  {imageFile: SchalkeLogo, altText: 'Schalke logo', teamId: 3},
  {imageFile: HamburgLogo, altText: 'Hamburg logo', teamId: 4},
  {imageFile: AugsburgLogo, altText: 'Augsburg logo', teamId: 5}, 
  {imageFile: DusseldorfLogo, altText: 'Dusseldorf logo', teamId: 6},
  {imageFile: FrankfurtLogo, altText: 'Frankfurt logo', teamId: 7},
  {imageFile: FreiburgLogo, altText: 'Freiburg logo', teamId: 8},
  {imageFile: HannoverLogo, altText: 'Hannover logo', teamId: 9},
  {imageFile: HerthaLogo, altText: 'Hertha logo', teamId: 10},
  {imageFile: HoffenheimLogo, altText: 'Hoffenheim logo', teamId: 11},
  {imageFile: KolnLogo, altText: 'Koln logo', teamId: 12},
  {imageFile: LeverkusenLogo, altText: 'Leverkusen logo', teamId: 13},
  {imageFile: MainzLogo, altText: 'Mainz logo', teamId: 14},
  {imageFile: MoenchengladbachLogo, altText: 'Moenchengladbach logo', teamId: 15},
  {imageFile: NurembergLogo, altText: 'Nuremberg logo', teamId: 16},
  {imageFile: PaderbornLogo, altText: 'Paderborn logo', teamId: 17},
  {imageFile: RBLeipzigLogo, altText: 'RB Leipzig logo', teamId: 18},
  {imageFile: StuttgartLogo, altText: 'Stuttgart logo', teamId: 19},
  {imageFile: UnionBerlinLogo, altText: 'Union Berlin logo'},
  {imageFile: WerderBremenLogo, altText: 'Werder Bremen logo'},
  {imageFile: WolfsburgLogo, altText: 'Wolfsburg logo'},
];

const TeamsContainer = () => {
  return (
    <>
      <div className="teams-container">
          {teamInfo.map((object, index) => {
            return (
              <>
              <div className="teams-container__logo-container">
                <a key={index} href={`http://localhost:3000/team/${object.teamId}`}>
                  <img
                  className="teams-container__logo" 
                  key={index} 
                  src={object.imageFile} 
                  alt={object.altText} />
                </a>
              </div>
              </>
            )
          })}
      </div>
    </>
  )
}

export default TeamsContainer;
