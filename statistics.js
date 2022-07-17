


let divresult=document.getElementById('tablediv');
let table = document.createElement('table');
table.setAttribute('id','resulttable2');
table.setAttribute('class','data-main-table');

let tbody = document.createElement('tbody');
tbody.setAttribute('id' , 'resultbody2');

let arrFood = getFromLocal();



function showData(value){

    console.log(value.foodName);

    if (value == undefined) {
        return;
    }
    if (value.index== 0) {
     
        var element = document.getElementById("noData");
    element.parentNode.removeChild(element);

        let thead = document.createElement('thead');
        divresult.appendChild(thead);
        let tr = document.createElement('tr');
        divresult.appendChild(tr);


        let th1 = document.createElement('th');
        th1.setAttribute("class", "data-hr");
        th1.textContent = 'ID';
        tr.appendChild(th1);

        let th2 = document.createElement('th');
        th2.textContent = 'Name';
        th2.setAttribute("class", "data-hr");
        tr.appendChild(th2);

        let th3 = document.createElement('th');
        th3.textContent = 'Type';
        th3.setAttribute("class", "data-hr");
        tr.appendChild(th3);

        let th4 = document.createElement('th');
        th4.setAttribute("class", "data-hr");
        th4.textContent = 'Price';
        tr.appendChild(th4);    



        thead.appendChild(tr);
        table.appendChild(thead); 

        //End of Head

        
        let trbody = document.createElement('tr'); 
        trbody.setAttribute("class", "data-row");

        let td1 = document.createElement('td');
        td1.setAttribute("class", "data-td");
        td1.textContent = value.foodId;
        trbody.appendChild(td1);

        let td2 = document.createElement('td');
        td2.setAttribute("class", "data-td");
        td2.textContent = value.foodName;;
        trbody.appendChild(td2);

        let td3 = document.createElement('td');
        td3.setAttribute("class", "data-td");
        td3.textContent = value.type;;
        trbody.appendChild(td3);

        let td4 = document.createElement('td');
        td4.setAttribute("class", "data-td");
        td4.textContent = value.price;;
        trbody.appendChild(td4);

        //End of first Row

        
        tbody.appendChild(trbody);
        table.appendChild(tbody);

        divresult.appendChild(table);
    
    } else {
        
   

        //Add the reset of table 
       

        let trbody = document.createElement('tr'); 
        
        trbody.setAttribute("class", "data-row");

        let td1 = document.createElement('td');
        td1.setAttribute("class", "data-td");
        td1.textContent = value.foodId;
        trbody.appendChild(td1);

        let td2 = document.createElement('td');
        td2.setAttribute("class", "data-td");
        td2.textContent = value.foodName;;
        trbody.appendChild(td2);

        let td3 = document.createElement('td');
        td3.setAttribute("class", "data-td");
        td3.textContent = value.type;;
        trbody.appendChild(td3);

        let td4 = document.createElement('td');
        td4.setAttribute("class", "data-td");
        td4.textContent = value.price;;
        trbody.appendChild(td4);


        
        tbody.appendChild(trbody);
        table.appendChild(tbody);

        divresult.appendChild(table);
      

        }
        
    };




function getFromLocal(){    
    var getJson = localStorage.getItem('foodMenu')
    if(getJson)
        return JSON.parse(getJson);  
}


for (let index = 0; index < arrFood.length; index++) {
    showData(arrFood[index]);
    
}



 