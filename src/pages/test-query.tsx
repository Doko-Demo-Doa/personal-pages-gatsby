import React from 'react';
import { graphql } from 'gatsby';

const TestQuery = () => <div>Hello!</div>;

export const query = graphql`
  query HomePageQuery {
    dataJson {
      title
      parent {
        id
      }
    }
    site {
      siteMetadata {
        description
      }
    }
  }
`;

export default TestQuery;
