const dispaly = document.getElementById("display");
const input = document.getElementById("input");
const validateBtn = document.getElementById("verify-btn");
const clearBtn = document.getElementById("clear-btn");
const resetBtn = document.querySelector("#reset");

validateBtn.onclick = validate;
clearBtn.onclick = backspace;
resetBtn.onclick = resetAll;

function validate(){
    let phoneNumber = input.value;

    if(phoneNumber === "") {
        alert("Please insert a phone number")
    }else{
        let nigerian = /^(\+234[-\s]?|0[-\s]?)[789][01]\d{1}[-\s]?\d{3}[-\s]?\d{4}$/;

        let ukNumber = /^(\+44[-\s]?|0044[-\s]?|0[-\s]?)[7]\d{3}[-\s]?\d{6}$/;

        let ausNumber = /^(\+61[-\s]?|0[-\s]?)[23478][-\s]?\d{4}[-\s]?\d{4}$/

        if(nigerian.test(phoneNumber)){
            dispaly.textContent = `${phoneNumber} is a Nigerian Number`;
        }
        else if(ukNumber.test(phoneNumber)){
            dispaly.textContent = `${phoneNumber} is a UK Number`;
        }
        else if(ausNumber.test(phoneNumber)){
            dispaly.textContent = `${phoneNumber} is an Australian Number`;
        }
        else{
            dispaly.textContent = `${phoneNumber} is not a Nigerian / UK / Australian phone number`;
        }
    }

}

function backspace() {
    input.value = input.value.slice(0, -1);
}

function resetAll() {
    input.value = "";
    dispaly.textContent = "";
    
    setTimeout(() => {
        dispaly.textContent = "Reset done..."

        setTimeout(() => {
            dispaly.textContent = "";
        }, 2000);
    }, 1000);

   
}