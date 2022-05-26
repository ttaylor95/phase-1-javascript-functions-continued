// code your solution here

//implement a function called saturdayFun

function saturdayFun(activity = 'roller-skate') {
   return (`This Saturday, I want to ${activity}!`)
} 
saturdayFun();
saturdayFun('bathe my dog');

//implement a function called mondayWork

function mondayWork(workAct = 'go to the office') {

    return (`This Monday, I will ${workAct}.`)

}

mondayWork();


//implement a function called wrapAdjective

function wrapAdjective(sign = '*'){
    return function (name='special') {
        return `You are ${sign}${name}${sign}!`
    }
}