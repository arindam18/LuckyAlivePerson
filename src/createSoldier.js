import Node from "./Node";

export default function findAliveSoldier(num) {
    if (num === 1) {
        return 1;
    }

    let last = new Node(1);
    last.next = last;

    //create a circular linklist

    for (let i = 2; i <= num; i++) {
        let temp = new Node(i);
        temp.next = last.next;
        last.next = temp;
        last = temp;
    }

    // select head
    let current = last.next;
    let temp;

    // now delete the adjacent node in circular linklist.
    // until next node same as selected node.
    while (current.next != current) {
        temp = current;
        current = current.next;
        temp.next = current.next;
        temp = temp.next;
        current = temp;
    }

    //return the last person who is alive.
    return temp.value;
}
