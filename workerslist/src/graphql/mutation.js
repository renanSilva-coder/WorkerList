import { gql } from "@apollo/client";

export const ADD_WORKER = gql`
    mutation addWorker($name: String!, $age: Float!, $thumbnail: String!, $occupation: String!) {
        insert_functionary(objects: {name: $name, age: $age, thumbnail: $thumbnail, occupation: $occupation}) {
            affected_rows
        }
    }`;
      