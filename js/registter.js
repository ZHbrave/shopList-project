class Register{
    constructor(){
        this.inputUserName=document.querySelector("#inputUserName");
        this.inputPassword=document.querySelector("#inputPassword");
        this.btn=document.querySelector("#btn");
    }
    bindEvent(){
        this.btn.onclik=()=>{
            let username=this.inputUserName.value,
            password=this.inputPassword.value;

            tools.ajax("POST","..API/register.php",{username,password},data=>{
                if(data.res_code===1){
                   alert(data.res_message) 
                }else{
                    alert(data.res_message)
                }
            })

            return false;
        }
    }
}
new Register()