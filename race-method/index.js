const taskA = ()=>{
   return new Promise((res)=>{
      setTimeout(()=>{
            res('a')
      },4000)
})       
} 
const taskB = ()=>{
   return new Promise((res)=>{
      setTimeout(()=>{
            res('b')
      },2000)
})
}
const taskC = ()=>{
    return new Promise((res) => {
      setTimeout(()=>{
            res('c')
      },10000)
})
}


//this promise will resolve in 1,5 sec and bc of the race method if any other promise takes longer than that the stopper will run and stop the rest of the promises.
const promiseStopper = ()=>{
      return new Promise((res) => {
      setTimeout(()=>{
            res('too long to complete')
      },1500)
})
}

(async function() {
    try{
          const result = await Promise.race([taskA(),taskB(),taskC(),promiseStopper()])
          console.log(result)
    
    }catch(err){
        console.log(err)
    }
})();