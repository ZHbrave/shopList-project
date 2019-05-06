class AddShop{
    constructor(){
        this.inputname=document.querySelector(".inputName");
        this.inputPrice=document.querySelector(".inputPrice");
        this.inputNum=document.querySelector(".inputNum");
        this.addBtn=document.querySelector("#btn-shop-add");
        this.init();
    }
    init(){
        this.addBtn.onclick=()=>{
            let name=this.inputname.value,
            price=this.inputPrice.value,
            num=this.inputNum.value;
            if(name===""||price===""||num===""){
                alert("输入不能为空");
                return;
            }
            tools.ajaxGetPromise("API/add.php",{name,price,num}).then(data=>{
                if(data.res_code===1){
                    alert(data.res_message);
                    this.inputname.value=this.inputPrice.value=this.inputNum=""
                    $('.addModel').modal('hide');
                    Getshop.init();
                }
            })
        }
    }
}
new AddShop();