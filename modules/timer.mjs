const timer = () => {
    const timer = document.querySelector('.header')
    let seconds = 57
    let minutes = 59
    let hours = 47
    setInterval(() => {
        seconds--
        if(seconds == 0){
            seconds = 60;
            minutes--
        }
        if(minutes == 0){
            minutes = 59;
            hours--
        }
        timer.innerText = `Время до окончания акции: ${hours}:${minutes}:${seconds}`
    }, 1000)
}
export default timer