const a = String.fromCharCode("97")

const ABC = (value) => {
  const initial = value;
  const array = []
  for(i = initial; i < 124; i++){
    array.push(String.fromCharCode(i));
  }
  console.log(array);
  ABC(value+1);
}