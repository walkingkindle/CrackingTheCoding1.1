

function HasUniqueCharacters(text) {
    //edge case: uppercase and lowercase.
    realText = text.toLowerCase();
    for(i = 0; i < realText.length; i++){
        for(j = i + 1; j < realText.length; j++){
            if(realText[i] === realText[j]){
                return false;
            }
        }
    }
    return true;
}

console.log(HasUniqueCharacters("hello"));