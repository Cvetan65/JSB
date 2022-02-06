function teamMemb(girls, boys) {
    if(girls&&boys < 10){
        console.log(`0${girls} girls, 0${boys} boys`)
    }else if (girls&&boys >= 10){
        console.log(`${girls} girls, ${boys} boys`)
    }
}

teamMemb(7,4)