/**
 * Created by kei on 13/2/17.
 */
import React, {Component} from 'react';
import {
    Image,
    Text,
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Styles from '../styles';
import Slider from 'react-native-slider';
import * as Utils from '../helpers/utils';

export class PlayButton extends Component {
    render() {
        return <Icon onPress={ this.props.togglePlay } style={ Styles.play } name={this.props.playing?"ios-pause": "ios-play"} size={70} color="#fff" />;
    }
}

export class ForwardButton extends Component {
    render() {
        let forwardButton = null;
        if(!this.props.shuffle && this.props.songIndex + 1 === this.props.songs.length ) {
            forwardButton = <FontAwesome style={ Styles.forward } name="forward" size={25} color="#333" />;
        } else {
            forwardButton = <FontAwesome onPress={ this.props.goForward} style={ Styles.forward } name="forward" size={25} color="#fff" />;
        }

        return forwardButton;
    }
}

export class BackwardButton extends Component {
    render() {
        return <FontAwesome onPress={ this.props.goBackward } style={ Styles.back } name="backward" size={25} color="#fff" />
    }
}

export class VolumeButton extends Component {
    render() {
        return <FontAwesome onPress={ this.props.toggleVolume } style={ Styles.volume } name={this.props.muted?"volume-off": "volume-up"} size={18} color="#fff" />;
    }
}

export class ShuffleButton extends Component {
    render() {
        return  <FontAwesome onPress={ this.props.toggleShuffle } style={ Styles.shuffle } name="random" size={18} color={this.props.shuffle?"#f62976": "#fff"} />;
    }
}

export class DownloadButton extends Component {
    render() {
        if(!this.props.download || this.props.downloading) {
            return  <FontAwesome style={ Styles.downloadButton } name="download" size={25} color="#333" />;
        }
        return  <FontAwesome onPress={ this.props.downloadMusic } style={ Styles.downloadButton } name="download" size={25} color="#fff" />;
    }
}

export class SongSlider extends Component {
    render() {
        return (
            <View style={ Styles.sliderContainer }>
                <Slider
                    onSlidingStart={ this.props.onSlidingStart }
                    onSlidingComplete={ this.props.onSlidingComplete }
                    onValueChange={ this.props.onValueChange }
                    minimumTrackTintColor='#fff'
                    style={ Styles.slider }
                    trackStyle={ Styles.sliderTrack }
                    thumbStyle={ Styles.sliderThumb }
                    value={ this.props.value }/>

                <View style={ Styles.timeInfo }>
                    <Text style={ Styles.time }>{ Utils.formattedTime(this.props.currentTime)  }</Text>
                    <Text style={ Styles.timeRight }>- { Utils.formattedTime( this.props.songDuration - this.props.currentTime ) }</Text>
                </View>
            </View>
        )
    }
}
