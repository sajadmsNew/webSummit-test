import * as React from 'react';

import { Link } from "react-router-dom";
import {Mission} from '../LaunchProfile/type';
import './styles.css';

interface Props  {
  data: Mission[];
}

const className = 'MissionList';

const LaunchList: React.FC<Props> = ({ data }) => {
  
  
  return (
  <div className={className}>
    <h3>Missions</h3>
    <ol className={`${className}__list`}>
      {!!data &&
        data.map(
          (mission, i) =>
            !!mission && (
                <div className={`${className}__card`} >
                  <Link to={`/Mission/${mission.id}`} className={`${className}__link`} >
                      <h4>{mission.name} </h4>
                      <p className={`${className}__text`} >  {mission.description}</p>
                  </Link>
                </div>
            ),
        )}
    </ol>
  </div>
)};

export default LaunchList;
