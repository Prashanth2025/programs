if(!Array.prototype.reducl){
    Array.prototype.reducl=function (callback,ival){
        let acc=ival;
        let start=0
        if(acc===undefined){
            acc=this[0]
            start=1
        }
        for(let i =start;i<this.length;i++){
            acc= callback(acc,this[i],i,this)


        }
        return acc;
    }
}

const n=[1,2,3,4]

const sum = n.reducl((a,b)=>a+b)
console.log(sum)


Array.prototype.rev=function(){
    let start = 0
    let end = this.length-1

    while (start < end){
        let temp= this[start]
        this[start]=this[end]
        this[end]=temp

        start++;
        end--
    }
    return this

}

let revserse=n.rev(n)
console.log(revserse)