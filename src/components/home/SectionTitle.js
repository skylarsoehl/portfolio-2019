import React from 'react';
import styled from 'styled-components';
import H2 from '../../elements/H2';
import ColItem2 from '../../elements/ColItem2';


const StyledMiddle = styled(H2)`
    margin-left: -12rem;

`;

const StyledSmall = styled.span`
    font-size: 4.5rem;
    margin-left: 3rem;
`;


const SectionTitle = ({
    titleTop,
    titleMiddle,
    titleBottom,
    smallTitle,
    TitleTop = H2,
    TitleMiddle = StyledMiddle,
    TitleBottom = H2,
    SmallTitle = StyledSmall
}) => (
        <>
            <ColItem2>
                <TitleTop>{titleTop}</TitleTop>
                <TitleMiddle>{titleMiddle}</TitleMiddle>
                <TitleBottom>{titleBottom}
                    <SmallTitle>{smallTitle}</SmallTitle>
                </TitleBottom>
            </ColItem2>
        </>
    );

export default SectionTitle;;