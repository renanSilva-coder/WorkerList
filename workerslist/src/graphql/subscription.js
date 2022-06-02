import { gql } from '@apollo/client';

export const GET_WORKERS = gql`
    subscription getWorkers {
        functionary(order_by: {created_at: desc}) {
          age
          occupation
          id
          thumbnail
          name
        }
      }
    `;