function forLoop( array ) {
  for ( let i = 0; i < 25; i++ ) {
    if ( i === 1 ){
      array.push("I am 1 strange loop.");
    } else {
      const string = `I am #{i} strange loops.`;
        array.push(string);
    }
  }
  return array;
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
  } while ( array.length > 0 || maybeTrue() );
  return array
}
