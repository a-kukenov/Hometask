import timer from "./modules/timer.mjs"
const getData = url =>
    new Promise((resolve, reject) =>
        fetch(url)
            .then(response => response.json())
            .then(json => resolve(json))
            .catch(error => reject(error))
    )

const container = document.querySelector('.container')
timer()
getData('http://localhost:3000/ITEMS')
    .then(data => {
        data.forEach(element => {
            container.insertAdjacentHTML(
                `afterbegin`,
                `<div class="item">
                    <div class="img"></div>
                    <div class="desc">
                        <div class="name">${element.name}</div>
                        <div class="amount">Кол-во: ${element.amount}</div>
                        <div class="price">${element.cost}</div>
                        <div class="discount">${element.cost * 0.75}</div>
                    </div>
                </div>`
            )
            const img = document.querySelector('.img');
            img.style.backgroundImage = `url(${element.img})`
        })
    })
    .catch(error => console.error(error))