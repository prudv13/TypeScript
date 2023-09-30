type Point = {
    x: number;
    y: number;
}

function doublePoint(point: Point) {
    return {
        x: point.x * 2,
        y: point.y * 2,
    }
}

doublePoint({x: 2, y: 4});