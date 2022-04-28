const ABC = (value) => {
    const array = [];
    for (let i = value; i < 123; i++) {
        array.push(String.fromCharCode(i));
    }
    if (value < 123) {
        console.log(array.join(' '));
        ABC(value + 1);
    }
}

const ABC2 = () => {
    let x = 0;
    for (let i = 0; i < 26; i++) {
        for (let j = x; j < 26; j++) {
            let value = 65 + j;
            let character = String.fromCharCode(value);
            console.log(character);
        }
        x++;
        console.log('');
    }
}

// ABC(97);
ABC2();