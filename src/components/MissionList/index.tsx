import * as React from 'react';
// import { useLaunchListQuery } from '../../generated/graphql';
import LaunchList from './LaunchList';
import { useQuery } from '@apollo/client';
import {QUERY_LAUNCH_LIST} from './query'

const LaunchListContainer: React.FC = (props) => {
  const { data, error, loading } = useQuery(QUERY_LAUNCH_LIST);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  return <LaunchList data={data.missions} />;
};

export default LaunchListContainer;
