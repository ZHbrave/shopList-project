class Login{
    constructor(){
        this.inputUserName=document.querySelector("#inputUserName");
        this.inputPassword=document.querySelector("#inputPassword");
        this.btn=document.querySelector("#btn");
        this.checkbox=document.querySelector("#checkbox");
        this.bindEvents();
    }
    bindEvents(){
        this.btn.onclick=()=>{
            let username=this.inputUserName.value,
            password=this.inputPassword.value;

            tools.ajax("POST","../API/login.php",{username,password},data=>{
                if(data.res_code===1){
                    tools.cookie("username",username,{expires:7,path:"/"});
                }else{
                    tools.cookie("username",username,{path:"/"});
                }
                alert(data.res_message);
                window.location.href="../index.html";
            })

            return false
        }
    }
}
new Login();