import React, { useState, useEffect } from 'react';
import './index.css';
import './theme/_index.scss';
import '@blueprintjs/table/lib/css/table.css';

import {
    Route,
    Switch,
    BrowserRouter as Router,
    useHistory,
    Redirect,
} from 'react-router-dom';
import styled from 'styled-components/macro';
import { DevicesRoute } from './routes';
import { Header } from './Components/Header';
import { Sidebar as LeftRow } from './Components/Sidebar/Sidebar';
import { DevicesScene } from './Scenes/Devices';
import { DevicesTable } from './Components/DevicesTable';
import { ConstructionsMessage } from './Components/Constructions';

const App: React.FC = () => {
    return (
        <Root>
            <LeftRow />
            <RightRow>
                <Header />
                <Content>
                    <Route path={DevicesRoute} component={DevicesScene} />
                    <Route path={'/:page'} component={ConstructionsMessage} />
                </Content>
            </RightRow>
        </Root>
    );
};

export default App;

const Root = styled.main`
    overflow: hidden;
    display: flex;
    align-items: stretch;
    height: 100vh;
`;

const RightRow = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

const Content = styled(Switch)`
    flex: 1;
`;
