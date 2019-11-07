
import 'react';
import styled from 'styled-components';
import {COLORS, SIZES} from '../tokens';

const P = styled.p`
  font-family: neue-haas-unica, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 1.875rem;
  line-height: 2.625rem;
  @media (max-width: ${SIZES.BREAK_SM}) {
    font-size: 1.75rem;
  }
  & + & {
    margin-top: 1.875rem;
    @media (max-width: ${SIZES.BREAK_SM}) {
      font-size: 1.75rem;
    }
  }
`;

export default P;