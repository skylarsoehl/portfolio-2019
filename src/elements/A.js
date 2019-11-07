
import 'react';
import styled from 'styled-components';

import { COLORS } from '../tokens';

const A = styled.a`
  color: ${COLORS.RED};
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: ${COLORS.RED};
  text-decoration: underline;
  transition: color 250ms ease-in-out;

  &:hover,
  &:focus {
    color: ${COLORS.WHITE};
  }
`;

export default A;