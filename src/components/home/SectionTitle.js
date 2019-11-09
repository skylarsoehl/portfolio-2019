import React from 'react';
import styled from 'styled-components';
import H2 from '../../elements/H2';
import ColItem2 from '../../elements/ColItem2';
import ColItem1 from '../../elements/ColItem1';


const StyledTop = styled(H2)`
    padding-top: 3rem;
`;

const StyledMiddle = styled(H2)`
    margin-left: 17rem;
`;

const StyledSmall = styled.span`
    font-size: 72px;
    margin-left: 3rem;
`;


const SectionTitle = ({
    titleTop,
    titleMiddle,
    titleBottom,
    smallTitle,
    TitleTop = StyledTop,
    TitleMiddle = StyledMiddle,
    TitleBottom = H2,
    SmallTitle = StyledSmall
}) => (
        <>
            <ColItem2>
                <TitleTop>{titleTop}</TitleTop>
            </ColItem2>

            <ColItem1>
                <TitleMiddle>{titleMiddle}</TitleMiddle>
            </ColItem1>

            <ColItem2>
                <TitleBottom>{titleBottom}
                    <SmallTitle>{smallTitle}</SmallTitle>
                </TitleBottom>
            </ColItem2>
        </>
    );

export default SectionTitle;