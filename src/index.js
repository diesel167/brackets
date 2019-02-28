module.exports = function check(str, bracketsConfig) {

    //bracketsConfig = [['(', ')'], ['[', ']']];
    //str='((()))()';

    let stack=[];
    let foundInArr=false;
    while(true){
        let firstSymbol='';
        if(str.length!==0){
            firstSymbol = str[0];
        }




        for(let i=0;i<bracketsConfig.length;i++){
            if(bracketsConfig[i].indexOf(firstSymbol)===0){

                //if || case
                if(bracketsConfig[i][0]===bracketsConfig[i][1]&&stack[stack.length - 1]===bracketsConfig[i][0]){
                    stack.pop(); //delete close bracket
                    str=str.slice(1,str.length); //delete first symbol
                    foundInArr=true;
                }
                else{
                    stack.push(firstSymbol); //add open bracket
                    str=str.slice(1,str.length); //delete first symbol
                    foundInArr=true;
                }
            }

            else if(bracketsConfig[i].indexOf(firstSymbol)===1){


                //if stack already empty
                if(stack.length===0){
                    return false;
                }

                if(stack[stack.length - 1]===bracketsConfig[i][0]){
                    stack.pop(); //delete close bracket
                    str=str.slice(1,str.length); //delete first symbol
                    foundInArr=true;
                }
                //if wrong sequence
                else{
                    return false;
                }
            }

        }
        //console.log(stack);
        //console.log(str);
        if(foundInArr===false){
            return false;   //symbol not in the bracketsConfig
        }
        foundInArr=false; //reset to default

        //console.log('str='+str);
        //console.log('stack='+stack);
        if(str.length===0&&stack.length===0){
            return true;
        }

        if((str.length===0&&stack.length!==0)){
            return false;
        }
    }
};
