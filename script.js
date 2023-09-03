// console.log('hello')
// let
// var
// const

// function getP(a) {
//     const P = a * 4;
//     return P
// }
// const P1 = getP(2)
// const P2 = getP(4)
// const P3 = getP(6)

// console.log(P1, P2, P3)


// function begin2(a){
// const S = a ** 2
// return S 
// }
// console.log(begin2(1))
// console.log(begin2(12))

// function begin1(a){
//     const P = 4 * a
//     return P 
// }
// console.log(begin1(1), begin1(12))



// function begin3 (a,b){
//     const P = 2 * (a + b)
//      const S = a * b 
//     return {P, S} 
// }
// console.log (begin3(5,4))
// console.log (begin3(10 , 10))



// function begin4V(a) {
//     let V = a**3
//     return V 
// }
// function begin4S(a) {
//     let S = 6 * a**2
//     return S
// }
// console.log(begin4V(5), begin4S(5) )
// console.log(begin4V(10) , begin4S(10))



// function begin5 (a,b){
//    const num = (a + b)/2
//    return num 
// }
// console.log(begin5(5,7).toFixed(1))
// console.log(begin5(2, -3))


// function begin6 (a,b){
//     const num = (a * b)**0.5 
//     return num
// }
// console.log(begin6(2,8))
// console.log(begin6(0,5))
// console.log(begin6(7,9))


// function begin7 (a,b){
//     const c = ((a**2 + b**2)**0.5)
//     const P = a + b + c
  
//     return {P, c}

//     }
  
// console.log(begin7(3,4))  
// console.log(begin7(5,7))


// function begin8 (x1,x2){
// const mod = Math.abs(x1-x2)
// return mod
// }
// console.log(begin8(1,4))
// console.log(begin8(1,-4))


// function begin9 (a,b){
// c =  b + a 
// b = c - a 
//  a = c - b   
// return {b,a}
// }
// console.log(begin9(1,4))
// console.log(begin9(10,15))

// function begin10 ( a,b,c){
//     const num = a
//     a = b
//     b= c
//     c = num
// или 
    //[a, b, c] = [b, c, a]
//     return {b,c,a}

// }
// console.log (begin10(1,4,7))
// console.log (begin10(10 , 15 , 20 ))



                //booleans
// function boolean1(a){
//     const num = a>0 
//     return num 
// }
// console.log(boolean1(5))
// console.log(boolean1(0))
// console.log(boolean1(-4))



// function boolean2(a) {
//     const boolean2 = a%2===0
//     return boolean2
// }
// console.log (boolean2(3))
// console.log (boolean2(0))
// console.log (boolean2(6))


// function boolean3(a) {
//     const boolean3 = a%2!==0
//     return boolean3
// }
// console.log(boolean3(5))
// console.log(boolean3(0))
// console.log(boolean3(6))


// function boolean4(a){
//     const boolean4 = a%10===7 || a%10===4
//     return boolean4
// }
// console.log(boolean4(4))
// console.log(boolean4(57))
// console.log(boolean4(75))


// function boolean5(a){
//     const boolean5 = a%2===0 && a%10!==4
//     return boolean5
// }
// console.log(boolean5(14))
// console.log(boolean5(57))
// console.log(boolean5(42))


// function boolean6(a,b){
//   const boolean6 = Number(a)>0 && Number(b)>0
     
//     return boolean6
// }
// console.log(boolean6(5,4))
// console.log(boolean6(0,3))
// console.log(boolean6(-1,-2))

// function boolean7 (a,b) {
//     const boolean7 = Number(a)>0 || Number(b)>0
//     return boolean7
// }
// console.log(boolean7(5,6))
// console.log(boolean7(0,3))
// console.log(boolean7(-1,-2))


// function boolean8(a,b) {
//     const boolean8 = Number(a)>0 && Number(b)<0 || Number(a)<0 && Number(b)>0
//     return boolean8
// }
// console.log(boolean8(5,-6))
// console.log(boolean8(-5,6))
// console.log(boolean8(5,6))
// console.log(boolean8(-5,-6))
// console.log(boolean8(5,0))


// function boolean9(a,b,c){
//     const boolean9 = Number(a)<Number(b)&& Number(b)<Number(c)
//     return boolean9
// }
// console.log(boolean9(5,10,11))
// console.log(boolean9(5,11,10))
// console.log(boolean9(7,7,7))

// function boolean12 (a){
//     const result = a % 2 !== 0 && a> 99 && a < 1000 || a % 2 === 0 && a > 9 && a < 100
//     return result
// }
// console.log(boolean12(8))
// console.log(boolean12(9))
// console.log(boolean12(51))
// console.log(boolean12(52))
// console.log(boolean12(100))
// console.log(boolean12(101))
// console.log(boolean12(9998))
// console.log(boolean12(9999))


// function boolean13 (a){
// const a1 = Math.floor (a/1000) 
// const a2 = Math.floor (a/100) % 10
//  const a3 = Math.floor (a/10) % 10
//  const a4 = a%10
// return a1 === a4 && a3 === a2
// }
// console.log(boolean13(1001))
// console.log(boolean13(9999))
// console.log(boolean13(1233))


