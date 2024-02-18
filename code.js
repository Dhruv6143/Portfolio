const skills = document.querySelector('.p1');
const experience = document.querySelector('.p2');
const education = document.querySelector('.p3');

skills.addEventListener('click',()=>{
    opentab('skills');
   

})
experience.addEventListener('click',()=>{
    opentab('experience');


})
education.addEventListener('click',()=>{
    opentab('education');
    

})

const tablinks = document.getElementsByClassName('tab-links');
const tabcontents = document.getElementsByClassName('tab-contents');

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(let tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")

}

const clossbt = document.querySelector('.fa-xmark');
const menu = document.querySelector('.fa-bars')

clossbt.addEventListener('click',()=>{
    closemenu();
})
menu.addEventListener('click',()=>{
    openmenu();
})


var sidemenu = document.getElementById('sidemenu');

function openmenu(){
    sidemenu.style.right = "0"
}
function closemenu(){
    sidemenu.style.right = "-200px"
}

  
