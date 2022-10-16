burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.nav-list')
rightnav = document.querySelector('.rightnav')


burger.addEventListener('click',()=>{
    rightnav.classlist.toggle('v-class')
    navlist.classlist.toggle('v-class')
    navbar.classlist.toggle(h-nav)
})
