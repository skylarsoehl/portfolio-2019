import React from 'react';
import styled from 'styled-components';
import H2 from '../../elements/H2'
import ColItem2 from '../../elements/ColItem2'


const StyledTop = styled(H2)`
    padding-top: 3rem;
`;

const StyledBottom = styled(H2)`
    margin-left: -10rem;
`;

const StyledSmall = styled.span`
    font-size: 72px;
    line-height: 210px;
    padding-right: 15rem;
`;



const StyledBottom

const TitleSubtitle = ({
    titleTop,
    titleMiddle,
    titleBottom,
    smallTitle,
    TitleTop = StyledTop,
    TitleMiddle = H2,
    TitleBottom = StyledBottom,
    SmallTitle = StyledSmall
}) => (
        <>
            <ColItem2>
                <TitleTop>{titleTop}</TitleTop>
            </ColItem2>

            <ColItem2>
                <TitleMiddle>{titleMiddle}</TitleMiddle>
            </ColItem2>

            <ColItem2>
                <TitleBottom>{titleBottom}</TitleBottom><SmallTitle>{smallTitle}</SmallTitle>
            </ColItem2>
        </>
    );

export default TitleSubtitle;