// function boolean14(n) {
// const year = n % 100 === 0 && n % 400 === 0 || n % 100 !== 0 && n % 4 === 0
// return year
// }
// console.log(boolean14(2020))
// console.log(boolean14(1996))
// console.log(boolean14(1990))
// console.log(boolean14(2000))
// console.log(boolean14(1900))

// function boolean15 (a,b,c){
//     const treug = a<b+c && b<a+c && c<a+b
// return treug
// }
// console.log(boolean15(1,1,1))
// console.log(boolean15(3,4,5))
// console.log(boolean15(1,2,3))
// console.log(boolean15(7,3,3))



//-------------

// function condition1 (a){
//  if (a>0){
//    a++
//  } 
//  return a 
// }
// console.log(condition1(5))
// console.log(condition1(0))
// console.log(condition1(-1))

// function condition2 (a){

//         if (a>0){
//          a += 1
//         } 
//         else{ 
//          a -= 2

//         }
//return a
        
// }
// console.log(condition2(5))
// console.log(condition2(0))
// console.log(condition2(-1))


// function condition3 (a){
//     if ( a > 0 ){
//         a += 1
//     } else if (a<0) {
//         a -= 2
//     } else {
//         a = 10 
//     }
//     return a
// }
// console.log(condition3(5))
// console.log(condition3(0))
// console.log(condition3(-1))

// function condition4 (a,b){
//     // if (a%2===0){
//     //     a += b 
//     // } else {
//     //     b -= a 
//     // }
//     // a % 2 === 0 ? a += b : a - тернарное уравнение ( оператор) 
//     return{ a, b }
// }
// console.log(condition4(4,6))
// console.log(condition4(5,6))
// console.log(condition4(7,4))

// function condition4 (a, b, c){
//     if (a%2===0 ){
//         b++ 
//         c++
        
//     }
//     if (b%2===0 && c%2!==0){
//         a -= 2
//     }
//     return {a,b,c}
// }
// console.log(condition4(4,5,6))
// console.log(condition4(4,3,5))
// console.log(condition4(7,6,5))

// function condition6 (a, b ,c ){
//     let sum = 0 
//     if(a % 2 === 0) sum += a;
//     if(b % 2 === 0) sum += b;
//     if(c % 2 === 0) sum += c;
//     return{sum}
// }
// console.log (condition6(7, 4, 8))
// console.log (condition6(3, 5, 6))
// console.log (condition6(3, 5, 7))

// function condition7 (a, b, c){
// if(a >= b && b >= c ) return a 
// if(b >= a && b >= c ) return b 
// if(c >= a && c >= b ) return c 

// }
// console.log(condition7(5, 8, 2))
// console.log(condition7(3, 5, 6))
// console.log(condition7(7, 7, 2))

// function condition9 (a, b, c){
//     if (a >= b && b >= c) return {a, b, c}
//     if (b >= a && a >= c) return {b, a, c}
//     if (c >= b && b >= a ) return {c, b, a}
// }
// console.log(condition9(5, 8, 2))
// console.log(condition9(3, 5, 6))
// console.log(condition9(-1, -2, -3))

// function condition8 (a, b, c){
//     if (a >= b && b >= c) return {c, b, a}
//     if (a >= c && c >= b) return {b, c, a}
//     if (b >= a && a >= c) return {c, a, b}
//     if (b >= c && c >= a) return {a, c, b}
//     if (c >= b && b >= a) return {a, b, c}
//     if (c >= a && a >= b) return {b, a, c}
// }
// console.log(condition8(5, 8, 2))
// console.log(condition8(3, 5, 6))
// console.log(condition8(-1, -2, -3))

// function condition9 (a, b, c){
// if (a > b && b > c) return{a, b, c} 
// if (b > a && a > c) return{b, a, c}
// if (c > a && a > b) return{c, a, b}
// if (b > c && c > a) return{b, c, a}
// if (c > b && b > a) return{c, b, a}
// if (a > c && c > b) return {c, b, a}
// }
// console.log(condition9(5, 8, 2))
// console.log(condition9(3, 5, 6))
// console.log(condition9(-1, -2, -3))

// function condition10 (a, b, c){

// if (a >= b && a >= c) return 1
// if (b >= a && b >= c) return 2
// if (c >= a && c >= b) return 3

 
// }

// console.log(condition10(5, 8, 2))
// console.log(condition10(3, 5, 6))
// console.log(condition10(-1, -2, -3))

// function condition11 (a, b, c){
//     if (a > b && b > c) return Math.max(a,b,c) - Math.min(a, b, c)  
//     if (b > a && a > c) return Math.max(b, a, c) - Math.min(b, a, c)
//     if (c > a && a > b) return Math.max(c, a, b) -  Math.min(c, a, b)
//     if (b > c && c > a) return Math.max(b, c, a) -  Math.min(b, c, a)
//     if (c > b && b > a) return Math.max(c, b, a) -  Math.min(c, b, a)
//     if (a > c && c > b) return Math.max(c, b, a) -  Math.min(c, b, a)
    
// }
// console.log(condition11(5, 8, 2))
// console.log(condition11(3, 5, 6))
// console.log(condition11(20, 5, 10))


// function condition11 (a, b, c){
//     let count = 0
//     if(a % 2 === 0 || a % 10 === 7) count++
//     if(b % 2 === 0 || b % 10 === 7) count++
//     if(c % 2 === 0 || c % 10 === 7) count++
//     return count 
// } 

