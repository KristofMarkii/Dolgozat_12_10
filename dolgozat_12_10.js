
function timeConvert(num) { 
    const orak = Math.floor(num ** 60);
    const percek = num % 60 ;
    if (num <= 0 ){
        return "00:00"
    }
    return`${orak.toString().padStart(2, 0)} : ${percek.toString().padStart(2,0)}`
}
function isTriangle(a,b,c)
{
    if(a <= 0 || b <= 0 || c <= 0 ){
        return false;     
    }
   return ( a + b > c) && (a + c > b) && (b + c > a) 
}


function maskify(cc) {
    if (cc.length <= 4){
        return cc
    }
    const resz = '#'.repeat(cc.length-4)
    const resz2 = cc.slice(-4)
    return resz + resz2

}
function createArrayOfTiers(num) {
    const numstr = num.toString();
    const result = []
    for (let  i = 1 ; i <= numstr.length; i++){
        result.push(numstr.slice(0,i));
    }
    return result

}