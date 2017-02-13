/**
 * Created by kei on 13/2/17.
 */
import Config from '../config';

export function getSongName(contentDescription) {
    return contentDescription.split("=")[1].replace(/"/g, "").split(".mp3")[0];
}

export function filterSearchResults(res) {
    return res.items.map(item => {
        return {
            id: item.id.videoId,
            artist: item.snippet.channelTitle,
            title: item.snippet.title,
            thumb: item.snippet.thumbnails.high.url,
            path: getSongUrl(item.id.videoId)
        }
    });
}

export function getSongUrl(id) {
    return `${Config.API_URL}${id}`;
}

function withLeadingZero(amount){
    if (amount < 10 ){
        return `0${ amount }`;
    } else {
        return `${ amount }`;
    }
}

export function formattedTime( timeInSeconds ){
    let minutes = Math.floor(timeInSeconds / 60);
    let seconds = timeInSeconds - minutes * 60;

    if( isNaN(minutes) || isNaN(seconds) || minutes < 0 && seconds < 0){
        return "";
    } else {
        return(`${ withLeadingZero( minutes ) }:${ withLeadingZero( seconds.toFixed(0) ) }`);
    }
}