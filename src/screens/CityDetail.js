import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { CustomHeader, BackButton } from "../components";
import Layout from '../common/Layout'
import { connect } from 'react-redux';
import { Fonts } from '../common/Fonts'
import MapView from 'react-native-maps';

class CityDetail extends Component {
    constructor(props) {
        super(props);
    }

    centerComponent = () => (
        <View>
            <Text style={styles.headerText}>WeatherApp</Text>
        </View>
    );

    render() {
        const {
            navigation: { navigate, goBack }
        } = this.props;
        return (
            <CustomHeader
                leftComponent={<BackButton color={'#000'} navigate={goBack} />}
                centerComponent={this.centerComponent()}
            >
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 4 }}>
                        <MapView
                            style={{ flex: 1, width: "100%" }}
                            initialRegion={{
                                latitude: this.props.route.params.item.item.coord.lat,
                                longitude: this.props.route.params.item.item.coord.lon,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                            }}
                        >
                            <MapView.Marker
                                coordinate={{
                                    latitude: this.props.route.params.item.item.coord.lat,
                                    longitude: this.props.route.params.item.item.coord.lon,
                                }}
                            />
                        </MapView>
                    </View>
                    <View style={{ flex: 2, margin: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: -10 }}>
                        <View>
                            <Text style={styles.cityText}>{this.props.route.params.item.item.name}</Text>
                            <Text style={styles.descText}>{this.props.route.params.item.item.weather[0].main}</Text>
                            <Text style={styles.descText}>Humidity: {this.props.route.params.item.item.main.humidity}</Text>
                            <Text style={styles.descText}>Wind Speed: {this.props.route.params.item.item.wind.speed}</Text>
                            <Text style={styles.descText}>Max. Temp.: {(this.props.route.params.item.item.main.temp_max - 273.15).toFixed(0)}&deg;<Text style={styles.celuiosText}>C</Text></Text>
                            <Text style={styles.descText}>Min. Temp.: {(this.props.route.params.item.item.main.temp_min - 273.15).toFixed(0)}&deg;<Text style={styles.celuiosText}>C</Text></Text>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={styles.tempText}>{(this.props.route.params.item.item.main.temp - 273.15).toFixed(0)}&deg;<Text style={styles.celuiosText1}>C</Text></Text>
                            <Image source={require('../assets/image/clouds.png')} style={{ height: 60, width: 100 }} />
                        </View>
                    </View>
                </View>
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
        fontFamily: Fonts.RobotoMedium, fontSize: Layout.window.width * 0.050, marginBottom: 10, fontWeight: 'bold'
    },
    descText: {
        fontFamily: Fonts.RobotoRegular, fontSize: Layout.window.width * 0.040, padding: 2
    },
    tempText: {
        fontFamily: Fonts.RobotoMedium, fontSize: Layout.window.width * 0.080, marginBottom: 10
    },
    celuiosText: {
        fontSize: Layout.window.width * 0.030
    },
    celuiosText1: {
        fontSize: Layout.window.width * 0.060
    }
});

const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CityDetail);