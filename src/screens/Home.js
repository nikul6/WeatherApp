import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { CustomHeader } from "../components";
import { Divider } from 'react-native-elements';
import Layout from '../common/Layout'
import { connect } from 'react-redux';
import { Fonts } from '../common/Fonts'
import Loader from '../components/Loader';
import {
    fetchCities
} from '../store/actions/weather';
import Geolocation from '@react-native-community/geolocation';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.getLocation();
    }

    getLocation = ()=> {
        Geolocation.getCurrentPosition(
        (position) => {
            this.props.fetchCities(position.coords.latitude, position.coords.longitude);
        },
            (error) => alert(error.message),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
        );
    }

    centerComponent = () => (
        <View>
            <Text style={styles.headerText}>WeatherApp</Text>
        </View>
    );

    ListViewItemSeparator = () => {
        return (
            <Divider style={{ backgroundColor: '#000' }} />
        )
    }

    _handelRefresh = async () => {
        this.getLocation();
    }

    renderCities = (item) => {
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('CityDetail', { item })}>
                <View style={styles.mainContainer}>
                    <View>
                        <Text style={styles.cityText}>{item.item.name}</Text>
                        <Text style={styles.descText}>{item.item.weather[0].main}</Text>
                    </View>
                    <Text style={styles.tempText}>{(item.item.main.temp - 273.15).toFixed(0)}&deg;<Text style={styles.celuiosText}>C</Text></Text>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <CustomHeader
                centerComponent={this.centerComponent()}
            >
                <FlatList
                    data={this.props.citiesInfo}
                    renderItem={this.renderCities}
                    ItemSeparatorComponent={this.ListViewItemSeparator}
                    keyExtractor={(item, index) => index.toString()}
                    refreshing={this.props.loading}
                    onRefresh={() => this._handelRefresh()}
                />
                <Loader loading={this.props.loading} />
            </CustomHeader>
        )
    }
}

const styles = StyleSheet.create({
    headerText: {
        color: '#fff', fontSize: Layout.window.width * 0.044, fontFamily: Fonts.RobotoMedium,
    },
    mainContainer: {
        flex: 1, flexDirection: 'row', padding: 15, marginBottom: 0, justifyContent: 'space-between', alignItems: 'center'
    },
    cityText: {
        fontFamily: Fonts.RobotoMedium, fontSize: Layout.window.width * 0.040, marginBottom: 10
    },
    descText: {
        fontFamily: Fonts.RobotoRegular, fontSize: Layout.window.width * 0.035
    },
    tempText: {
        fontFamily: Fonts.RobotoMedium, fontSize: Layout.window.width * 0.080, marginBottom: 10
    },
    celuiosText: {
        fontSize: Layout.window.width * 0.060
    }
});

const mapStateToProps = state => {
    return {
        citiesInfo: state.weather.citiesInfo,
        loading: state.weather.loading,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCities: (latitude, longitude, navigation) => fetchCities(latitude, longitude, dispatch, navigation),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);