let submit = document.getElementById("submit"),
    input = document.getElementById("infinite"),
    listener = document.getElementById("listener"),
    divide = 0,
    counter = 0,
    add = 0,
    multiply = 0,
    minus = 0,
    infiniteArray = [],
    tempArray = [],
    segments = [];
function listenToInput()
{
    input.addEventListener('keypress', progressiveCalc );
    submit.addEventListener('click', function ( event ) {
        event.preventDefault();
        passiveCalc();
    })
}
function progressiveCalc( event )
{
    /*if( !isNaN(parseInt(event.key))) infiniteArray.push( event.key );
    if ( event.key === '/') {
        for(let i = 0; i < infiniteArray.length; i++ )
        {
            tempArray.push( infiniteArray[i] );
        }
        //infiniteArray.pop();
    }*/
}

function filterNum( num )
{

}

function Segment( num ) {
    console.log(num);
    this.number = num;

}

function makeOneString( array ) { let number = ""; for (let i = 0; i < array.length; i++){ number += array[i]; } return number; }

function passiveCalc()
{
    if ( counter !== 0 && divide !== 0 ) {
        console.log(divide);
     segments.push( divide / parseFloat( input.value )); infiniteArray.pop(); counter = 0;
    }

    if ( counter !== 0 && add !== 0 ) segments.push( add + parseFloat( input.value )); infiniteArray.pop(); counter = 0;
    if ( counter !== 0 && multiply !== 0 ) segments.push( multiply * parseFloat( input.value )); infiniteArray.pop(); counter = 0;
    if ( counter !== 0 && minus !== 0 ) segments.push( minus - parseFloat( input.value )); infiniteArray.pop(); counter = 0;

    if(!isNaN(parseFloat(input.value))) infiniteArray.push( parseFloat(input.value));

    if( input.value === "/") { divide = parseFloat(makeOneString(infiniteArray)); counter++ }

    if( input.value === "+") { add = parseFloat(makeOneString(infiniteArray)); counter++ }

    if( input.value === "-") { minus = parseFloat(makeOneString(infiniteArray)); counter++ }

    if( input.value === "*") { multiply = parseFloat(makeOneString(infiniteArray)); counter++ }

    listener.textContent = makeOneString(infiniteArray);
    listener.textContent = makeOneString(segments);
}


listenToInput();



function calculate()
{
    let counter=0,
        proCounter = 0;
    for( let i=0;i<input.value.length;i++)
    {
        if(!isNaN(parseInt(input.value[i])))infiniteArray.push( input.value[i]);
        if( input.value[i]==="/" && counter>0){
            while( counter > 0){
                tempArray.push(infiniteArray[i-counter]);
                counter--;
                proCounter++;
            }
            infiniteArray.push(parseInt( makeOneString( tempArray ) ) / parseInt( input.value[i+1] ));
            segments.push( new Segment( parseInt( makeOneString( tempArray ) ) / parseInt( input.value[i+1] )));
            input.value = input.value.substr(input.value[i]);
            if( proCounter > 0 ){
                while (proCounter > 0){
                    infiniteArray.splice(i-proCounter);
                    proCounter--;
                }
            }
        }
        if( input.value[i]==="+" && counter>0){
            while( counter > 0){
                tempArray.push(infiniteArray[i-counter]);
                counter--;
                proCounter++;
            }
            infiniteArray.push(parseInt( makeOneString( tempArray ) ) / parseInt( input.value[i+1] ));
            segments.push( new Segment( parseInt( makeOneString( tempArray ) ) / parseInt( input.value[i+1] )));
            input.value = input.value.substr(input.value[i]);
            if( proCounter > 0 ){
                while (proCounter > 0){
                    infiniteArray.splice(i-proCounter);
                    proCounter--;
                }
            }
        }
        if( input.value[i]==="*" && counter>0){
            while( counter > 0){
                tempArray.push(infiniteArray[i-counter]);
                counter--;
                proCounter++;
            }
            infiniteArray.push(parseInt( makeOneString( tempArray ) ) / parseInt( input.value[i+1] ));
            segments.push( new Segment( parseInt( makeOneString( tempArray ) ) / parseInt( input.value[i+1] )));
            input.value = input.value.substr(input.value[i]);
            if( proCounter > 0 ){
                while (proCounter > 0){
                    infiniteArray.splice(i-proCounter);
                    proCounter--;
                }
            }
        }
        if( input.value[i]==="-" && counter>0){
            while( counter > 0){
                tempArray.push(infiniteArray[i-counter]);
                counter--;
                proCounter++;
            }
            infiniteArray.push(parseInt( makeOneString( tempArray ) ) / parseInt( input.value[i+1] ));
            segments.push( new Segment( parseInt( makeOneString( tempArray ) ) / parseInt( input.value[i+1] )));
            input.value = input.value.substr(input.value[i]);
            if( proCounter > 0 ){
                while (proCounter > 0){
                    infiniteArray.splice(i-proCounter);
                    proCounter--;
                }
            }
        }

        counter++;
    }
    console.log("calced");
    console.log( tempArray );
    console.log( infiniteArray );
}