// console.log(condition11(10, 17, 25))
// console.log(condition11(3, 7, 9))
// console.log(condition11(6, 7, 8))
// console.log(condition11(11, 13, 15))



// function condition13 (a, b, c){
//     let num = a+b+c 
//     if ( num%2!==0 ) { 
//         return [a*2 , b*2 , c*2] 
//     }
//     else {
//         return [a*-1 , b* -1 , c*-1]
//     }

//  }
// console.log(condition13(1, 2, 3))
// console.log(condition13(2, 3, 4))
// console.log(condition13(3, 3, 3))


// function condition14 (a, b, c){
// if (a%10==4 || b%10==4 || c%10 ==4 ) return Math.max (a,b,c)
// else return Math.min(a,b,c)
// }

// console.log(condition14(3, 4, 5))
// console.log(condition14(5, 6, 7))
// console.log(condition14(4, 24, 14))

// function condition15 (a, b, c){
//     let sum = a + b
//     let razn = a - b
//     let s = sum 
//     let d = razn
//     if (sum == c ) {
//         return (a + '+' + b+ '='+ c )
//     } else if (razn ==c ) { 
//         return (a + '-'+b + '=' + c)
//     } else  {
//         // return ( a +'+'+ b + '=' + s + ','+ a+ '-' + b  + '=' + d  )
//         return `${a} + ${b} = ${a + b}, ${a} - ${b} = ${a - b}`
//     }


// }

// console.log(condition15(10, 20, 30))
// console.log(condition15(30, 20, 10))
// console.log(condition15(3, 4, 5))


// function condition16 (a, b){
//     if (a > b) return 'Вася'
//     else if (a < b) return 'Петя'
//     else return 'Ничья' 
// }

// console.log(condition16(20, 15))
// console.log(condition16(15, 20))
// console.log(condition16(10, 10))

// function condition17 (a, b){
//     return Math.abs (a - b)
// }

// console.log(condition17(20, 15))
// console.log(condition17(20, 25))
// console.log(condition17(10, 10))

// function condition18 (a, b){
//     if (a >= b+2 || b>= a+2) return 'YES'
//     else return 'NO'
// }

// console.log(condition18(20, 15))
// console.log(condition18(20, 22))
// console.log(condition18(10, 11))
// console.log(condition18(10, 10))

// function condition19 (v, p){
//     if (v === p) return 'Ничья '
//     else if (v=== 'k' && p=== 'n' || v === 'n' && p === 'b' || v === 'b' && p === 'k') return 'Вася'
//     else return 'Петя'
// } 
// console.log(condition19('k', 'n'))
// console.log(condition19('b', 'n'))
// console.log(condition19('b', 'k'))
// console.log(condition19('n', 'n'))

// function condition20 (r, m, s){
//     // r- шоколад
//     // s - мороженое
    
//     if (r >= m + s ) return 'и то и другое'
//     else if (r >=m && r< s || r >= m && r <=s  ) return 'Мороженое'
//     else if (r< m && r >= s ) return 'Шоколад'
//     else  return 'Ничего '

// }
// console.log(condition20(100, 30, 40))
// console.log(condition20(100, 50, 100))
// console.log(condition20(100, 120, 100))
// console.log(condition20(100, 120, 120))


// for (let i = 0 ; i < 10 ; i++ ) {
//     console.log(i)
// }

// function loop (n){
//     for (let i = 1 ; i<=n ; i++  ){
//         console.log(i)
//     }
// }
// loop (0)
// loop (1)
// loop (3)

// function loop4 (n){
//         for (let i = 1 ; i<=n ; i++ ){
//             console.log(n)
//         }
//     }
//     loop4 (0)
//     loop4 (1)
//     loop4 (3)

// function loop5 (n, s){
//     for (let i = 1 ; i<=n ; i++ ){
//         console.log(s)
//     }
// }
// loop5 (0 , 'qwerty')
// loop5 (1, 'qwerty')
// loop5 (3, 'abc')

// function loop6 (n) {
//     for (let i = n ; i>=1 ; i-- ){
//         console.log(i)
//     }
// }
// loop6 (0 )
// loop6 (1)
// loop6 (3)

// function loop8 (n){
//     for (let i = 1 ; i<=n ; i+=2 ){
//         console.log(i)
//     }
// }
// loop8 (0)
// loop8 (1)
// loop8 (3)
// loop8(6)

// function loop9(n){
//     for( let i = 2 ; i <= n ; i += 2){
//         console.log ( i )
//     }
// }
// loop9 (0)
// loop9 (1)
// loop9 (3)
// loop9(6)

// function loop10 (a, b){

//     for( let i = b - 1 ; i > a ; i-- ){
//         console.log(i)
//     }

// }
// loop10(0, 1)
// loop10(5, 7)
// loop10(10, 15)

// function loop11 (p, n){
//     for ( let i = 1 ; i <= n ; i++){
//         console.log (p * i)
//     }

// }
// loop11(300, 3)
// loop11(199.75, 4)

// function loop12(p, n){
    
//     for (let i = 1 ; i <= n ; i++){
//         console.log(p * i * 0.1) 
//     }
   
// }
// loop12(300, 3)
// loop12(199.75, 4)

