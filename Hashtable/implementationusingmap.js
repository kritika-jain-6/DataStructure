class HashMap{
    constructor(){
        this.map=new Map();
    }

    insert(key,value){
        this.map.set(key,value);
    }

    delete(key){
        return this.map.delete(key);
    }

    search(key){
        return this.map.has(key);
    }

    get(key){
        return this.map.get(key);
    }

    display(){
        for(let [key,value] of this.map){
            console.log(key+ " "+value);
        }
    }

    size(){
        return this.map.size;
    }

    isEmpty(){
        return this.map.size ===0;
    }

    clear(){
        this.map.clear();
    }

    keys(){
        return  Array.from(this.map.keys());
    }

}

let hashmap= new HashMap();
hashmap.insert(1,2);
hashmap.insert(2,3);
hashmap.insert(3,4);
hashmap.insert(4,5);
hashmap.insert(5,6);
hashmap.display();
console.log(hashmap.size());
console.log(hashmap.keys());
console.log(hashmap.search(2));
console.log(hashmap.get(3));
console.log(hashmap.delete(4));
hashmap.display();







