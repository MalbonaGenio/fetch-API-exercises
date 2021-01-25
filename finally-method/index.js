const promise = ()=>{
    return new Promise((resolve,reject)=>{
        reject(new Error('Something went wrong'))
    })
}

const resolver = async (promise)=>{
  try{
    await promise()
  } 
  catch (err) {
    console.log(err)
  }
  finally {
    return 'promise was rejected and finally method was executed, returned this string'
    // console.log('promise was rejected and finally method was executed, but not returned anything')
  }
}

(async function() {
  const test = await resolver(promise)
  console.log(test)
 
})();