var num = document.querySelector('input#fnum')
var list = document.querySelector('select#flist')
var res = document.querySelector('div#res')
var values = []

function isNumber(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inList(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function add() {
    if(isNumber(num.value) && !inList(num.value, values)) {
       values.push(Number(num.value))
       let item = document.createElement('option')
       item.text = `Value ${num.value} added.`
       list.appendChild(item)
       res.innerHTML = ''
    } else {
        alert('Invalid value or already found in the list.')
    }

    num.value = ''
    num.focus()
}

function done() {
    if(values.length == 0) {
        alert('Add values before you finish.')
    } else {
        let tot = values.length
        let highest = Math.max(...values)
        let lowest = Math.min(...values)
        let sum = values.reduce((acc, curr) => acc + curr, 0)
        let average = sum / tot

        res.innerHTML = ''
        res.innerHTML += `<p>In total, we have ${tot} registered numbers.</p>`
        res.innerHTML += `<p>The highest number added was ${highest}</p>`
        res.innerHTML += `<p>The lowest number added was ${lowest}</p>`
        res.innerHTML += `<p>The total sum is ${sum}</p>`
        res.innerHTML += `<p>The average of the added values is ${average}</p>`
    }
}
