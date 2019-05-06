class selectList{
    constructor(){
        this.tbody=document.querySelector("tbody");
        this.init()
    }
    init(){
        tools.ajaxGetPromise("API/select.php").then(data=>{
            // console.log(data)
            if(data.res_code===1){
                this.render(data.res_body.data);
            }else{
                alert(data.res_message)
            }
        })
    }

    render(list){
        // console.log(list);
        let html="";
        list.forEach((shop,index) => {
            html+=`<tr data-id="${shop.Id}">
            <td>${index+1}</td>
            <td>${shop.shopname}</td>
            <td>
            <span>${shop.price}</span>
            <input type="text" class="inputPrice">
            </td>
            <td>
            <span>${shop.number}</span>
            <input type="text" class="inputNum">
            </td>
            <td>
            <button type="button" class="btn btn-success btn-xs btn-edit">编辑</button>
            <button type="button" class="btn btn-danger btn-xs btn-del">删除</button>
            <button type="button" class="btn btn-primary btn-xs btn-ok">确定</button>
            <button type="button" class="btn btn-warning btn-xs btn-cancel">取消</button>
            </td>
            </tr>`
        });
        this.tbody.innerHTML=html
    }
}

let Getshop=new selectList()
