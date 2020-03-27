import { gql } from "apollo-boost";

export const loginMutation = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      id
      firstName
      secondName
      email
    }
  }
}`;