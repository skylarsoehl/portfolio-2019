import React from 'react';
import styled from 'styled-components';
import H2 from '../../elements/H2'
import H3 from '../../elements/H3'
import ColItem1 from '../../elements/ColItem1'


const SubtitleTopStyled = styled(H3)`
    padding-top: 3rem;
    margin-left: 10rem;
`;

const SubtitleMiddleStyled = styled(H3)`
    margin-left: 5rem;
`;

const SubtitleBottomStyled = styled(H3)`
    margin-left: 10rem;
`;

const NameStyled = styled(H2)`
    padding-top: 3rem;
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
            </ColItem1>

            <ColItem1>
                <SubtitleMiddle>{subtitleMiddle}</SubtitleMiddle>
            </ColItem1>

            <ColItem1>
                <SubtitleBottom>{subtitleBottom}</SubtitleBottom>
            </ColItem1>

            <ColItem1>
                <Name>{name}</Name>
            </ColItem1>
        </>
    );

export default PortfolioTitle;