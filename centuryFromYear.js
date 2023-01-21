function solution(year) {
    let century;
    
        if (year <= 100) century = 1;
        else if (year % 100 == 0) century = year/100;
        else century = year/100 + 1;
        
        century = parseInt(century);
        
    return century;
    }