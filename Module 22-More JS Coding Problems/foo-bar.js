// foo => 3 & bar => 5
function foo_bar() {
    for(let i = 1; i <= 50; i++){
        if((i % 3 == 0) && (i % 5 == 0)) console.log('foo-bar');
        else if(i % 3 == 0) console.log('foo');
        else if(i % 5 == 0) console.log('bar');
        else console.log(i);
    }
}
// driver code
foo_bar();