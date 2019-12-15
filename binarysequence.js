<!DOCTYPE html>
<html>
<body>

<p>Binary max sequence of 1 :</p>

<p id="demo"></p>

<script>
let n = 16
    var maxcount=0;
    var count = 0;
    var output=''
    var output2=''
    
    //Convert the number to binary
    while(n>=1){
    	
        let x = n%2;
        output+=x
        output2=x+output2
        
        n=Math.floor(n/2)
    }
    
    //Count consecutive numbers. This is a common pattern
    for(i=0;i<output.length;i++){
    	if(output[i]==1){
            count ++;
            if(count>maxcount){
            maxcount=count;
        }
        }else {
            count = 0
        }
    }
        



document.getElementById("demo").innerHTML = maxcount + " "+output+ " "+output2;
</script>

</body>
</html>
