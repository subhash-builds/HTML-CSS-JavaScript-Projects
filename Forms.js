var arr=[];
 let index=0;


var gender_checked=()=>{
    var genderList=document.getElementsByName("gender");
    for(let gen of genderList){
        if(gen.checked) return gen.value;
    }
    return null;
    
}


function objectCreate(){
    var user_name=document.getElementById("user_name").value;
    var password=document.getElementById("password_input").value;
    var emailid=document.getElementById("emailid").value;
    var age=document.getElementById("age").value;
var obj={
    
        username_:user_name,
        user_password:password,
        user_emailid:emailid,
        user_age:age,
        gender:gender_checked()
        
    }
        
    
    arr[index++]=obj;
    console.log(arr);
}
