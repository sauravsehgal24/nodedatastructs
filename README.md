# Data structures for nodeJS

## About
This package provides various data structures like linked list, trees, graphs and many more in a easy to implement fashion for nodeJS.

### LinkedList

```
const {LinkedList} = require('nodedatastructs');

const list = new LinkedList() 

// or initialize with root node
const list = new LinkedList(12) 

// or initialize with nodes
const list = new LinkedList([12,31,432]) 

list.addNode(34)
list.addNodes([334,42,45])

list.printNodes()

```
