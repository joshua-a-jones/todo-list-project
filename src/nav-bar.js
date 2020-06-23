export function toggleMenu() {
    
    if (document.getElementById('menu').style.visibility === 'hidden') {
        document.getElementById('menu').style.visibility = 'visible';
        document.getElementById('menu').style.width = '16em';
    } else {
        document.getElementById('menu').style.visibility = 'hidden';
        document.getElementById('menu').style.width = '0';

    }
    
    
}