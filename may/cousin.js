var isCousins = function(root, x, y) {
    let maxRange = 0,lastNode = 0,leftRange = [] ,rightRange = []
    let filterNull = root.filter(a  => a !==null)
    
    for(let i=2,j=2;i<64;i=(i*2)+2,j*=2)
    {
        if(Math.floor(i/filterNull.length) >= 1 )
        {  
            maxRange = i
            lastNode = j
            break
         }
    }
    
    for(let i = maxRange/2;i<(maxRange/2) +(lastNode/2);i++){
        leftRange.push(i)
    }    
    for(let i = (maxRange/2) + (lastNode/2);i<=maxRange ;i++){
        rightRange.push(i)
    }     
    //console.log(root.indexOf(x))
    //console.log((maxRange/2) + (lastNode/2))
    for(let i= maxRange;i >= (maxRange/2) + (lastNode/2);i--){
     if( root.indexOf(x) === i )  
     rightRange = true
     break
     }
    for(let i= maxRange/2;i<=maxRange - (lastNode/2);i++){
        if( root.indexOf(y) === i ) 
        leftRange = true
       }

      // return rightRange
   return rightRange === leftRange ? true : false
};
console.log(isCousins([1,2,3,4],4,3))
console.log(isCousins([1,2,3,null,4,null,5],5, 4))