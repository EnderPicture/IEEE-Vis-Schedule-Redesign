window.onload = function() {
    let scrollElements = document.getElementsByClassName("scroll-con");
    
    for (let i = 0; i < scrollElements.length; i++) {
        element = scrollElements[i];
        element.items = element.getElementsByClassName("scroll-items");
        element.items[0].scrollIntoView({block: "center"});
    
        element.onscroll = function() {
    
            let center = this.scrollLeft + this.offsetWidth/2;
    
            for (let j = 0; j < this.items.length; j++) {
                let item = this.items[j];
    
                let left = item.offsetLeft;
                let right = item.offsetWidth+item.offsetLeft;
                
                if (center > left && center < right) {
                    item.style.filter = "";
                    item.style.transform = "";
                } else {
                    item.style.filter = "opacity(.5) blur(.1rem)";
                    item.style.transform = "scale(.95)";
                }
            }
    
        };
    }
}
