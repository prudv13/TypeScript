interface Song {
    title: string;
    artist: string;
}

interface Video {
    title: string;
    creator: string;
    resolution: string;
}

class VideoPlayList{
    public videos: Video[] = []
}

class SongPlayList {
    public songs: Song[] = []
}

class PlayList<T>{
    public queue: T[] = [];
    add(el: T){
        this.queue.push(el)
    }
}

const songs = new PlayList<Song>();
const videos = new PlayList<Video>();

videos.add({title: "Bad Blood", creator: "Taylor Swift", resolution: "1080p"});
console.log(videos.queue);