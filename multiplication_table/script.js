let number = document.getElementById('number')
let calcButton = document.getElementById('calc-button')
let result = document.getElementById('result')


calcButton.onclick = () => {
    let tmp_calc = 0
    let tmp_result = []
    result.innerHTML = ''
    
    
    if (Number(number.value)){
        result.hidden = false
        result.disabled = false
        for(var i=0; i <= 10; i++) {
            tmp_calc = i * number.value
            tmp_result.push(`${number.value} x ${i} = ${tmp_calc}`)
        } 
    }   
    else {
        result.disabled = true
        alert('Enter a number, please')

    }
    
    tmp_result.forEach(calc => {
        result.innerHTML += '<option>' + calc + '</option>'
        
    })
    
}