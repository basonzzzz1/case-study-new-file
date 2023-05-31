
function cong(){
    var numbera = document.getElementById("math1").value;
    var numberb =document.getElementById("math2").value;
    var a =parseInt(numbera);
    var b=parseInt(numberb)
    var kq=a+b;
    document.getElementById("ketqua").innerHTML=(numbera+" + "+numberb+" = "+kq);
}
function tru(){
    var numbera =document.getElementById("math1").value;
    var numberb =document.getElementById("math2").value;
    var a =parseInt(numbera);
    var b =parseInt(numberb)
    var kq =a-b;
    document.getElementById("ketqua").innerHTML=(numbera+" - "+numberb+" = "+kq);
}
function nhan(){
    var numbera = document.getElementById("math1").value;
    var numberb = document.getElementById("math2").value;
    var a =parseInt(numbera);
    var b =parseInt(numberb);
    var kq =a*b;
    document.getElementById("ketqua").innerHTML=(numbera+" × "+numberb+" = "+kq);
}
function chia(){
    var numbera = document.getElementById("math1").value;
    var numberb = document.getElementById("math2").value;
    var a =parseInt(numbera);
    var b =parseInt(numberb);
    var kq =a/b;
    document.getElementById("ketqua").innerHTML=(numbera+" ÷ "+numberb+" = "+kq);
}
//======================================================================================================
let listArr = [];//tạo một mảng trống
let maxarr=0
let minarr =1000000000

function add() {
    let name = document.getElementById('name').value;//tạo một biến do người dùng nhập và thêm vào
    listArr.push(name);//khi người dung bấm add sẽ thực hiện push lên
    element();//gọi hàm element
}

function element() {
    let html = '';//tạo một chuỗi trống
    for (let i = 0; i < listArr.length; ++i) {//vòng lặp for từ 0 đến độ dài của mảng listarr
        html += `
            <th>${listArr[i]}</th>
            <td><button onclick="deleteArr(${i})">Delete</button></td>
      `;//khi người dùng bấm xong sẽ hiẹn lên sản phẩm, edit,delete sản phẩm
        if(listArr[i]>maxarr){
            maxarr=listArr[i];
        }
        if(listArr[i]<minarr){
            minarr=listArr[i];
        }
    }
    document.getElementById("max").innerHTML=maxarr+" là max";
    document.getElementById("min").innerHTML=minarr+" là min";
    document.getElementById('list').innerHTML = html;
    document.getElementById('name').value = '';
}

