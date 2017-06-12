'use strict';

import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Platform,
    ScrollView,
    RefreshControl,
    TouchableOpacity
} from 'react-native';
import _ from 'lodash';

import Habit from './Habit';

// import DashboardActions from '../../actions/DashboardActions';
// import DashboardStore from '../../stores/DashboardStore';

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            habits: [
                {name: 'Habit 1'},
                {name: 'Habit 2'},
                {name: 'Habit 3'},
                {name: 'Habit 4'},
                {name: 'Habit 5'}
            ]
        };

        this._habitsListContainer = _habitsListContainer.bind(this);
        this._habit = _habit.bind(this);

        // this.onChange = onChange.bind(this);
        // this.handleDocumentPress = handleDocumentPress.bind(this);
        //
        // this.containerMethods = {
        //     handleDocumentPress: this.handleDocumentPress,
        //     handleSearch: text => DashboardActions.ftsSearch(text),
        //     clearSearch: () => DashboardActions.ftsSearch(''),
        //     fetchDocuments: () => DashboardActions.fetchDocuments(),
        //     handleRefresh: (refreshing, busy) => DashboardActions.fetchDocuments({refreshing, busy})
        // };
    }

    // componentDidMount() {
    //     GoogleAnalytics.trackScreenView(_.get(this.props, 'route.name', ''));
    //     if (!this.state.documents.length) {
    //         DashboardActions.initDashboard();
    //     }
    //     DashboardStore.listen(this.onChange);
    // }
    //
    // componentWillUnmount() {
    //     this.setState({});
    //     DashboardStore.unlisten(this.onChange);
    // }

    render() {
        return (
            <View style={{flex: 1}}>
                <ScrollView style={styles.workOrdersContainer} >
                    <HabitListContainer
                        habits={this.state.habits}
                    />
                </ScrollView>
            </View>
        );
    }
}

const HabitList = props => (
    <View>
        { props.habits.map((_habit, i) =>
            <Habit
                style={styles.workOrder}
                key={i}
                habit={_habit}
            />
        )}
    </View>
);
HabitList.propTypes = {
    habits: React.PropTypes.array.isRequired
};

const HabitListContainer = props => (
    <View>
        {props.habits.length > 0 && <HabitList {...props} />}
    </View>
);
HabitListContainer.propTypes = {
    habits: React.PropTypes.array.isRequired

    // FOR REFERENCE:
    // busy: React.PropTypes.bool.isRequired,
    // handleRefresh: React.PropTypes.func.isRequired
    // handleHabitPress: React.PropTypes.func.isRequired,
};

function _habitsListContainer() {
    return (
        <ScrollView>
            {this._habit()}
        </ScrollView>
    )
}

function _habit() {
    const habits = [
        {name: 'Habit 1'},
        {name: 'Habit 2'},
        {name: 'Habit 3'},
        {name: 'Habit 4'},
        {name: 'Habit 5'}
    ];
    _.forEach(habits, (habit) => {
        return (
            <View>
                <Text>{habit.name}</Text>
                <Text>hello there</Text>
            </View>
        )
    });
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
