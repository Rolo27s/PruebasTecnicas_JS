function solution(inputString) {
    /* I will use Split, Reverse and Join */
    let rev = inputString.split('');
    rev = rev.reverse();
    rev = rev.join('');
    
    if (rev == inputString) return true;
    else return false;
}
