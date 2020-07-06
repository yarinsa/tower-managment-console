import React, { useEffect, useState } from 'react';
import { H1, Tabs, Tab } from '@blueprintjs/core';
import styled from 'styled-components/macro';
import { MatchParams } from '../routes';
import { useParams, useHistory, Switch, Route } from 'react-router-dom';
import { DevicesTable } from '../Components/DevicesTable';
import { ConnectorsList } from '../Components/ConnectorsList';

export const DevicesScene: React.FC<{}> = ({}) => {
    const [selectedTab, setTab] = useState<string>('overview');
    let history = useHistory();
    let { tabId } = useParams<MatchParams>();

    useEffect(() => {
        if (tabId) {
            console.log(tabId);
            setTab(tabId);
        }
    });
    const handleTabSelection = (tabId: string) => {
        history.push(`/devices/${tabId}`);
    };
    return (
        <Root>
            <SubMenuContainer>
                <Tabs
                    selectedTabId={selectedTab}
                    onChange={handleTabSelection}
                    className="full-tabs"
                >
                    <Tab id="overview" title="Overview" />
                    <Tab id="connectors" title="Connectors" />
                    <Tab id="updates" title="Software Updates" />
                </Tabs>
            </SubMenuContainer>
            <Content>
                <Switch>
                    <Route
                        exact
                        path="/devices/connectors"
                        component={ConnectorsList}
                    />
                    <Route
                        exact
                        path="/devices/overview"
                        component={DevicesTable}
                    />
                </Switch>
            </Content>
        </Root>
    );
};

const Root = styled.main`
    display: flex;
    flex-direction: column;
`;

const SubMenuContainer = styled.div`
    background-color: #ffffff;
    box-shadow: 0px 1px 0px #f1eded;
    display: flex;
    align-items: center;
    padding: 0 15px;
`;

const Title = styled(H1)`
    margin: auto;
`;

const Content = styled.section`
    /* padding: 20px; */
    /* border-radius: 18px; */
    /* border: 1px solid #f1eded; */
    /* background-color: #ffffff; */
    margin: 40px;
`;
