import React from 'react';
import { ReactComponent as ConstructionsIcon } from '../assets/constructions.svg';
import styled from 'styled-components';
export const ConstructionsMessage: React.FC<{}> = ({}) => {
    return (
        <Root>
            <ConstructionsIcon />
        </Root>
    );
};

const Root = styled.div`
    margin: auto;
`;
