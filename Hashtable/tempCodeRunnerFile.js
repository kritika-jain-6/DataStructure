class HashTable{
    constructor(){
        this.table=new Array(10);
        this.size=0;
    }

    setkey(key){
        return key%10;
    }

    insert(val){
        const idx=this.setkey(val);
        if(!this.table[idx]){
            this.table[idx]=[];
        }
        this.table[idx].push(val);
        this.size++;
    }

    get(key){
        const target=this.setkey(key);
        if(this.table[target]){
            return this.table[target];
        }
        return null;
    }

    search(val){
        const idx=this.setkey(val);
        if(this.table[idx]){
            for(let i=0;i<this.table[idx].length;i++){
                if(this.table[idx][i]==val){
                    console.log("the value is found: ",idx); 
                    return;
                }
            }
                       
        }
        console.log(" value not found");            
        
    }

    delete(key){
        const idx=this.setkey(key);
        if(this.table[idx]){
            for(let i=0;i<this.table[idx].length;i++){
                if(this.table[idx][i]==key){
                    this.table[idx].splice(i,1);
                    this.size--;
                    if(this.table[idx].length === 0){
                        this.table[idx]=undefined;
                    }
                    return true;
                }
            }
        }
        return false;
    }
}

const hash=new HashTable();
hash.insert(100);
hash.insert(88);
hash.insert(87);
hash.insert(68);
hash.insert(49);
hash.insert(78);
hash.insert(11);
hash.insert(56);
hash.insert(23);
hash.insert(9);

console.log(hash.table);

hash.search(56);
hash.search(11);

hash.delete(9);

console.log(hash.table);

