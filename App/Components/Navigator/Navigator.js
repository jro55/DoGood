/**
 * Copyright JRoCoCo, 2017 All Rights Reserved
 */

import React, { Component, PropTypes } from 'react';
import {
    NavigatorIOS,
    Text,
    View,
    TouchableHighlight,
    StyleSheet
} from 'react-native';

import Dashboard from '../Dashboard/Dashboard';

export default class Navigator extends Component {
    render() {
        return (
            <NavigatorIOS
                initialRoute={{
                    component: Dashboard,
                    title: 'My Initial Scene Test',
                    passProps: { title: 'foo' }
                }}
                style={{flex: 1}}
            />
        );
    }
}

class MyScene extends Component {
    constructor(props) {
        super(props);
        console.log('props', props)

        this.state = {
            hello: true
        };
    }
    static propTypes = {
        title: PropTypes.string.isRequired,
        navigator: PropTypes.object.isRequired,
    };

    _onForward = () => {
        this.props.navigator.push({
            title: 'Scene ' + nextIndex,
        });
    };

    render() {
        console.log('about to render')
        return (
            <View style={styles.container}>
                <Text>Current Scene: { this.props.title }</Text>
                <TouchableHighlight onPress={this._onForward}>
                    <Text>Tap me to load the next scene</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
