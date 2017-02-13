/**
 * Created by kei on 13/2/17.
 */
const YOUTUBE_API_KEY = "AIzaSyD-DY2-xspKlte_DSQRGZyoXUTJpdfH9dQ"
export default {
    API_URL: "https://youtubeinmp3.com/fetch/?video=https://www.youtube.com/watch?v=",
    SEARCH_API_URL: `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&part=snippet&maxResults=25&q=`
}
