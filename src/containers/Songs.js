/**
 * Created by kei on 13/2/17.
 */
import React, { Component } from 'react';
import {
    View,
    TextInput,
    Text,
    TouchableOpacity,
    ListView,
    Platform
} from 'react-native';
import { SearchBar , List, ListItem } from 'react-native-elements'

import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ActionCreators from '../actions';
import Styles from '../styles';
import * as Utils from '../helpers/utils';


class Songs extends Component {

    constructor(props){
        super(props);
        this.state = {
            textt:''
        }
    }
    componentWillMount() {
        this.createDataSource(this.props);
    }


    createDataSource({ songs }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.state.dataSource = ds.cloneWithRows(songs);
    }

    componentWillReceiveProps(nextProps) {
        // nextProps are the next set of props that this component
        // will be rendered with
        // this.props is still the old set of props

        this.createDataSource(nextProps);
    }

    searchValueChanged(text){
        console.log(text);
        this.setState({textt:text})
    }

    renderRow (rowData, sectionID) {
        return (
            <ListItem
                roundAvatar
                key={sectionID}
                title={rowData.title}
                subtitle={rowData.artist}
                avatar={{uri:rowData.thumb}}
                onPress={()=>{
                    console.log(this,rowData,sectionID);
                    const song = [
                        {
                            indexId:0,
                            title: "Shape of You",
                            artist:"Ed Sheeran",
                            thumb:"http://data.chiasenhac.com/data/cover/68/67916.jpg",
                            path: "http://data.chiasenhac.com/downloads/1758/2/1757811-ebb87651/32/Shape%20of%20You%20-%20Ed%20Sheeran.m4a"
                        },
                        {
                            indexId:1,
                            title: "Chained to the Rhythm",
                            artist:"Katy Perry",
                            thumb:"http://data.chiasenhac.com/data/cover/69/68729.jpg",
                            path: "http://data.chiasenhac.com/downloads/1765/2/1764612-3ea815e0/m4a/Chained%20to%20the%20Rhythm%20-%20Katy%20Perry_%20Skip.m4a"
                        }
                    ];
                    Actions.player({songs:song, songIndex:0})
                }}
            />
        )
    }


    render() {

        return (
            <View style={Styles.homeContainer}>
                <SearchBar
                    lightTheme
                    onChangeText={this.searchValueChanged.bind(this)}
                    placeholder='Type Here...' />
                <List>
                    <ListView
                        renderRow={this.renderRow}
                        dataSource={this.state.dataSource}
                    />
                </List>
            </View>

        );
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(store) {

    const songs = [
        {
            title: "Shape of You",
            artist:"Ed Sheeran",
            thumb:"http://data.chiasenhac.com/data/cover/68/67916.jpg",
            path: "http://data.chiasenhac.com/downloads/1758/2/1757811-ebb87651/32/Shape%20of%20You%20-%20Ed%20Sheeran.m4a"
        },
        {
            title: "Chained to the Rhythm",
            artist:"Katy Perry",
            thumb:"http://data.chiasenhac.com/data/cover/69/68729.jpg",
            path: "http://data.chiasenhac.com/downloads/1765/2/1764612-3ea815e0/m4a/Chained%20to%20the%20Rhythm%20-%20Katy%20Perry_%20Skip.m4a"
        }

    ];

    return {
        songIndex: 1,
        songs: songs
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Songs);