// function loop17(n){
//     for ( let i = 2 ; i <= n; i++ ){
//         if ( i%3 ==0 || i%2 ==0 ) {
//             console.log(i)
//         }
//     }
// }
// loop17(3)
// loop17(6)

// function loop19(n){
//     let a = 0
//     for ( let i = 1 ; i <= n ; i++){
//         console.log(a+=i )
//     }
// }
// loop19(3)
// loop19(5)

// function loop20 (n){
//     let a = 1
//     for (let  i =1 ; i <= n ; i++ ){
//         console.log(a*=i)
//     }
// }
// loop20(3)
// loop20(5)


// function loop21(n) {

//     for( let i = 1 ; i <= n*n+1 ; i++ ){
//         if (i%10 == 7 || i%10==4 ) {
//             console.log(i)  
//         }
        
//     }
// }
// loop21(1)
// loop21(2)
// loop21(4)

// function loop22(n){
//     let sum = 0 
  
//     for(let i= 1 ; i<= n*n+1  ; i++) {
//         if (i%10==7 || i%10===4) {
            
//             console.log(sum+=i)
//         }
           
//     }   
// }
// loop22(1)
// loop22(2)
// loop22(4)

// function loop23(n){
//     let x = 1
//     let y = x * 2
//     let srt = 0 

//     for ( i = 1 ; i<= n  ; i++) {
//     if(x>=1 && x<= n ){
//         x = i
//         str = x+ ' * 2 =  '
//         console.log(str + i*y )

//     } 

//     }
// }
//     loop23(2)
//     loop23(4)


// function loop24 (n, m){
//     let x = 1 
//     let y = x * m 
//     let str = 0
//     for( let i=1 ; i<=n+x ; i++){
//     if (x<= n )
//     x=n
//         str = `${i} * ${y}`
//     console.log(str + '=' + i * y)
//     }
// }
// loop24(2,5)
// loop24(4,3)


// function loop25 (n){
  
//     for (let i = 0 ; i<= n ; i ++){
        
//     console.log(i & 1 )
//     }
// }
// loop25(2)
// loop25(5)

// function loop26 (n){
  
//     for (let i = 0 ; i < n  ; i ++){
       
//     console.log(i %3  )
//     }
// }
// loop26(2)
// loop26(5)

// function loop27 (n){
//     let num = -1
//     for (let i = 1 ; i<=n ; i ++){       
      
//     console.log (num *= -1)
//     }
// }
// loop27(2)
// loop27(5)


// function loop28 (n){
//        for (let i = 0 ; i < n   ; i ++){     
     
//     console.log((i  % 2) + 1 )
     
//     }
// }
// loop28(2)
// loop28(5)

// function loop29 (n){
//        for (let i = 0 ; i < n   ; i ++){     
     
//     console.log((i  % 3) + 1 )
     
//     }
// }
// loop29(2)
// loop29(5)


// function loop30 (n){
//        for (let i = 1 ; i <= n   ; i ++){     
     
//     console.log((i% 2) )
     
//     }
// }
// loop30(2)
// loop30(5)

// function loop31 (n){
//     for (let i =1 ; i <= n  ; n--){     
     
//         console.log(n % 3)                            
     
//     }
// }
// loop31(2)
// loop31(5)

// function loop32 (n){
//     let num = -1
//        for (let i = 0 ; i < n  ; i ++){     
//        num *= -1
//         console.log((i % 3 + 1) * num )
     
//     }
// }
// loop32(2)
// loop32(5)

// function loop33 (n){
    
//        for (let i = 0 ; i < n  ; i ++){     
       
//         console.log((i % 3) * 2 )
     
//     }
// }
// loop33(2)
// loop33(5)

// function loop33 (n){
    
//     for (let i = 0 ; i <n  ; i ++){      
    
//      console.log(((i % 3) * 2) + 2)
  
//  }
// }
// loop33(2)
// loop33(5)


// function loop35 (n){
    
//     for (let i = 1 ; i < n  ; i++){   
//         n--
//      console.log(i , n)
//  }
// }
// loop35(8)
// loop35(7)


// let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// function loop36 (n){
    
//     for (let i = 0 ; i < n  ; i++){   
        
//      console.log(arr[i] )
//  }
// }
// loop36(1)
// loop36(3)

// let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// function loop37 (n){
//     for(let i = arr.length-1; i > arr.length -1- n; i--){
//         console.log(arr[i].toUpperCase())
//     }
// }
// loop37(1)
// loop37(3)

// let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// function loop38 ( str) {
//     for ( let i = 0 ; i < arr.length  ; i += 2 ){
//         console.log ( arr[i])
//         if(arr[i] === str || arr[i+1] === str){
//             break
//         }
// }
// }
// loop38('f')
// loop38('c')

// let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//  function loop39 (a, b){
//     let start = 0
//     let end = 0

//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === a) start = i
//         if(arr[i] === b) end = i
//     }

//     for(start; start < end; start++){
//         console.log(arr[start], arr[end]);
//         end--
//     }

//  }
//  loop39('a', 'c')
//  loop39('b', 'e')

// let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


// function loop40 (n){
//     for ( let i = 0 ; i< n ; i++ ){

//     console.log ( (arr[i] + arr[i +1]).toUpperCase() )
//     if (arr[i]===n )
//     break
//     }
// }
// loop40(1)
// loop40(3)


