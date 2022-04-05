import { gql } from '@apollo/client';

export const QUERY_LAUNCH_LIST = gql`
  query LaunchList {
    missions(limit: 10) {
      description
      id
      manufacturers
      name
    }
  }
`;


// missions(limit:10){
//   mission_name,
//   description,
//   manufacturers,
//   payload_ids,
//   wikipedia,
//   website,
//   twitter,
//   mission_id
  
// }