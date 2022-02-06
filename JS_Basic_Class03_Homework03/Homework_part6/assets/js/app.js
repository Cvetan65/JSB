let youHave = 1000;
let youWant = parseFloat(prompt('Еnter the amount of $ you want to withdraw from your account'));
let remaining = youHave - youWant;



function cashReqest() {
    if(youHave < youWant) {
        console.log('You do not have enough funds in your account');
    }else{
        console.log(`You withdrew $${youWant} from your account`)
        console.log(`You still have $${remaining} left in your account`)
    }
}

cashReqest()