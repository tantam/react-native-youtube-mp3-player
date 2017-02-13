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


class SearchYoutube extends Component {

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
                    const song = Utils.filterSearchResults({
                        items:[
                            {
                                "kind": "youtube#searchResult",
                                "etag": "\"uQc-MPTsstrHkQcRXL3IWLmeNsM/wI1kuyQA0AeTEje1ieUUVFQ899w\"",
                                "id": {
                                    "kind": "youtube#video",
                                    "videoId": "_wYtG7aQTHA"
                                },
                                "snippet": {
                                    "publishedAt": "2014-12-15T16:49:39.000Z",
                                    "channelId": "UCMu5gPmKp5av0QCAajKTMhw",
                                    "title": "Steven Spielberg vs Alfred Hitchcock.   Epic Rap Battles of History.",
                                    "description": "Download this song here ▻ http://hyperurl.co/The-Directors ◅ Watch the Behind The Scenes here: http://bit.ly/136ILCt \"Rap Battles are life with all the dull bits ...",
                                    "thumbnails": {
                                        "default": {
                                            "url": "https://i.ytimg.com/vi/_wYtG7aQTHA/default.jpg",
                                            "width": 120,
                                            "height": 90
                                        },
                                        "medium": {
                                            "url": "https://i.ytimg.com/vi/_wYtG7aQTHA/mqdefault.jpg",
                                            "width": 320,
                                            "height": 180
                                        },
                                        "high": {
                                            "url": "https://i.ytimg.com/vi/_wYtG7aQTHA/hqdefault.jpg",
                                            "width": 480,
                                            "height": 360
                                        }
                                    },
                                    "channelTitle": "ERB",
                                    "liveBroadcastContent": "none"
                                }
                            },
                            {
                                "kind": "youtube#searchResult",
                                "etag": "\"uQc-MPTsstrHkQcRXL3IWLmeNsM/CLyaY-TFpQ3pBNLiDo_fqg9LKSg\"",
                                "id": {
                                    "kind": "youtube#video",
                                    "videoId": "njos57IJf-0"
                                },
                                "snippet": {
                                    "publishedAt": "2012-06-14T07:01:29.000Z",
                                    "channelId": "UCMu5gPmKp5av0QCAajKTMhw",
                                    "title": "Steve Jobs vs Bill Gates.  Epic Rap Battles of History Season 2.",
                                    "description": "Download this song ▻ http://hyperurl.co/Jobs-vs-Gates ◅ Watch behind the scenes ▻ http://bit.ly/jobgates ◅ Check out our NEW Trump vs Clinton T-shirts ...",
                                    "thumbnails": {
                                        "default": {
                                            "url": "https://i.ytimg.com/vi/njos57IJf-0/default.jpg",
                                            "width": 120,
                                            "height": 90
                                        },
                                        "medium": {
                                            "url": "https://i.ytimg.com/vi/njos57IJf-0/mqdefault.jpg",
                                            "width": 320,
                                            "height": 180
                                        },
                                        "high": {
                                            "url": "https://i.ytimg.com/vi/njos57IJf-0/hqdefault.jpg",
                                            "width": 480,
                                            "height": 360
                                        }
                                    },
                                    "channelTitle": "ERB",
                                    "liveBroadcastContent": "none"
                                }
                            }
                        ]
                    })
                    Actions.player({songs:song, songIndex:1})
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

    const songs = Utils.filterSearchResults({
        items:[
            {
                "kind": "youtube#searchResult",
                "etag": "\"uQc-MPTsstrHkQcRXL3IWLmeNsM/wI1kuyQA0AeTEje1ieUUVFQ899w\"",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "_wYtG7aQTHA"
                },
                "snippet": {
                    "publishedAt": "2014-12-15T16:49:39.000Z",
                    "channelId": "UCMu5gPmKp5av0QCAajKTMhw",
                    "title": "Steven Spielberg vs Alfred Hitchcock.   Epic Rap Battles of History.",
                    "description": "Download this song here ▻ http://hyperurl.co/The-Directors ◅ Watch the Behind The Scenes here: http://bit.ly/136ILCt \"Rap Battles are life with all the dull bits ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/_wYtG7aQTHA/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/_wYtG7aQTHA/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/_wYtG7aQTHA/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "ERB",
                    "liveBroadcastContent": "none"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "\"uQc-MPTsstrHkQcRXL3IWLmeNsM/CLyaY-TFpQ3pBNLiDo_fqg9LKSg\"",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "njos57IJf-0"
                },
                "snippet": {
                    "publishedAt": "2012-06-14T07:01:29.000Z",
                    "channelId": "UCMu5gPmKp5av0QCAajKTMhw",
                    "title": "Steve Jobs vs Bill Gates.  Epic Rap Battles of History Season 2.",
                    "description": "Download this song ▻ http://hyperurl.co/Jobs-vs-Gates ◅ Watch behind the scenes ▻ http://bit.ly/jobgates ◅ Check out our NEW Trump vs Clinton T-shirts ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/njos57IJf-0/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/njos57IJf-0/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/njos57IJf-0/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "ERB",
                    "liveBroadcastContent": "none"
                }
            }
        ]
    })

    return {
        songIndex: 1,
        songs: songs
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchYoutube);
