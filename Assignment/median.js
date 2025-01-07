class MedianFinder {
    constructor(){
        this.nums=[];
    }

    addNum(num) {
        // Find the correct position to insert the new number to keep the array sorted
        let index=this.binarySearch(num);
        this.nums.splice(index,0,num);
    }

    binarySearch(num){
        let left=0,right=this.nums.length-1;
        while(left<=right){
            const mid=Math.floor((left+right)/2);
            if (this.nums[mid]===num){
                return mid;
            }else if(this.nums[mid]<num){
                left=mid+1;
            }else{
                right=mid-1;
            }
        }
        return left;
    }

    findMedian(){
        const n=this.nums.length;
        if(n%2===1){
            return this.nums[Math.floor(n/2)];
        } else{
            const mid1=this.nums[Math.floor((n-1)/2)];
            const mid2=this.nums[Math.floor(n/2)];
            return (mid1+mid2)/2;
        }
    }
}

const medianFinder=new MedianFinder();
medianFinder.addNum(6);
console.log("After add(6): Median =", medianFinder.findMedian()); // 6
medianFinder.addNum(10);
console.log("After add(10): Median =", medianFinder.findMedian()); // 8
medianFinder.addNum(2);
console.log("After add(2): Median =", medianFinder.findMedian()); // 6
medianFinder.addNum(8);
console.log("After add(8): Median =", medianFinder.findMedian()); // 7
medianFinder.addNum(4);
console.log("After add(4): Median =", medianFinder.findMedian()); // 6
medianFinder.addNum(12);
console.log("After add(12): Median =", medianFinder.findMedian()); // 7
