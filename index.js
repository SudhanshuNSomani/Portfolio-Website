let myName = document.querySelector('.heading h1');
let aboutME = document.querySelector('#aboutME');
let myCursor = document.querySelector('#cursor');
let doggo = document.querySelector('#doggo');


const changes = ()=>{
    let value = window.scrollY;
            
    if(value>10 &&value<300){
                
        myName.style.opacity = value/10;
        myName.style.fontSize = value/100 + 4.9 + 'rem';
    }
    if(value>300 && value<550){
        aboutME.style.left = value-250 + 'px';
    }
}


let widthMatch = window.matchMedia("(min-width: 820px)");


if(widthMatch.matches){
    window.addEventListener('scroll',changes );
    console.log("listner added");
}


widthMatch.addEventListener('change', (mm)=> {
    if(mm.matches){
        window.addEventListener('scroll',changes );
        console.log("listner added");
    }
    else{
       
        window.removeEventListener('scroll',changes );
        console.log("listner removed");
    }
    
});

// cursor
window.addEventListener("mousemove",(dets)=>{
    myCursor.style.left = dets.x + "px";
    myCursor.style.top = dets.y + "px";
})


let showCursor = false;
doggo.addEventListener("click" , ()=>{
    
    showCursor = !showCursor;
    if(showCursor){
        myCursor.style.display = "block";
        myCursor.style.scale = "1";

    }
    else{
        myCursor.style.display = "none";
    }

})

window.addEventListener("dblclick" , ()=>{
    showCursor = !showCursor;
    if(!showCursor){
        myCursor.style.display = "none";
        myCursor.style.scale = "1";
    }
    else{
        myCursor.style.display = "block";
        myCursor.style.scale = "1";

    }
})


