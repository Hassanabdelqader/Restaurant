//const { Chart } = require("chart.js");


let divresult=document.getElementById('tablediv');
let table = document.createElement('table');
table.setAttribute('id','resulttable2');
table.setAttribute('class','data-main-table');

let tbody = document.createElement('tbody');
tbody.setAttribute('id' , 'resultbody2');

let arrFood = getFromLocal();

let FruitandV = 0;
let Starchy = 0;
let Dairy = 0;
let Protein = 0;
let Fat = 0;

const label = [];
const data = [];
const foodName = [];
const foodPrice = [];

function fillcounter(arr) {
    arr.forEach(obj => {
       foodName.push(obj.foodName);
       foodPrice.push(obj.price);
        switch (obj.type) {
            case 'Starchy food':
                ++Starchy;
              break;
            case 'Protein':
                ++Protein;
              break;
            case 'Fruit and vegetables':
                FruitandV++;
              break;
            case 'Fat':
                Fat++;
              break;
            case 'Dairy':
                Dairy++;
              break;
          }

    });

if (FruitandV) {
    label.push('Fruit and vegetables');
    data.push(FruitandV);
}
if (Starchy) {
    label.push('Starchy food');
    data.push(Starchy);
}
if (Dairy) {
    label.push('Dairy');
    data.push(Dairy);
}
if (Protein) {
    label.push('Protein');
    data.push(Protein);
}
if (Fat) {
    label.push('Fat');
    data.push(Fat);
}


}



fillcounter(arrFood);


    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels:label ,

                datasets: [{
                    label: 'My First Dataset',
                    data: data,
                    backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(150, 155, 86)',
                    'rgb(200, 50, 10)',
                    'rgb(255, 205, 86)'
                    ],
                    hoverOffset: 30
                }]
        
        }, options: {
            responsive: false,
              onClick: function(evt, element) {
               // alert('test');
              }
        }
    });    

    




function showData(value){

   // console.log(value.foodName);

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



var ctx2 = document.getElementById('myChart2').getContext('2d');
const labels =foodName;
const data2 = {
  labels: labels,
  datasets: [{
    label: 'Food Prices',
    data: foodPrice,
    backgroundColor: [
      'blue'
    ],
    borderColor: [
      'blue'
    ],
    borderWidth: 1
  }]
};
const config = {
    type: 'bar',
    data: data2,
    options: {
        scales: {
            y: {
                beginAtZero: true,
                steps : 10,
                stepValue : 10 ,
                max: 40,
                ticks:{
                    stepSize : 10 
                } 
                }
        }
    },
  };

  const myChar2 = new Chart(ctx2,config);
