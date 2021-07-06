
export function initScrollEvent(vm){
    console.log(vm)
    scrollEvent.call(vm);
    vm._startScrollEvent = scrollEvent;
}


function scrollEvent(){
    const { el } = this._options;
    console.log(el)
    const scrollEl = document.getElementById(el) || document;

    scrollEl.addEventListener('scroll',(e) =>{
        let scollTop = document.documentElement.scrollTop;
        console.log('1111111111111111',scollTop)
    },false);
}