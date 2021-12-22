// A single input string will be provided in a format, with ‘N’ number of Characters.\
//  Now I need output in two String formats as String1 and String2, with alternate characters captured\
//   in String1 and String2. Both inputs should be got dynamically via an Input textbox

// For Example

// I/P String (Text Field) -> A B C D E F G H I J K L M  
// O/P String

// String1 in Label  -> A C E G I K M
// String2 in Label  -> B D F H J L

a="ABCDEFGHIJKLM"
b=[]
c=[]
for(let i in a){
    if(i%2== 0){
        b=b+a[i];
    }else{
        c=c+a[i];
    }
}
console.log("string1 in label :",b)
console.log("string1 in label :",c)