let devName = document.getElementById('dev-name')
let avatar_placeholder = 'http://unicietec.unievangelica.edu.br/wp-content/uploads/2017/04/avatar-placeholder-300x250.png'
let avatar = ''

devName.onchange = () => {
    if (devName.value !== ''){
        avatar = `http://www.github.com/${devName.value}.png`
       
        
    } else {
        avatar = avatar_placeholder        
    }
    
    document.getElementById('avatar').style.backgroundImage = `url(${avatar})`
}