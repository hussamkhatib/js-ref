#### The mighty reducer
```javascript
var arr = [1,2,3,4,5]
var result = arr.reducer( (sum,current) => sum + current,0)
//15. , 0 is the initial value ,without it reducer takes first as initial value and starts iteration from second element
```
