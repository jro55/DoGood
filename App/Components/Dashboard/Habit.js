'use strict';

import React from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const propTypes = {
    onSelect: React.PropTypes.func.isRequired,
    habit: React.PropTypes.object.isRequired
};

export default function Habit(props) {
    return (
        <View style={styles.containerStyle} >
            <TouchableOpacity onPress={props.onSelect}>
                <View style={{minHeight: 135}}>
                    <Text>{props.habit.name}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    testStyle: {
        justifyContent: 'center'
    },
    containerStyle: {
        justifyContent: 'center'
    }
});

Habit.propTypes = propTypes;
