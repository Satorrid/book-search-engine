import { gql } from "@apollo/client";

export const QUERY_PROFILE = gql`
  {
    me {
      _id
      username
      email
      bookCount
      SavedBooks {
        #_id
        bookId
        authors
        image
        link
        title
        description
      }
    }
  }
`;
