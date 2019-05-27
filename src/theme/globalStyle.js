import { createGlobalStyle } from 'styled-components';
import {
  Title,
  Subtitle,
} from '../components/heading';
import {
  Title as DescriptionTitle,
  Description,
} from '../components/titleDescriptionPair';
import {
  Subreddit,
  PostTitle,
  Points,
} from '../components/post';

export default createGlobalStyle`
  @import url('https://rsms.me/inter/inter.css');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${(props) => props.theme.colors.gray100};
  }

  @media only screen and (min-width: 667px) {
    ${Title} {
      font-size: 3rem;
    }
    ${Subtitle} {
      font-size: 1.625rem;
    }
    ${DescriptionTitle} {
      font-size: 1.625rem;
    }
    ${Description} {
      font-size: 1.25rem;
    }
    ${Subreddit} {
      font-size: 1.125rem;
    }
    ${PostTitle} {
      font-size: 1.5rem;
    }
    ${Points} {
      font-size: 1.125rem;
    }
  }
`
