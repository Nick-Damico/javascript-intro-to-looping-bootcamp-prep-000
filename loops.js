
function forLoop( array ) {
  let string;
  for( let i = 0; i < 25; i++ ) {
    string = i === 0 ? "I am 1 strange loop." : `I am #{i} strange loops.`;
    array.push(string);
  }
  return array
}

function whileLoop( number ) {
  while( number > 0 ){
      console.log(--number);
  }
  return 'done'
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop( array ) {
  do {
    array.pop();
  } while ( array.length > 0 && maybeTrue() );
  return array
}
