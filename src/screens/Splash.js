import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { Fonts } from '../common/Fonts';
import Layout from '../common/Layout';
import Colors from '../common/Colors';

class Splash extends Component {
    constructor() {
        super();
    }

    render() {
        setTimeout(() => {
            this.props.navigation.navigate('Home')
        }, 1000)
        return (
            <View style={styles.mainContainer}>
                <Text style={styles.splashText}>WheatherApp</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1, justifyContent: 'center', alignItems: 'center'
    },
    splashText: {
        color: Colors.AppHeaderColor, fontSize: Layout.window.width * 0.090, fontFamily: Fonts.RobotoBold
    },
});

const mapStateToProps = state => {
    return {
    }
};
const mapDispatchToProps = dispatch => {
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Splash);