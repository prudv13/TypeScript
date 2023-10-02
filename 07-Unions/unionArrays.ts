const stuff: any[] = [1,2,3,4, true, "asdas", {a: 1}];

const stuffs: (number | string)[] = [13, "hello"];

type Points = {
    x: number;
    y: number;
};

type Locs = {
    lat: number;
    long: number;
};

const coordinate: (Points | Locs)[] = [];
coordinate.push({ x: 1, y: 34});
coordinate.push({ lat: 321.213, long: 23.331 });