// function array1 (n){
//     let arr = []
//     for (let i = 0 ; i<n ; i++) {
//         arr.push (0) 
        
//     }
//     return arr
// }

// console.log(array1(0))
// console.log(array1(1))
// console.log(array1(3))

// function array1 (n){
//     let arr = []
//     for (let i = 0 ; i < n ; i++) {
//         arr.push (i) 
        
//     }
//     return arr
// }

// console.log(array1(0))
// console.log(array1(1))
// console.log(array1(3))

// function array1 (n){
//     let arr = []
//     for (let i = 0 ; i < n ; i++) {
//         arr.unshift (i) 
//         //unshift - вставляет в начало массива 
//         // push - в конец массива 
//     }
//     return arr
// }

// console.log(array1(0))
// console.log(array1(1))
// console.log(array1(3))

// function array7 (n, s) {
//     let arr = []
//     for(i=0 ; i< n ; i++){
//         arr.push (s)
//     }
//     return arr
// }
// console.log(array7(0, 'a'));
// console.log(array7(1, 'a'));
// console.log(array7(3, 'xyz'));

// function array8(n) {
//     let arr = []
//     for( let  i = 0 ; i< n ; i++){
//         arr.push(i*2)
//     }
//     return arr
// }

// console.log(array8(0))
// console.log(array8(1))
// console.log(array8(3))


// function array9(n){
//     let arr = []
//     for ( let i = 1 ; i<=n ; i ++){
       
//         arr.push(i+ i-1 )
//         }
//         return arr 
//     }
    
// console.log(array9(0))
// console.log(array9(1))
// console.log(array9(3))



// function array10(n){
//     let arr = []
//     for ( let i = 1 ; i<=n ; i ++){
       
//         arr.push(i+ i )
//         }
//         return arr 
//     }
    
// console.log(array10(0))
// console.log(array10(1))
// console.log(array10(3))


// function array11(x, y){
// let arr = []
// x<y
//     for ( let i = x ; i <= y ; i++  ){
//         arr.push(i )
//     }
// return arr
// }
// console.log(array11(0, 1));
// console.log(array11(5, 7));
// console.log(array11(-2, 0));



// function array12(x, y){
//     let arr = []
//         for ( let i = x  ; i < y ; i++  ){
//             arr.unshift(i )
//             delete arr [ arr.length -1]
//             }
//             return arr
//         }
    
    
//     console.log(array12(0, 1));
//     console.log(array12(5, 7));
//     console.log(array12(-2, 2));

// function array13(n){
//     let arr = []
//     for (let i = 1 ; i<=n ; i++){
//         arr.push(i,i)
//     } 
//     return arr

// }

//     console.log(array13(1));
//     console.log(array13(2));
//     console.log(array13(3));


// function array14(n){
//     let arr = []
//     let a = 0 
//     for ( i = 1 ; i <= n   ; i++)    
//     arr.push(a+=i )
//     return arr 

// }
//     console.log(array14(1));
//     console.log(array14(3));
//     console.log(array14(5));


// function array15(n){
//     let arr = []
//     for ( let i = 0 ; i< n ; i++ ){
//         if (i<2 ) arr.push(1)
//         else (arr.push (arr[i-1]+ arr[i-2]))
        
//     }
// return arr

// }
//     console.log(array15(2));
//     console.log(array15(5));
//     console.log(array15(7));

// function array16(a){
    
//     // for ( let i = 0; i < a.length ; i ++) {
//     //     a[i]*=2
//     // }
    
//     return a.map((item) => item *= 2)
//     return a.map(function (item, index, array) {return item *= 2})
//     // map - переберает элементы массива и возвращает новый массив по результатам действия функции(коллбэка) для каждого элемента массива
//     // item - каждый элемент массива
//     // index - порядковый номер каждого элемента массива
//     // array - ссылка на массив(для удобства)
// }

// console.log(array16([]))
// console.log(array16([1]))
// console.log(array16([-2, 0, 5]))


// function array17(a){
//     // return  a.map((item, index) => {
//     //    if(index % 2 !== 0) return item * 2
//     //    else return item
//     // })

//     return a.map((item, index) => index % 2 !== 0 
//         ? item * 2 : item)
// }
// console.log(array17([]))
// console.log(array17([1,1,1]))
// console.log(array17([1,2,2,1]))

// function array18 (a){
//     // return  a.map ((item,index) =>  {
//     //     if( index % 2 === 0 ) return item * 2
//     //     else return item
//     // })
//     return a.map((item , index) => index % 2 === 0   
//         ? item * 2    
//         : item)
// }

// console.log(array18([]))
// console.log(array18([1,1,1]))
// console.log(array18([1,2,2,1]))


// function array19 (a){
//     return a.map((item,index) => item %2!==0 
//     ? item * 2
//     : item)


// }

// console.log(array19([]))
// console.log(array19([1,1,1]))
// console.log(array19([1,2,3,3]))


// function array20 (a){
//     return a.map((item)=> item %2 !==0
//     ? item *2 
//     : item /2 )

// }

// console.log(array20([]))
// console.log(array20([1,1,2]))
// console.log(array20([2,4,3,5]))

// function array21 (a){
//     return a.map((item) => item < 0
//     ? 0 
//     : item )
// }

