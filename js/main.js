document.querySelector('#getAnswer').addEventListener('click', showAnswer)

function showAnswer() {
    document.querySelector('#answer').classList.toggle('hidden') 
}


function getFetch(){
    fetch('http://jservice.io/api/random')
        .then(res => res.json())
        .then(data => {
            console.log(data[0])
            let question = (data[0].question)
            let answer = (data[0].answer)
            let category = (data[0].category.title)
            let value = (data[0].value)
            document.querySelector('#question').innerText = question
            document.querySelector('#answer').innerText = answer
            document.querySelector('#category').innerText = category
            document.querySelector('#value').innerText = value
        })
        .catch(err => {
            console.log(`error ${err}`)
        })
}

getFetch()

document.querySelector('#newQuestion').addEventListener('click', reload)

function reload() {
    location.reload();
    return false;
}
