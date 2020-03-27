import { gql } from "apollo-boost";

export const signupMutation = gql`
    mutation login(
        $firstName: String!
        $secondName: String!
        $email: String!
        $password: String!
      ) {
        signup(
          firstName: $firstName
          secondName: $secondName
          email: $email
          password: $password
        )
    }`;