function deleteArr(index) {
    listArr.splice(index, 1);
    element();
}
// function showFormEdit(index) {
//     document.getElementById('form-edit').innerHTML = `
//       <h3>Form edit</h3>
//       <input type="text" placeholder="Edit number" id="name-edit">
//       <button onclick="edit(${index})">Save</button>
//     `;
//     let name = listProducts[index];
//     document.getElementById('name-edit').value = name;
// }
// function edit(index) {
//     let nameEdit = document.getElementById('name-edit').value;
//     listArr[index] = nameEdit;
//     document.getElementById('form-edit').innerHTML = ``;
//     element();
// }
//=================================================================================================
function prime() {
    var numberi = document.getElementById("prime").value;
    var number = parseInt(numberi);
    let count = 0;
    for(var i =2;i<number;i++){
        if(number%i==0){
            count = count+1
        }
    }
    if(count==0){
        document.getElementById("result").innerHTML=(number+" là số nguyên tố")
    }else{
        document.getElementById("result").innerHTML=(number+" không phải số nguyên tố")
    }
}
//===================================================================================================
function firstPrime(){
    let number1=document.getElementById("firstprime").value;
    let arr1=[]
    let number = parseInt(number1);
        let kt = 0;
        let ktSNT =0;
        for(let i =2;i<1000000;i++){
            if(ktSNT<=number) {
                for (let j = 2; j < i; j++) {
                    if (i % j == 0 ) {
                        kt = kt + 1;
                    }
                }
                if (kt == 0 ) {
                    arr1.push(i)
                    ktSNT = ktSNT + 1;
                }
                kt=0;
            }else{
                break;
            }
        }
        document.getElementById("result1").innerHTML=arr1
}
//=======================================================================================================
function perfect(number3){
    var count =0;
    for(var i =0;i<number3;i++){
        if(number3%i==0){
            count=count+i;
        }
    }
    if(count==number3){
        return count==number3;
    }
}
function perfectNumber(number4){
    var number5 = document.getElementById("perfect").value;
    number4=parseInt(number5)
    if(perfect(number4)){
        document.getElementById("perfect1").innerHTML=number4+" là số hoàn hảo"
    }else(
        document.getElementById("perfect1").innerHTML=number4+" không phải số hoàn hảo"
    )
}
//==========================================================================================================
function checkPerfectnumber(checknumber){
    var checknumber1 = document.getElementById("check2").value;
    checknumber=parseInt(checknumber1);
    var count2 =0;
    var arr4 =[]
    for(var i =0;i<100000;i++){
        if(perfect(i)){
            arr4.push(i);
            count2 = count2+1;
        }
        if(count2==checknumber){
            break;
        }
    }
    document.getElementById("check3").innerHTML=arr4
}
//=================================================================================================
function fibonacci(N) {
    var index = document.getElementById("fibonacci").value;
    N = parseInt(index);
    var a = 1;
    var b = 1;
    var c =1;
        for (var i = 0; i < N - 2; i++) {
            c = a + b;
            a = b;
            b = c;
        }
        document.getElementById("fibonacci1").innerHTML=c;
}
// ====================================================================================================
function armstrong(number) {
    let count = 0;
    let doDai = number.toString()
    let conLai = number;
    while (conLai > 0) {
        let soDu = conLai % 10;
        count += Math.pow(soDu, doDai.length);
        conLai = parseInt(conLai / 10);
    }
    if (count == number) {
        return count == number;
    }
}
function armstrong1(num){
    var num1=document.getElementById("double").value;
    num = parseInt(num1)
    if(armstrong(num)){
        document.getElementById("double2").innerHTML=num+" là số armstrong"
    }else{
        document.getElementById("double2").innerHTML=num+" không phải số armstrong"
    }
}
// =============================================================================================
function armstrong2(abc){
    let abc1 =document.getElementById("double3").value;
    abc = parseInt(abc1);
    var abc3 =[];
    for(var i =1;i<abc;i++){
        if(armstrong(i)){
            abc3.push(i);
        }
    }
    document.getElementById("double4").innerHTML=abc3
}
//==============================================================================================
// function fibonacci1(N) {
//     var index = prompt("")
//     N = parseInt(index);
//     var a = 1;
//     var b = 1;
//     var c =1;
//     for (var i = 0; i <= N; i++) {
//         c = a + b;
//         a = b;
//         b = c;
//         if(N==c){
//             return N==c
//         }
//     }
// }
// =============================================================================================
// let listArr1 = [];//tạo một mảng trống
//
// function add1() {
//     let name = document.getElementById('name').value;//tạo một biến do người dùng nhập và thêm vào
//     listArr1.push(name);//khi người dung bấm add sẽ thực hiện push lên
//     element();//gọi hàm display
// }
//
// function element1() {
//     let count =0;
//     let html = '';//tạo một chuỗi trống
//     for (let i = 0; i < listArr1.length; ++i) {//vòng lặp for từ 0 đến độ dài của mảng listarr
//         html += `
//             <td>${listArr1[i]}</td>
//             <td><button onclick="deleteArr1(${i})">Delete</button></td>
//       `;//khi người dùng bấm xong sẽ hiẹn lên sản phẩm, edit,delete sản phẩm
//     if(fibonacci1(listArr1[i])){
//       count += 1
//     }
//     }
//     if(count==listArr1.length){
//         document.getElementById("fibonacci2").innerHTML="la day fibonacci"
//     }else{
//         document.getElementById("fibonacci2").innerHTML="khong phai day fibonacci"
//     }
//     document.getElementById('list1').innerHTML = html;
//     document.getElementById('name1').value = '';
// }
//
// function deleteArr1(index) {
//     listArr1.splice(index, 1);
//     element();
// }