// console.log(array21([]))
// console.log(array21([-1, 1, 2]))
// console.log(array21([-1, 2, 3, -4]))

// function array22 ( a){
//     return a.map ((item)=> item<0
//     ? item * -1
//     : item)

// }
// console.log(array22([]))
// console.log(array22([-1, 1, 2]))
// console.log(array22([-1, 2, 3, -4]))

// function array23(a){
//     return a.map ((item , index) => item > a[index + 1]
//     ? 0
//     : item)

// }
// console.log(array23([1, 2]))
// console.log(array23([3, 2, 1]))
// console.log(array23([1, 2, 1, 2]))

// function array24(a){
//     return a.map ((item , index) => item > a[index - 1]
//     ? 0
//     : item)

// }
// console.log(array24([1, 2, 3, 4]))
// console.log(array24([3, 2, 1 , 0]))
// console.log(array24([1, 3, 2, 4]))



// function array25(a){
//     return a.filter((item, index, arr) => index % 2 === 1)

// }
// console.log(array25([1, 2, 4, 3]))
// console.log(array25([2, 3, 4]))
// console.log(array25([1, 2, 3, 4, 5, 6]))

// function array26(a){
//     return a.filter((item, index) => item % 2===0)
// }
// console.log(array26([1, 2, 4, 3]))
// console.log(array26([2, 3, 4]))
// console.log(array26([1, 2, 3, 4, 5, 6]))

// function array27(a){
//     return a.filter((item) => item%10 === 7 || item%10 ===4)
  
// }
// console.log(array27([41, 76, 0]))
// console.log(array27([2, 3, 4]))
// console.log(array27([4, 24, 107]))

// function array28(a){
//     return a.filter((item) => item%2!==0 && item%3!==0)
// }
// console.log(array28([10, 9, 8]))
// console.log(array28([2, 3, 4, 5, 6]))
// console.log(array28([1, 5, 7, 9]))

// function array29(a){
//     a.forEach((item,index) => { 
//         index % 2 == 0 && a[index + 1] ? a.splice(index, 2, a[index + 1] , item) : item
//     });
//    return a
// }
// console.log(array29([1, 2]))
// console.log(array29([1, 2, 2, 1, 3]))
// console.log(array29([1, 5, 7]))


// function array30(a){
//     let arr = a.slice()
//     arr.reverse()
//     return arr
// }
    

// console.log(array30([1]));
// console.log(array30([10, 20, 15]));
// console.log(array30([5, 3, 7, 4]));

// function array31(a){
//   const mas = a.slice(0 , a.length / 2)
//         const twoMas = a.slice(a.length / 2 , a.length) 
//         return [].concat(twoMas, mas)
//     };


// console.log(array31([1, 2]))
// console.log(array31([1, 2, 3, 4]))
// console.log(array31([1, 2, 3, 3, 2, 1]))


// function array32(a){
//     const a1 =  a.pop()
//     a.unshift(a1)
//     return a
// }

// console.log(array32([1, 2, 3]));
// console.log(array32([4, 1, 2, 3]));
// console.log(array32([3, 4, 1, 2]));

// function array33(a){
//   const a1 =  a.shift()
//   a.push(a1)
//   return a
// }

// console.log(array33([1, 2, 3]));
// console.log(array33([4, 1, 2, 3]));
// console.log(array33([3, 4, 1, 2]));

// function array34(a){
//    const a1 = a.shift()
//    const indexOf = a.indexOf(a1 + 1)
//    const index =  indexOf === -1 ? a.length : indexOf
//    a.splice(index, 0 , a1 )
   
//    return a

// }

// console.log(array34([3, 1, 2, 4]));
// console.log(array34([2, 1, 1, 2, 2]));
// console.log(array34([6, 2, 3, 4, 5]));

// function array35(a){
//     const a1 = a.pop()
//    const lastIndexof =   a.lastIndexOf(a1+1) 
//    const num = lastIndexof === -1 ? 0 : lastIndexof+1
//    a.splice(num, 0 , a1 )

//     return a
// }
// console.log(array35([5, 4, 2, 3]));
// console.log(array35([2, 2, 1, 1, 2]));
// console.log(array35([5, 4, 3, 2, 6]));


// function array36 (a){
//     // let arr = []
//     // a.forEach(elem => {
//     //     arr.push(elem*2 )
//     // });
//     // return arr

//     // Второй способ

//     let result = a.map((item) => item * 2)
    
//     return result
// }

// console.log(array36([1]))
// console.log(array36([1, 2]))
// console.log(array36([5, 10, 5]))


// function array37(a){
    
//   return    a.map ((item, index  ,array) => [index + 1] %2 ==0
//     ? item * 2
//     : item 
//       )
// }

// console.log(array37([1]))
// console.log(array37([1, 2, 3]))
// console.log(array37([1, 1, 1, 1]))


// function array38(a){
    
//   return    a.map ((item, index  ,array) => item %2 !==0
//     ? item * 2
//     : item 
//       )
// }

// console.log(array38([1]))
// console.log(array38([1, 3, 2]))
// console.log(array38([1, 1, 1, 1]))

// function array39(a){
//  const result =    a.filter((item, index)=> [index+1] %2==0)
//        return result
// } 

// console.log(array39([1]))
// console.log(array39([1, 3, 2]))
// console.log(array39([1, 2, 1, 3]))

