
let arrFood = [];

let divresult=document.getElementById('tablediv');
let table = document.createElement('table');
table.setAttribute('id','resulttable2');
table.setAttribute('class','data-main-table');
const form = document.getElementById('formid');
let tbody = document.createElement('tbody');
tbody.setAttribute('id' , 'resultbody2');


function Food(index,foodName,type,price){
    this.foodId = generateUniq();
    this.index = index;
    this.foodName = foodName;
    this.type = type;
    this.price =price;
    arrFood.push(this);
    console.log(arrFood[index].foodId);
}




Food.prototype.showResult =function(){

    if (this.index == 0) {
            
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
        td1.textContent = arrFood[this.index].foodId;;
        trbody.appendChild(td1);

        let td2 = document.createElement('td');
        td2.setAttribute("class", "data-td");
        td2.textContent = arrFood[this.index].foodName;;
        trbody.appendChild(td2);

        let td3 = document.createElement('td');
        td3.setAttribute("class", "data-td");
        td3.textContent = arrFood[this.index].type;;
        trbody.appendChild(td3);

        let td4 = document.createElement('td');
        td4.setAttribute("class", "data-td");
        td4.textContent = arrFood[this.index].price;;
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
        td1.textContent = arrFood[this.index].foodId;
        trbody.appendChild(td1);

        let td2 = document.createElement('td');
        td2.setAttribute("class", "data-td");
        td2.textContent = arrFood[this.index].foodName;;
        trbody.appendChild(td2);

        let td3 = document.createElement('td');
        td3.setAttribute("class", "data-td");
        td3.textContent = arrFood[this.index].type;;
        trbody.appendChild(td3);

        let td4 = document.createElement('td');
        td4.setAttribute("class", "data-td");
        td4.textContent = arrFood[this.index].price;;
        trbody.appendChild(td4);


        
        tbody.appendChild(trbody);
        table.appendChild(tbody);

        divresult.appendChild(table);
      

        }
    };


function generateUniq() {
  
        return arrFood.length + 4000;
    }



function getData() {
   
   
    //temp.showResult();
    saveToLocal(temp);
    
  }


  
let count = 0;
function getFromLocal(event){

    event.preventDefault();
    
    var getJson = localStorage.getItem('foodMenu')
    if(getJson){
        arrFood = JSON.parse(getJson);

        count = arrFood.length;
        const temp= new Food( count, event.target.idfoodName.value ,event.target.typeOfFood.value,event.target.price.value );
        setToLocal(temp);
    }else{

        const temp= new Food( count, event.target.idfoodName.value ,event.target.typeOfFood.value,event.target.price.value );
        setToLocal(temp);
    }
    
}
function setToLocal(temp){
  
    const stringV= JSON.stringify(arrFood);

    localStorage.setItem("foodMenu" , stringV);
    form.reset();
    itemAdded(temp.foodName);
}
function itemAdded(name) {
    Swal.fire(
        'congrat !!',
        'Your Item added successfully',
        'success'
    )
  }

  
  form.addEventListener('submit', getFromLocal);

  



 