function Queue(){
    var q = [];
    
    this.enqueue = function(el) {

        if (q.length===0){
            q.push(el)
        }
        else{
            let flag = 0;
            for (let i = 0; i < q.length; i++){
                if (el > q[i]){
                    q.splice(i, 0, el);
                    flag=1;
                    break;
                }
            }
            if(flag===0){
                q.push(el);
            }

        }
    }

    this.dequeue = function() {
        return q.shift();
    }

    this.print = function() {
        for (let i = 0; i < q.length; i++){
            console.log(q[i])
        }
        console.log(q.toString());
    }
}


var queue = new Queue();

queue.enqueue(2);        // 添加元素 John
queue.enqueue(9);         // 添加元素 Jam
queue.enqueue(7);      // 添加元素 Camila
queue.print();


