import React from 'react';
import styled from 'styled-components';
import ColItem1 from '../elements/ColItem1'

const SideTitleStyled = styled.span`
    padding-left: 15rem;
    font-weight: 500;
    text-align: right;
`;

const SideTitle = ({
    title,
    SideTitle = SideTitleStyled
}) => (
        <>
            <ColItem1>
                <SideTitle>{title}</SideTitle>
            </ColItem1>
        </>
    );

export default SideTitle;