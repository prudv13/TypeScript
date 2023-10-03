# Tuples

- Tuples are a special type exclusive to typescript.
- Tuples are arrays of fixed length and ordered with specific types like super rigid arrays.

```ts
let myTuple: [number, string];

myTuple = [10, 'Typescript is fun!'];
```

```ts
type HTTPResponse = [number, string];

const goodResponse: HTTPResponse = [200, 'OK'];
const badResponse: HTTPResponse = [404, 'Not Found'];

const httpResponses: HTTPResponse[] = [[200, 'OK'], [404, 'Not Found']];
```

# Enums

- Enums allow us to define a set of named constants. We can give these constants numeric or string values.

```ts
// Numeric Enums
enum Responses {
    no, // 1
    yes, // 2
    maybe, // 3
}

enum Responses {
    no = 2, // 2
    yes, // 3
    maybe, // 4
}

enum Responses {
    no = 2, // 2
    yes = 10, // 10
    maybe = 24, // 24
}

// String Enums
enum Responses {
    no = 'No',
    yes = 'Yes',
    maybe = 'Maybe',
}


// Heterogenous Enums
enum Responses {
     no = 0,
     yes = 1,
     maybe = 'Maybe',
}
```

```ts
enum OrderStatus {
    PENDING,
    SHIPPED,
    DELIVERED,
    RETURNED
}

const myStatus = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus){
    return status === OrderStatus.DELIVERED;
}

isDelivered(OrderStatus.DELIVERED);
```