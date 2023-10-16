type Cat = { meow: () => void};
type Dog = {bark: () => void};

const talk = (creature: Cat | Dog) => {
    if("meow" in creature){
        console.log(creature.meow());
    }
    else{
        console.log(creature.bark());
    }
};

// ================================================

interface Movie {
    title: string,
    duration: number
}

interface TVShow {
    title: string,
    numEpisodes: number,
    episodeDuration: number
}

function getRuntime(media: Movie | TVShow) {
    if("numEpisodes" in media){
        return media.numEpisodes * media.episodeDuration;
    }
    return media.duration
}