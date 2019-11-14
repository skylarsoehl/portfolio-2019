import React from 'react';
import styled from 'styled-components';
import H2 from '../../elements/H2'
import H3 from '../../elements/H3'
import ColItem1 from '../../elements/ColItem1'


const SubtitleTopStyled = styled(H3)`
    margin-left: 10rem; 
`;

const SubtitleMiddleStyled = styled(H3)`
    margin-left: 5rem;
`;

const SubtitleBottomStyled = styled(H3)`
    margin-left: 10rem;
    margin-bottom: 1rem;
`;

const NameStyled = styled(H2)`
    padding-top: 1.5rem;
    margin-left: 5rem;
`;




const PortfolioTitle = ({
    subtitleTop,
    subtitleMiddle,
    subtitleBottom,
    name,
    SubtitleTop = SubtitleTopStyled,
    SubtitleMiddle = SubtitleMiddleStyled,
    SubtitleBottom = SubtitleBottomStyled,
    Name = NameStyled
}) => (
        <>
            <ColItem1>
                <SubtitleTop>{subtitleTop}</SubtitleTop>
        
                <SubtitleMiddle>{subtitleMiddle}</SubtitleMiddle>
        
                <SubtitleBottom>{subtitleBottom}</SubtitleBottom>

                <Name>{name}</Name>
            </ColItem1>
        </>
    );

export default PortfolioTitle;