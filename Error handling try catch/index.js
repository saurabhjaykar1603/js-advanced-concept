console.log('Statement 1')
console.log('Statement 2')
 try {
   throw new Error('You have an error!')
 } catch (error){
   console.log(error)
 }
 console.log('Statement 3')