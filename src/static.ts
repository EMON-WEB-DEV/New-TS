// static...

class Counter {
        static count : number = 0 ;
        
        static increment(newCount: number) {


                return this.count = newCount ++;
        }

        static decrement(newCount: number) {
                return this.count = newCount --;
        }
}

console.log(Counter.increment(10));
//console.log(Counter.decrement());