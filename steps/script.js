let start = document.getElementById('start')
let end = document.getElementById('end')
let step = document.getElementById('step')
let result = document.getElementById('result')

let calcButton = document.getElementById('calc-button')

calcButton.onclick = () => {

    let tmp_result = ''
    result.innerText = ''
    
    if (!Number(start.value) || !Number(end.value) || !Number(step.value)) {
        alert("Only numbers, please")
    } else {
        for (var i=parseInt(start.value); i <= parseInt(end.value); i+=parseInt(step.value)) {
            let sep = parseInt(end.value) > i ? '\u{21e2}' : ''
            tmp_result += i + sep
        }
    }
    // result.innerText = result
    tmp_result = tmp_result[tmp_result.length-1] === '\u{21e2}' ? tmp_result.slice(0,-2) : tmp_result
    result.innerHTML = tmp_result + ' \u{1f3c1}'

}