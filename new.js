let n = 5;

for(let i = 1; i<=n; i++ ){
  let string = '';
  for(let j = 1; j<=n; j++){
    if(j==1||i==1||i==n||j==n){
      string = string + '*' + ' '
    }else{
      string = string + '  '
    }
  }console.log(string)
}




for(let i = 1; i<=n; i++){
  let string = '';
  let space = ' '
  for(let k = i; k<n; k++){
    string = space + string
  }
  for(let j = 1; j<=i; j++){
  string = string + j*2;
  
    
    
  }console.log(string)
}




for(let i=1; i<=n;i++){
  let string = ''

    for(let k = i; k<n; k++){
    string = string + " "}


    for(let j = 1; j<=i; j++){
    string = string + '*'
  
  }
  
    for(let m = 1; m<i; m++){
    string = string + '*'

      
    }console.log(string)
}