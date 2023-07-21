const navigation= document.querySelector('.navigation');
const menuToggle= document.querySelector('.menuToggle');
menuToggle.onclick= function(){
    navigation.classList.toggle('open');
}
const list = document.querySelectorAll('.list')
function activarLink(){
    list.forEach((item)=>
    item.classList.remove('active'))
    this.classList.add('active')
}
list.forEach((item)=>
item.addEventListener('click',activarLink))