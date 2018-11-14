let topsheetHeight = "10vh";

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
                    item.style.filter = "opacity(1) blur(0)";
                    item.style.transform = "scale(1) translate3d(0,0,0)";
                } else {
                    item.style.filter = "opacity(.5) blur(.1rem)";
                    item.style.transform = "scale(.95) translate3d(0,0,0)";
                }
            }

        };

        element.onclick = function() {
            document.getElementsByClassName("bottom-sheet")[0].style.top = topsheetHeight;
        };
    }
}

// $(document).ready(function() {
//     $(".scroll-con").scroll(function() {
//         $(this).find(".scroll-items").each(function() {
//             let center = $(this).parent().width()/2;
//             let left = $(this).position().left + parseInt($(this).css("marginLeft"));
//             let right = left + $(this).width();
//             if (center > left && center < right) {
//                 $(this).css("-webkit-filter", "opacity(1) blur(0)");
//                 $(this).css("-webkit-transform", "scale(1) translate3d(0,0,0)");
//                 $(this).css("filter", "opacity(1) blur(0)");
//                 $(this).css("transform", "scale(1) translate3d(0,0,0)");
//             } else {
//                 $(this).css("-webkit-filter", "opacity(.5) blur(.1rem)");
//                 $(this).css("-webkit-transform", "scale(.95) translate3d(0,0,0)");
//                 $(this).css("filter", "opacity(.5) blur(.1rem)");
//                 $(this).css("transform", "scale(.95) translate3d(0,0,0)");
//             }
//         });
//     });
// });
