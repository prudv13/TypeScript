/*

Numeric Enums
-------------
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

String Enums
------------

enum Responses {
    no = 'No',
    yes = 'Yes',
    maybe = 'Maybe',
}


Heterogenous Enums
------------------

enum Responses {
     no = 0,
     yes = 1,
     maybe = 'Maybe',
}

*/

enum OrderStatus {
    PENDING = 10,
    SHIPPED = 34,
    DELIVERED = 324,
    RETURNED = 98,
}

const myStatus = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus){
    return status === OrderStatus.DELIVERED;
}

isDelivered(OrderStatus.DELIVERED);


// ----------------------------------

enum ArrowKeys {
    UP = "up",
    DOWN = "down",
    LEFT = "left",
    RIGHT = "right",
}

console.log(ArrowKeys.LEFT);
console.log(ArrowKeys.RIGHT);
console.log(ArrowKeys.UP);
console.log(ArrowKeys.DOWN);