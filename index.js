
function total(inputId1, inputId2, inputId3){
    const inputFieldId1 = document.getElementById(inputId1);
    const inputFieldId1Value = inputFieldId1.value;
    const inputFieldId1Convart = parseFloat(inputFieldId1Value);
    if(inputFieldId1Convart < 0){
        alert('Not allow nagetive number');
        return;
    }
    // console.log(inputFieldId1Convart);
    inputFieldId1.value = "";
    const inputFieldId2 = document.getElementById(inputId2);
    const inputFieldId2Value = inputFieldId2.value;
    const inputFieldId2Convart = parseFloat(inputFieldId2Value);
    if(inputFieldId2Convart < 0){
        alert('Not allow nagetive number');
        return;
    }
    // console.log(inputFieldId2Convart);
    inputFieldId2.value = "";

    const inputFieldId3 = document.getElementById(inputId3);
    const inputFieldId3Value = inputFieldId3.value;
    const inputFieldId3Convart = parseFloat(inputFieldId3Value);
    if(inputFieldId3Convart < 0){
        alert('Not allow nagetive number');
        return;
    }
    // console.log(inputFieldId3Convart);
    inputFieldId3.value = "";
    return (inputFieldId1Convart + inputFieldId2Convart + inputFieldId3Convart).toFixed('2');
}

function htmlInnerTextToNumber(id){
    const totalMoney = document.getElementById(id);
    const totalMoneyInnerText = totalMoney.innerText;
    const totalMoneyConvart = parseInt(totalMoneyInnerText);
    return totalMoneyConvart;
}

function getIputValueToNumber(id){
    const inputId = document.getElementById(id);
    const getInputValue = inputId.value;
    const convartInputValue = parseInt(getInputValue);
    inputId.value = "";
    return convartInputValue;
}



function setInnerText(innerTextId, setvalue){
    const getInnerText = document.getElementById(innerTextId);
    getInnerText.innerText = setvalue;

}

function discount(price, discount) {
    var numVal1 = price;
    var numVal2 = discount / 100;
    var totalValue = numVal1 - (numVal1 * numVal2);
    
    return totalValue;
}




document.getElementById('submit').addEventListener('click', function(){

   const totalCost =  total('food', 'rent', 'clothes');

   const htmlTextConvart = htmlInnerTextToNumber('myCash');

   const discountInput = getIputValueToNumber('discount');
   
   if(discountInput<0){
    alert("somethig rong");
    return;
   }else if(discountInput >100){
    alert("Please set discount 100%");
    return;
   }

   const discountMoney = discount(htmlTextConvart, discountInput);

   const saveMoney = htmlTextConvart - discountMoney;

//   console.log(discountMoney);

    if(isNaN(totalCost)){
        alert('fill up field');
    }else{

        if(totalCost > htmlTextConvart){
            alert("Add some money");
        }else{
            if(isNaN(discountInput)){
                confirm("Set if there is a discount.");
            }else{
                const getHtmlId = document.getElementById('total');
                getHtmlId.innerText = totalCost;
                const minusMyMoney = (htmlTextConvart - saveMoney) - totalCost;
                setInnerText('myCash', minusMyMoney);
                setInnerText('discountHtml', saveMoney);
            }
            
        }
       
    }

});



document.getElementById('moneyAdd').addEventListener('click', function(){
    const inputValue = getIputValueToNumber('add-money');
    const myTotalCash = htmlInnerTextToNumber('myCash');
   
        if(isNaN(inputValue)){
            alert('Please type your amount');
        }else{
            const myTotalMoney = inputValue + myTotalCash;
            setInnerText('myCash', myTotalMoney);
        }
    
   

    // console.log(inputValue + myTotalCash);

});