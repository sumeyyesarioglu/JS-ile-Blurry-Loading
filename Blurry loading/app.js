const bg = document.querySelector('.bg')
const loadText = document.querySelector('.loading-text')

let load = 0

let int=  setInterval(blurring,30);//30 saniyede bir yazılmasını sağla


function blurring () {
    load++
    if(load>99) {
        clearInterval(int)//temiz bir sekilde yazılımı sağlıyor 100'e kadar
    }else if(load>50){
        clearInterval(int)
    }

    loadText.innerText= `${load}%`
    loadText.style.opacity =scale(load, 0, 100, 1, 0 )//Görünmezden resmi netleştirmeye doğru gittiğimiz için 1, 0 yaptık tam tersi olsaydı eğer 0 ve 1 olacaktı. 
    bg.style.filter= `blur(${scale(load, 0 ,100, 30, 0)}px)` //Bununlada fotoğrafı bulanıktan nete doğru gitmesini sağladık
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}