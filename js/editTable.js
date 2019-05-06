class editTable{
    constructor(tbody){
        this.tbody=document.querySelector(tbody);
        this.bindEvents()
    }
    bindEvents(){
        this.tbody.onclick=e=>{
            e||event;
            let target=e.target;
            let tr=target.parentNode.parentNode;
            let classList=Array.from(target.classList)
            if(classList.includes("btn-edit")){
                this.editBtnClick(tr)
            }else if(classList.includes("btn-del")){
                this.delBtnClick(tr)
            }else if(classList.includes("btn-ok")){
                this.okBtnClick
            }else{
                this.cancelBtnClick(tr)
            }
        }
    }
    editBtnClick(tr){
        Array.from(tr.querySelectorAll("span")).forEach(span => {
            span.nextElementSibling.value=span.innerHTML;
        })
        tr.classList.add("edit");
    }
    delBtnClick(tr){
        if(confirm("确定删除吗")){
            let id=tr.getAttribute("data-id")
            tools.ajaxGetPromise("API/delete.php",{id}).then(data=>{
                if(data.res_code===1){
                    alert(data.res_message);
                    Getshop.init();
                }else{
                    alert(data.res_message)
                }
            })
        }
    }
    okBtnClick(tr){
        let inputPrice=tr.querySelector(".inputPrice");
        let inputNum=tr.  querySelector("inputNum");
        let id=tr.getAttribute("data.id") ;
        let price=inputPrice.value;
        let num=inputNum.value;
        tools.ajaxGetPromise("API/ok.php",{id,price,num}).then(data=>{
            tr.classList.remove("edit")
            if(data.res_code===1){
                alert(data.res_message);
                inputPrice.nextElementSibling.innerHTML=inputPrice.value;
                inputNum.nextElementSibling.innerHTML=inputNum.value;
                }
            }

        )
    }
    cancelBtnClick (tr){
        tr.classList.remove("edit");
    }
}
new editTable("tbody")