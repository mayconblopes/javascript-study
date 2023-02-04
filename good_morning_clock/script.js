function Load(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('picture')
    
    let hr = document.querySelector('#hr')
    let mn = document.querySelector('#mn')
    let sc = document.querySelector('#sc')
    
    setInterval(() => {

        let data = new Date()
        let hours = data.getHours() * 30
        let minutes = data.getMinutes() * 6
        let seconds = data.getSeconds() * 6
    
        hr.style.transform = `rotateZ(${hours+(minutes/12)}deg)`
        mn.style.transform = `rotateZ(${minutes}deg)`
        sc.style.transform = `rotateZ(${seconds}deg)`

        hours = hours / 30
        minutes = minutes / 6 < 10 ? '0' + minutes / 6 : minutes / 6
        seconds = seconds / 6 < 10 ? '0' + seconds / 6 : seconds / 6

        msg.innerHTML = `<p>${hours}:${minutes}:${seconds}</p>`
        function setup(bgcolor, fontcolor) {
            document.body.style.background = bgcolor
            document.getElementById('title').style.color = fontcolor //change title text color to black
            document.getElementById('footer').style.color = fontcolor // change footer text color to black
    
        }
        
        if (hours >= 0 && hours < 12) {
            setup(bgcolor='#e0e0e0' ,fontcolor='#000')
            document.getElementById('title').innerText = 'Good morning!'
    
        } else if (hours >= 12 && hours < 18) {
            setup(bgcolor='#828e82' ,fontcolor='#fff')
            document.getElementById('title').innerText = 'Good afternoon!'
        } else {
            setup(bgcolor='#3a606e' ,fontcolor='#fff')
            document.getElementById('title').innerText = 'Good night!'
        }

    })

    changeWallpaperButton = document.getElementById('new-wallpaper')
    changeWallpaperButton.onclick = () => {
        let randomId = parseInt(Math.random() * 201)
        let url = `https://picsum.photos/id/${randomId}/300`
       document.getElementById('clock').style.backgroundImage = `url(${url})`;
    }





}