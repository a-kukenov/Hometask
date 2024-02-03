const timer = (data) => {
        const timer = document.querySelector('.header')
        let seconds = 3
        let minutes = 0
        let hours = 0
        const discountsArr = document.querySelectorAll('.discount');
        let discountArrCopy = [];
        discountsArr.forEach((elem) => {
            discountArrCopy.unshift(elem)
        })
        console.log(discountArrCopy)
        setInterval(() => {
            if(hours >= 0 && minutes >= 0 && seconds >= 0){
                if(seconds == 0 && minutes != 0){
                    seconds = 60;
                    minutes--
                }
                if(minutes == 0 && hours != 0){
                    minutes = 59;
                    hours--
                }
                if(seconds == 0 && minutes == 0 && hours == 0){
                    const pricesArr = document.querySelectorAll('.price');
                    pricesArr.forEach((elem) => {
                        elem.style.display = 'none'
                    })
                    discountArrCopy.forEach((elem, ind) => {
                        elem.innerText = data[ind].cost
                    })
                }
                else{
                    seconds--
                }
                timer.innerText = `Время до окончания акции: ${hours}:${minutes}:${seconds}`
            }
        }, 1000)
}
export default timer