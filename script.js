const daratan = document.getElementById('daratan')
const mountain1 = document.getElementById('mountain1')
const mountain2 = document.getElementById('mountain2')
const mountain3 = document.getElementById('mountain3')
const cloud = document.getElementById('cloud')
const textImg= document.getElementById('text-img')
const penari =[document.getElementById('penari1'),document.getElementById('penari2'),document.getElementById('penari3'),document.getElementById('penari4')]
// spiders---------------------------
const spiders = [document.getElementById('spider1'),document.getElementById('spider2'),document.getElementById('spider3'),document.getElementById('spider4'),document.getElementById('spider5'),document.getElementById('spider6'),document.getElementById('spider7')]
const line =[document.getElementById('line1'),document.getElementById('line2'),document.getElementById('line3'),document.getElementById('line4'),document.getElementById('line5'),document.getElementById('line6'),document.getElementById('line7')]
const textSpider = document.getElementById('text-spider')

let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll',()=>{
    let scrollValue = window.scrollY;
    // let topCloud = parseInt(cloud.style.top);
    // Hitung posisi baru cloud
    let newTop = 500 - scrollValue;
    let topmountain3 = 400 - scrollValue;
    let leftmountain3 = 500 - scrollValue;
    let leftmountain2 = 500 - scrollValue;
    let topmountain2 = 550 - scrollValue;
    let topmountain1 = 550 - scrollValue;
    let leftmountain1 = 550 - scrollValue;
    let topdaratan = 600 - scrollValue;
    let leftdaratan = 500 - scrollValue;
    let imgText = scrollValue-100;
    let topPenari = [scrollValue-200,scrollValue-250,scrollValue-300,scrollValue-350]
    let topSpider =[scrollValue-1600,scrollValue-1600,scrollValue-1600,scrollValue-1600,scrollValue-1600,scrollValue-1600,scrollValue-1600 ]
    let topLine =[scrollValue-1600,scrollValue-1600,scrollValue-1600,scrollValue-1600,scrollValue-1600,scrollValue-1600,scrollValue-1600 ]
    let topTextSpider = scrollValue-1600;
    

    // Jika posisi baru kurang dari 0, set ke 0
    if (newTop <= 0) {
        newTop = 0;
    }
    if (topmountain3 <= 0) {
        topmountain3 = 0;
    }
    if(leftmountain2<=0){
        leftmountain2=0
    }
    if (leftmountain3 <= 0) {
        leftmountain3 = 0;
    }
    if (topmountain2 <= 0) {
        topmountain2 = 0;
    }
    if (topmountain1 <= 0) {
        topmountain1 = 0;
    }
    if (leftmountain1 <= 0) {
        leftmountain1 = 0;
    }
    if(topdaratan<=0){
        topdaratan =0;
    }
    if(leftdaratan<=0){
        leftdaratan=0
    }

    if(imgText >=500){
        imgText = 500
        textImg.style.color ='white'
    }else{
        textImg.style.color ='black'
    }
    if(topPenari[0] >=400){
        topPenari[0]=400
    }
    if(topPenari[1] >=500){
        topPenari[1]=500
    }
    if(topPenari[2] >=500){
        topPenari[2]=500
    }
    if(topPenari[3] >=450){
        topPenari[3]=450
    }
    if(topSpider[0] >=10){
        topSpider[0]=10;
        line[0].style.display = 'block'
        line[0].setAttribute('x2',200)
        

        if(topLine[0]>=500){
            topLine[0]=500
        }
        line[0].setAttribute('y2',topLine[0])
    }
    if(topSpider[1] >=15){
        topSpider[1]=15;
        line[1].style.display = 'block'
        line[1].setAttribute('x2',150)
        

        if(topLine[1]>=500){
            topLine[1]=500
        }
        line[1].setAttribute('y2',topLine[1])
    }
    if(topSpider[2] >=17){
        topSpider[2]=17;
        line[2].style.display = 'block'
        line[2].setAttribute('x2',100)
        

        if(topLine[2]>=500){
            topLine[2]=500
        }
        line[2].setAttribute('y2',topLine[2])
    }  
    if(topSpider[3] >=8){
        topSpider[3]=8;
        line[3].style.display = 'block'
        line[3].setAttribute('x2',10)
        

        if(topLine[3]>=500){
            topLine[3]=500
        }
        line[3].setAttribute('y2',topLine[3])
    }
    if(topSpider[4] >=11){
        topSpider[4]=11;
        line[4].style.display = 'block'
        line[4].setAttribute('x2',-5)
        

        if(topLine[4]>=500){
            topLine[4]=500
        }
        line[4].setAttribute('y2',topLine[4])
    }
    if(topSpider[5] >=13){
        topSpider[5]=13;
        line[5].style.display = 'block'
        line[5].setAttribute('x2',-10)
        

        if(topLine[5]>=500){
            topLine[5]=500
        }
        line[5].setAttribute('y2',topLine[5])
    }
    if(topSpider[6] >=15){
        topSpider[6]=15;
        line[6].style.display = 'block'
        line[6].setAttribute('x2',-10)
        

        if(topLine[6]>=500){
            topLine[6]=500
        }
        line[6].setAttribute('y2',topLine[6])
    }
    if(topTextSpider>=340){
        topTextSpider=340
    }
    




    // Set posisi baru cloud
    cloud.style.top = newTop + 'px';
    mountain3.style.top = topmountain3 + 'px'
    mountain3.style.left = leftmountain3 + 'px'
    mountain2.style.left = leftmountain2 + 'px'
    mountain2.style.top = topmountain2 + 'px'
    mountain1.style.top = topmountain1 + 'px'
    mountain1.style.left = leftmountain1 + 'px'
    daratan.style.top = topdaratan + 'px'
    daratan.style.left = leftdaratan + 'px'
    textImg.style.top = imgText + 'px'
    penari[0].style.top = topPenari[0] + 'px'
    penari[1].style.top = topPenari[1] + 'px'
    penari[2].style.top = topPenari[2] + 'px'
    penari[3].style.top = topPenari[3] + 'px'

    spiders[0].style.marginTop = topSpider[0] +'px'
    spiders[1].style.marginTop = topSpider[1] +'px'
    spiders[2].style.marginTop = topSpider[2] +'px'
    spiders[3].style.marginTop = topSpider[3] +'px'
    spiders[4].style.marginTop = topSpider[4] +'px'
    spiders[5].style.marginTop = topSpider[5] +'px'
    spiders[6].style.marginTop = topSpider[6] +'px'
    textSpider.style.top =  topTextSpider+ 'px'







    // console.log(`Scroll value: ${scrollValue}`);
    // console.log(`New top cloud: ${newTop}`);
    // console.log(`new text-img:${imgText}`)
    // console.log(topSpider[0])
    // console.log(scrollValue)
    // console.log('top=line :' +topLine[0])
    // console.log('top text spider :' +topTextSpider)

    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // Scroll ke bawah
        navbar.classList.add('hidden');
    } else {
        // Scroll ke atas
        navbar.classList.remove('hidden');
    }
    lastScrollTop = scrollTop;


    
   

    
})


