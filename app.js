window.onload = () => {
    main();
}

// main function
function main(){
    var get_btn = document.getElementById("get_btn");
    var root = document.getElementById("root");
    var screen = document.getElementById("screen");
    var copy_btn = document.getElementById("copy");

    get_btn.addEventListener("click", function(){
        var bgcolor =  generateRGBColor();

        root.style.backgroundColor = bgcolor;
        screen.value = bgcolor;
        console.log(bgcolor);
    })

    copy_btn.addEventListener("click", function(){
        navigator.clipboard.writeText(screen.value);
        alert(`${screen.value} is copied!!`);
    })
}

// RGB color function
function generateRGBColor(){
    var red = Math.floor(Math.random() * 255);
    var green = Math.floor(Math.random() * 255);
    var blue = Math.floor(Math.random() * 255);

    return `rgb(${red}, ${green}, ${blue})`
    // return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}

