function showCoordinates(e){
    // console.log("check");
    // console.log(e);
    let client_x = e.clientX;
    // console.log(client_x);
    let client_y = e.clientY;
    // console.log(client_y);

    let screen_x = e.screenX;
    // console.log(screen_x);
    let screen_y = e.screenY;
    // console.log(screen_y);

    let forCursorReact = document.getElementById('forCursorReact');
    let coordinates = `Client Coordinates:(${client_x},${client_y}) 
                        :: Screen Coordinates:(${screen_x},${screen_y})`;
    forCursorReact.innerHTML= coordinates;

    let changeMe = document.getElementById('changeMe');
    if(screen_x >=200 && screen_y >=200){
        changeMe.style.backgroundColor = 'green';
    }else{
        changeMe.style.backgroundColor='gainsboro';
    }
}