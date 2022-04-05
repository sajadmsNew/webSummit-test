import * as React from 'react';
import LaunchProfile from './LaunchProfile';
import { useQuery } from '@apollo/client';
import {QUERY_LAUNCH_PROFILE} from '../LaunchProfile/query';
import { useParams } from "react-router-dom";


const LaunchProfileContainer: React.FC = () => {

  
  let params = useParams();
  let id =params.MissionId;
  const { data, error, loading, refetch } = useQuery(QUERY_LAUNCH_PROFILE,{
    variables: { id: String(id) },
  });
  React.useEffect(() => {
    refetch({ id: String(id) });
  }, [refetch, id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>ERROR</div>;
  }

  if (!data) {
    return <div>Select a flight from the panel</div>;
  }

  return <LaunchProfile data={data.mission} />;
};

export default LaunchProfileContainer;
