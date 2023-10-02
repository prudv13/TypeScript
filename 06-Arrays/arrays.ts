// empty array
const noUsers: [] = [];

// string array
const activeUsers: string[] = [];
activeUsers.push("Colt");

// numbers array
const ageList: number[] = [45, 56, 13];
ageList[0] = 99;

// boolean array
const bools: Array<boolean> = [true, false, true, false];

// object array
type Point = {
    x: number;
    y: number;
}

const coords: Array<Point> = [];
coords.push({x: 23, y: 18});