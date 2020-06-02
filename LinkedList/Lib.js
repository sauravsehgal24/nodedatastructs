class Node {
    constructor(data){
        this.data = data;
        this.rightNode = null;
    }
    printData(){
        console.log(this.data)
    }
}

class LinkedList {
    constructor(data){
        if(data!==null){
            if(typeof(data)==='object'){
                this.addNodes(data)
            }
            else{
                this.rootNode=new Node(data)
                this.currentNode=this.rootNode
            }
        }
        else{
            this.rootNode=null
            this.currentNode=null
        }
    }
    addNode(data){
        if(this.rootNode==null){
            this.rootNode = new Node(data)
            this.currentNode = this.rootNode
        }
        else{
            const node = new Node(data)
            this.currentNode.rightNode = node
            this.currentNode = node
        }
    }
    addNodes(dataArray){
        dataArray.map(data=>{
            if(this.rootNode==null){
                this.rootNode = new Node(dataArray[0])
                this.currentNode = this.rootNode
            }
            else{
                const node = new Node(data)
                this.currentNode.rightNode = node
                this.currentNode = node
            }
        })
    }
    printNodes(){
        if(this.rootNode==null){
            console.log('No Linked List Found')
            return
        }
        const listString = this.printNode('',this.rootNode)
        console.log(listString)
    }

    printNode(string,node){
        string += `(${node.data}) ${node.rightNode===null? '':'---> '}`
        if(node.rightNode==null)
        {
            return string
        }
        return this.printNode(string,node.rightNode)
    }
}


module.exports = {Node,LinkedList}