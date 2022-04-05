import { gql } from '@apollo/client';

export const QUERY_LAUNCH_PROFILE = gql`
  query LaunchProfile($id: ID!) {
    mission(id:$id){
      name,
      description,
      manufacturers,
      wikipedia,
      website,
      twitter,
      
    }
  }
`;
