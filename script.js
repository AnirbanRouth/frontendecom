const bar = document.getElementById('bar')
const close = document.getElementById('close')
const nav = document.getElementById('navbar')


    bar.addEventListener('click',()=>{
      nav.classList.add('active');

    })

    close.addEventListener('click',()=>{
      nav.classList.remove('active');

    })

    const para1 = document.getElementById("para1");
      
    animate(para1);
      
    function animate(element) {
        let elementWidth = element.offsetWidth;
        let parentWidth = element.parentElement.offsetWidth;
        let flag = 0;
      
        setInterval(() => {
            element.style.marginLeft = --flag + "px";
      
            if (elementWidth == -flag) {
                flag = parentWidth;
            }
        }, 10);
    }