import * as React from 'react';
import './styles.css';
import {Mission} from './type'

interface Props {
  data: Mission;
}


const className = 'LaunchProfile';

const LaunchProfile: React.FC<Props> = ({ data }) => {
  if (!data) {
    return <div>No mission available</div>;
  }

  return (
    <div className={className}>
     
      <h3 className={`${className}__title`}>
        {data.name}
      </h3>
      <p className={`${className}__description`}>{data.description}</p>
    
        <a href={`${data.wikipedia}`} target="_blank" rel="noreferrer noopener" className=''>
          <button  >
          See More
          </button>
            
        </a>
     
    </div>
  );
};

export default LaunchProfile;
