// For Example
// Input-  (Text Field)

// String1 in Label  -> A B C D E F G H
// String2 in Label -> I J K L M N O P Q R S T

// Output -
// O/P String -> A I B J C K D L E M F N P G H P Q R S T

// function getValue(){
//     const val = document.querySelector('input').value;
//     console.log(val);
// }

let a = 'ABCDEFGH';
let b = "IJKLMNOPQRST";

len_a = a.length;
len_b = b.length;

if(len_a>len_b){
    High=a;
}else{
    High=b
}
if(len_a<len_b){
   Low=a;
}else{
    Low=b
}
c=[]
for(i in High){
    if(i<Low){
        d=a[i]+b[i];
        c=c+d;
    }else{
        c=c+b[i]
    }

}
console.log(c);