// function array40 (a){
//   return  a.map((item) => item>0)

// }
// console.log(array40([1]))
// console.log(array40([1, -2, 0]))
// console.log(array40([0, 1, 2]))


// function array41 (a){
    
//     // a.reverse()
//     // return a

//      a.map((item ,index) => a.reverse(index))
//      return a

// }
// console.log(array41([1]))
// console.log(array41([1, 0, 2]))
// console.log(array41([9, 7, 4]))


//function array42 ( a){
//    const arr = []
//    a.forEach((item, index) => arr.push(index === 0 
//        ? item : arr[index -1] + item))
//    return arr
//}
//console.log(array42([1, 1, 1]))
//console.log(array42([2, 2, 2]))
//console.log(array42([10, 5, 1, 0]))


// function array44(a,b){
//     const arr = []
//     for(let i = 0; i < a.length; i++){
//         arr.push(a[i] + b[i])
//     }
//     return arr
// }
// console.log(array44([1, 2], [2, 3]))
// console.log(array44([1, 2, 3], [3, 2, 1]))
// console.log(array44([1, 1, 1], [3, 2, 1]))

// function array43(arr){
//     arr.forEach((item, index) => index % 2 === 0 && arr[index + 1] !== undefined
//         ? arr.splice(index, 2, arr[index + 1], item)
//         : item
//     )

//     return arr
// }

// console.log(array43([1, 2]))
// console.log(array43([1, 2, 3]))
// console.log(array43([10, 5, 1, 0]))


// function array44 (a, b){
//     let arr = []
//     for ( let i = 0; i < a.length ; i++){
//         arr.push(Math.max(a[i], b[i]))
//     }
//         return arr
// }

// console.log(array44([1, 2], [2, 3]))
// console.log(array44([1, 2, 3], [3, 2, 1]))
// console.log(array44([1, 1, 1], [3, 2, 1]))

// function array45 (a, b){
//   return  a.map((item, index) => Math.abs(item - b[index]))


// }

// console.log(array45([1, 2], [2, 3]))
// console.log(array45([1, 2, 3], [3, 2, 1]))
// console.log(array45([1, 1, 1], [3, 2, 1]))


// function array46 (a, m, n){
    
//    return a.slice(m -1,n)
    

// }

// console.log(array46([5, 4, 3], 2, 3))
// console.log(array46([5, 6, 7, 8], 1, 3))
// console.log(array46([9, 8, 7, 1, 2, 3], 3, 5))


// function array47 (a, m, n){
//     let arr = [] 
//    for ( let i = m -1 ; i < a.length ; i+=n ){
//         arr.push(a[i])
//    }
    
// return arr
// }

// console.log(array47([5, 4, 3], 1, 1))
// console.log(array47([5, 6, 7, 8], 1, 2))
// console.log(array47([9, 8, 7, 1, 2, 3], 2, 3))
// console.log(array47([9, 8, 7, 1, 2, 3, 7, 6, 8], 4, 3))

// function array49 (a, n){
//     let arr =[]
//     for ( let i =0 ; i<n ; i++ ){
//         arr.push(...a)
//     }
//     return arr

// }

// console.log(array49([1], 3))
// console.log(array49([1, 2], 2))
// console.log(array49([9, 8], 3))


//function array49 (a, b){
//    
//    return  [].concat(a,b)
//    
//
//}
//
//console.log(array49([1], [2]))
//console.log(array49([1, 2], [3]))
//console.log(array49([9, 8], [9, 8, 7]))





// const key = 'auto'

// const obj = {
//     name: 'Вася',

// }

// obj.age = 20
// obj[key] = 'Lada'

// delete obj.age

// obj.name = 'Вадим'

// console.log(obj)

// const arrKeys = Object.keys(obj) // создаем массив ключейй
// const arrValues = Object.values(obj) // создаем массив значений
// const arrEntries = Object.entries(obj) // создаем массив пар [[key, value], ... ]

// console.log({arrKeys, arrValues, arrEntries});

//_________________________

// function obj1(s, n){
//     const obj = {
//         name : s,
//         age : n
//     }
//     return obj

// }


// console.log(obj1('Вася', 20));
// console.log(obj1('Петя', 30));

// function obj2(a){
//     a.name = 'Вася'
//     return a
// }

// console.log(obj2({age: 20}));
// console.log(obj2({name: 'Петя', age: 30}));
// console.log(obj2({}));

// function obj3 (a){
    
    
//     return [a.name , a.age]
// }

// console.log(obj3({age: 20}));
// console.log(obj3({name: 'Петя', age: 30}));
// console.log(obj3({}));


// function obj4 (a, s ){
//     a[s]= s.toUpperCase()


//     return a

// }
// console.log(obj4({age: 20}, 'name'));
// console.log(obj4({name: 'Вася', age: 30}, 'age'));
// console.log(obj4({}, '0'));

// function obj5 (a, s){
//     delete a.name
//     delete a[s]
//     return a
// }
// console.log(obj5({age: 20}, 'age'));
// console.log(obj5({name: 'Петя', age: 30}, 'age'));
// console.log(obj5({age: 20}, 'name'));


// function obj6(a){
    
