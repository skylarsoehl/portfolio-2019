import React from 'react';
import styled from 'styled-components';

const GridStyled = styled.div `
    display:grid;
    grid-template-columns: ${props => `repeat(${props.numCol}, 1fr)`};
    grid-auto-rows: minmax(100px, auto);
    grid-gap: ${props => `${props.gapSize}`};
    margin-top: ${props => `${props.marginTop}`};
    margin-bottom: ${props => `${props.marginBottom}`};
    margin-left: ${props => `${props.marginLeft}`};
    margin-right: ${props => `${props.marginRight}`};
`;

const Grid = ({
    children,
    numCol,
    gapSize,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    Grid = GridStyled
}) => (
        <>
            <Grid
            numCol = {numCol}
            gapSize = {gapSize}
            marginTop = {marginTop}
            marginBottom = {marginBottom}
            marginLeft = {marginLeft}
            marginRight = {marginRight}
            >
                {children}
            </Grid>
        </>

    );

export default Grid;