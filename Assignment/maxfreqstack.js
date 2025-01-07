let freq = {};
let arr = [];
let pos = 0;

function push(x) {
    if (freq[x] === undefined)
        freq[x] = 0;
    freq[x]++;
    arr.push([freq[x], ++pos, x]);
}

function pop() {
    let maxidx = -1;
    let maxval = -1;

    for (let i = 0; i < arr.length; i++) {
        let [f, idx, val] = arr[i];
        if (f > maxval || (f == maxval && idx > maxidx)) {
            maxidx = idx;
            maxval = f;
        }
    }

    let idx = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][1] == maxidx) {
            idx = i;
            break;
        }
    }

    let [f, pos, val] = arr[idx];
    f--;
    if (f === 0) {
        delete freq[val];
    } else {
        freq[val] = f;
    }

    arr.splice(idx, 1);  
    return val;          
}

push(5);
push(7);
push(5);
push(7);
push(4);
push(5);

console.log(pop());  
console.log(pop());  
console.log(pop()); 
console.log(pop());  