const page3=[document.getElementById('btn1'),document.getElementById('icon1')]

page3[0].addEventListener('mouseover',()=>{
    page3[1].style.color = 'black'
})
page3[0].addEventListener('mouseleave',()=>{
    page3[1].style.color ='white'
})

const li = [document.getElementById('li1'),document.getElementById('li2'),document.getElementById('li3'),document.getElementById('li4'),document.getElementById('li5'),document.getElementById('li6')]

li[0].addEventListener('click',()=>{
    li[0].classList.add('active')
    li[0].classList.remove('disable')
    
    li[1].classList.add('disable')
    li[1].classList.remove('active')
    
    li[2].classList.add('disable')
    li[2].classList.remove('active')

    li[3].classList.add('disable')
    li[3].classList.remove('active')

    li[4].classList.add('disable')
    li[4].classList.remove('active')

    li[5].classList.add('disable')
    li[5].classList.remove('active')

})

li[1].addEventListener('click',()=>{
    li[0].classList.add('disable')
    li[0].classList.remove('active')
    
    li[1].classList.add('active')
    li[1].classList.remove('disable')
    
    li[2].classList.add('disable')
    li[2].classList.remove('active')

    li[3].classList.add('disable')
    li[3].classList.remove('active')

    li[4].classList.add('disable')
    li[4].classList.remove('active')

    li[5].classList.add('disable')
    li[5].classList.remove('active')

})

li[2].addEventListener('click',()=>{
    li[0].classList.add('disable')
    li[0].classList.remove('active')
    
    li[1].classList.add('disable')
    li[1].classList.remove('active')
    
    li[2].classList.add('active')
    li[2].classList.remove('disable')

    li[3].classList.add('disable')
    li[3].classList.remove('active')

    li[4].classList.add('disable')
    li[4].classList.remove('active')

    li[5].classList.add('disable')
    li[5].classList.remove('active')

})

li[3].addEventListener('click',()=>{
    li[0].classList.add('disable')
    li[0].classList.remove('active')
    
    li[1].classList.add('disable')
    li[1].classList.remove('active')
    
    li[2].classList.add('disable')
    li[2].classList.remove('active')

    li[3].classList.add('active')
    li[3].classList.remove('disable')

    li[4].classList.add('disable')
    li[4].classList.remove('active')

    li[5].classList.add('disable')
    li[5].classList.remove('active')

})

li[4].addEventListener('click',()=>{
    li[0].classList.add('disable')
    li[0].classList.remove('active')
    
    li[1].classList.add('disable')
    li[1].classList.remove('active')
    
    li[2].classList.add('disable')
    li[2].classList.remove('active')

    li[3].classList.add('disable')
    li[3].classList.remove('active')

    li[4].classList.add('active')
    li[4].classList.remove('disable')

    li[5].classList.add('disable')
    li[5].classList.remove('active')

})

li[5].addEventListener('click',()=>{
    li[0].classList.add('disable')
    li[0].classList.remove('active')
    
    li[1].classList.add('disable')
    li[1].classList.remove('active')
    
    li[2].classList.add('disable')
    li[2].classList.remove('active')

    li[3].classList.add('disable')
    li[3].classList.remove('active')

    li[4].classList.add('disable')
    li[4].classList.remove('active')

    li[5].classList.add('active')
    li[5].classList.remove('disable')

})



