//Palindrome

const palindrome = (str) => {
    let rta = str.toLowerCase().split('').reverse().join('');
    return str === rta;
}

console.log(palindrome('eyes'));