//     if ( a.a> a.b){
//         a.a+=a.b
//     } else {
//         a.a +=1 
//         a.b+=1
//     }
//     return a 
// }
// console.log(obj6({a: 20, b: 10}))
// console.log(obj6({a: 20, b: 30}))
// console.log(obj6({a: 20, b: 20}))


// function obj7 (a) {
//     const arrKeys = Object.keys(a)
//     return arrKeys
// }

// console.log(obj7({a: 20, b: 10, 0: 30}));
// console.log(obj7({name: 'Вася', age: 20}));
// console.log(obj7({}));


// function obj8 (a) {
//     const values = Object.values(a)
//     return values
// }

// console.log(obj8({a: 20, b: 10, 0: 30}));
// console.log(obj8({name: 'Вася', age: 20}));
// console.log(obj8({}));

// function obj9 (a, keys){
//    return  keys.map((item) => item in a)


// }
// console.log(obj9({a: 20, b: 10, 0: 30}, ['b', 'x', '0']));
// console.log(obj9({name: 'Вася', age: 20}, ['age', 'age', 'name']));
// console.log(obj9({}, ['a', 'a', 'a']));

// function obj10 (n) {
    
//     let obj = {} 
//     for (let i = 0 ; i< n ; i++ ){
//         obj[i] = n 
//     }
//     return obj

// }

// console.log(obj10(0));
// console.log(obj10(1));
// console.log(obj10(3));

// function obj13 (s){
    
//     const arrEntries = Object.values(s)
//     return arrEntries
// }

// console.log(obj13(''))
// console.log(obj13('abc'))
// console.log(obj13('test'))

// function obj14(s){
//     const obj = {}
//     const arr = s.split('')
//     arr.forEach(item => obj[item] = 0)
//     arr.forEach(item => obj[item]++)
//     return obj

// }  
    
    

// console.log(obj14(''))
// console.log(obj14('abc'))
// console.log(obj14('test'))


// function obj15 (a, d){
//     return a.map((item)=> d[item]!== undefined ? d[item] : item)
// }


// console.log(obj15(['t', 'e', 's', 't'], {'t': 'a', 'e': 'b'}));
// console.log(obj15(['a', 'a', 'a'], {'a': 'b', 'b': 'a'}));
// console.log(obj15(['t', 'e', 's', 't'], {'x': 't'}));

// function obj16(d){
  
// //   const obj = {}
// // //   Object.entries(d).forEach((item,index) => obj [item[1]] = item[0]);
     
// //    return obj

// return Object.fromEntries(Object.entries(d).map((item)=> item.reverse(d)))

// }
// console.log(obj16({a: 'x', b: 'y', c: 'z'}));
// console.log(obj16({a: 'a', b: 'b', c: 'c'}));
// console.log(obj16({a: 'a', b: 'a', c: 'a'}));


// function obj17(a){

//     const obj = {}
//     for( let i = 0 ; i < a.length ; i+=2){
//         obj[a[i]] = a[i + 1]
    
//     }
//     return obj
// }

// console.log(obj17(['a', 'b']));
// console.log(obj17(['a', 'a', 'b', 'b']));
// console.log(obj17(['a', 'b', 'a', 'b']));

// function obj18(a){
//     const arr = Object.values(a)
//     const max = Math.max(...arr)
//     const sum = arr.reduce((acc,item ) => acc+item )

//     return [max , sum]
// }

// console.log(obj18({a: 5, b: 7, c: 3}));
// console.log(obj18({a: -3, b: -5, c: -1}));
// console.log(obj18({a: 10, a: 20, a: -3}));

// function obj19 (a){
//     const arr = Object.entries(a)
//     arr.sort((min,max) => max[1] - min[1] )
//     return arr[0][0]

// }

// console.log(obj19({a: 5, b: 7, c: 3}));
// console.log(obj19({a: -3, b: -5, c: -1}));
// console.log(obj19({a: 10, b: 20, b: 10}));


// function obj20 (a){
    
//    return Object.fromEntries(a)

// }

// console.log(obj20([['key1', 'value1'], ['key2', 'value2']]));
// console.log(obj20([['a', 'b'], ['c', 'd']]));
// console.log(obj20([['a', 'b'], ['a', 'c'], ['a', 'd']]));

// function obj21 (a , b){

//     const obj = {}
//     for (i = 0 ; i< a.length ; i ++ ){
//         obj[a[i]]= b[i]
//     }
//     return obj
//  }
 
//  console.log(obj21(['key1', 'key2'], ['value1', 'value2']));
//  console.log(obj21(['a', 'b'], ['c', 'd']));
//  console.log(obj21(['a', 'a', 'a'], ['b', 'c', 'd']));


// function obj21(a){
//   return Object.fromEntries(a.map((item) => Object.values(item)))


// }

// console.log(obj21([{name: 'key1', value: 'value1'}, {name: 'key2', value: 'value2'}]));
// console.log(obj21([{name: 'a', value: 'b'}, {name: 'c', value: 'd'}]));
// console.log(obj21([{name: 'a', value: 'b'}, {name: 'a', value: 'c'}]));


// function obj23(a){
//   const arr =  Object.entries(a)
//     return arr.flat(Infinity)
// }

// console.log(obj23({key1: 'value1', key2: 'value2'}));
// console.log(obj23({a: 'b', c: 'd'}));
// console.log(obj23({a: 'b', a: 'c'}));