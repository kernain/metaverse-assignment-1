// 22 Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

let cars = new Array(4, "corolla", "mehran", "cultus")


cars.map((elem)=>{
    if(typeof elem === "number"){
        
    console.error("Intentional error number can't be a car name")

    }
})

