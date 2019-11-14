import React from 'react';
import styled from 'styled-components';
import ColItem1 from '../elements/ColItem1'

const SideTitleStyled = styled.div`
    padding-left: 7.3125rem;
    margin-left: 2rem;
    margin-right: 1.8125rem;
    width: 16.1vw;
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