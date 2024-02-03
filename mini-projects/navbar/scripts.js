/**
 * Scripts for Responsive Navbar
 */

const mobileMenu = (()=>{
    const mobileMenuBox = document.querySelector('#mobile-menu')
    const openMenu = document.getElementById('mobile-menu-open')
    const closeMenu = document.getElementById('mobile-menu-close')

    openMenu.addEventListener('click',()=>{
        mobileMenuBox.classList.add('active')
    })
    closeMenu.addEventListener('click',()=>{
        mobileMenuBox.classList.remove('active')
    })
})();