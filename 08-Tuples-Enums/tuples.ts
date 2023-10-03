const colorRGBA: [number, number, number, number] = [255, 0, 255, 0.7];

type HTTPResponse = [number, string];

const goodResponse: HTTPResponse = [200, 'OK'];
const badResponse: HTTPResponse = [404, 'Not Found'];

const httpResponses: HTTPResponse[] = [[200, 'OK'], [404, 'Not Found']];
