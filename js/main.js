let menu = document.getElementById('menu');
let navBar = document.querySelector('.nav-bar');
menu.addEventListener('click',()=>{
    menu.classList.toggle('active');
    navBar.classList.toggle('active');
});
let dropdown = document.querySelectorAll(".dropdown");
let arrDropdown = Array.from(dropdown);
let navBarList = document.querySelectorAll('.nav-bar > li');
let arrNavBarList = Array.from(navBarList);

arrNavBarList.forEach(function(ele){
    
    ele.onclick = function()
    {
        if(this.children[1] != undefined)
        {
            this.children[1].classList.toggle('active');
            arrDropdown.forEach(function(item){
                if(item.classList.contains('active')){
                    removeAll();
                    ele.children[1].classList.add('active');
                }
            });
        }else{
          removeAll();
        }
    }
});


function removeAll()
{
    arrNavBarList.forEach(function(ele){
        if(ele.children[1] != undefined)
        {
            ele.children[1].classList.remove('active');
        }
    });
}



