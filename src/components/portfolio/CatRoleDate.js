import React from 'react';
import styled from 'styled-components';
import ColItem1 from '../../elements/ColItem1';



const TitleStyled = styled.div`
    font-size: 24px;
    font-weight: 600;
    line-height: 72px;
    margin-bottom: 	1.5rem;
`;

const BodyStyled = styled.p`
    font-weight: 500;
    font-size: 18px;
    line-height: 20px;
    display: block;
`;

const GridStyled = styled.div`
    display:grid;
    grid-template-columns:repeat(3, 1fr);
    grid-auto-rows: minmax(100px, auto);
    padding-left: 18rem;
    margin-left: 7.1875rem;
`;

const Column = styled.div`
    display:grid;
    grid-template-columns:repeat(2, 1fr);
    grid-auto-rows: minmax(100px, auto);
    display: block;
`;


const CatRoleDate = ({
    categoryList,
    roleList,
    date,
    GridWrapper = GridStyled,
    Title = TitleStyled,
    Body = BodyStyled,
    Col = Column
}) => (

        <>
            <GridWrapper>
                    <Col>
                        <Title>Categories</Title>
                        {categoryList.map(cat => (
                            <Body key={cat}>{cat}</Body>
                        ))}
                    </Col>
               
                    <Col>
                        <Title>Role</Title>
                        {roleList.map(role => (
                            <Body key={role}>{role}</Body>
                        ))}
                    </Col>
               
                    <Col>
                        <Title>Date</Title>
                        <Body>{date}</Body>
                    </Col>
                            
    
            </GridWrapper>
        </>
);
export default CatRoleDate