'use strict';

import React from 'react';
import { Navigator } from 'react-native';

import Routes from '../Navigator/Routes';
// import NavigationBarRouteMapper from '../Common/NavigationBarRouteMapper';
import Dashboard from './Dashboard';
// import DashboardFilters from './DashboardFilters';

/**
 * DashboardRouter
 *
 * Manages scene transitions for the dashboard route stack
 */

export default class DashboardRouter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            renderRightButton: true
        };

        this.renderScene = _renderScene.bind(this);
        this.renderRightButton = _renderRightButton.bind(this);
    }

    render() {
        return (
            <Navigator
                initialRoute={Routes.routeStacks.dashboardRouteStack.dashboard}
                renderScene={(route, navigator) => this.renderScene(route, navigator)}
                configureScene={() => ({
                    ...Navigator.SceneConfigs.HorizontalSwipeJump,
                    gestures: false
                })}
                ref={(nav) => { this.navigator = nav; }}
                navigationBar={
                    <Navigator.NavigationBar
                        routeMapper={
                            NavigationBarRouteMapper.routeMapper(this.props, this.state.renderRightButton)
                        }
                        style={Styles.NavigationBar}
                    />
                }
            />
        );
    }

}

function _renderScene(route, navigator) {
    switch (route.index) {
        case 0:
            return (
                <Dashboard
                    route={route}
                    navigator={navigator}
                    {...route.passProps}
                />
            );
        case 1:
            return (
                <DashboardFilters
                    route={route}
                    navigator={navigator}
                    {...route.passProps}
                />
            );
        default:
            return <Dashboard route={route} navigator={navigator} />;
    }
}

function _renderRightButton(renderRightButton) {
    this.setState({renderRightButton});
}
