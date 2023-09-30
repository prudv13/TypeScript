type Child = {
    name: string;
    age: number;
    parentNames:  {
        mom: string;
        dad: string;
    }
}

const describeChild = (child: Child) : string => {
    return `Child Name: ${child.name}, age: ${child.age}, Mother Name: ${child.parentNames.mom}, Father Name: ${child.parentNames.dad}`
}

const jimmy: Child = {
    name: 'Jimmy',
    age: 10,
    parentNames: {
        mom: 'Lisa',
        dad: 'Jay'
    }
}
console.log(describeChild(jimmy))

// ----------------------------------------------------------


type Song = {
    title: string;
    artist: string;
    numStreams: number;
    credits: {
        producer: string;
        writer: string;
    }
}

function calculatePayout(song: Song): number {
    return song.numStreams*0.0033
}

function printSong(song: Song): void {
    console.log(`${song.title} - ${song.artist}`);
}

const mySong: Song = {
    title: "Unchained Melody",
    artist: "Righteous Brothers",
    numStreams: 12873321,
    credits: {
        producer: "Phil Spector",
        writer: "Alex North"
    }
}

calculatePayout(mySong)
printSong(mySong)