var patterns="ABAACC"

//  var words=word.split("'")
word_count={}
 

 for(let char of patterns){
     if(!char in word_count){
         word_count[char]=1

     }
     else{
         console.log(char);
         break;
     }
     
 }

 