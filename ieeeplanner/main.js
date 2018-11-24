let topsheetHeightOpen = "10vh";
let topsheetHeightClosed = "100vh";

window.onload = function() {
    let scrollElements = document.getElementsByClassName("scroll-con");
    let bottomsheet = document.getElementsByClassName("bottom-sheet")[0];

    for (let i = 0; i < scrollElements.length; i++) {
        element = scrollElements[i];
        element.items = element.getElementsByClassName("scroll-items");
        element.items[0].scrollIntoView({block: "center"});

        element.onscroll = function(e) {

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


        for (let item of element.items) {

            item.onclick = function() {
                bottomsheet.style.top = topsheetHeightOpen;
                bottomsheet.getElementsByClassName("title")[0].innerHTML = item.getAttribute("data-title");
                bottomsheet.getElementsByClassName("room")[0].innerHTML = item.getAttribute("data-room");
                bottomsheet.getElementsByClassName("desc")[0].innerHTML = item.getAttribute("data-desc");
                
                let i = 1;
                let content = "";
                while (item.getAttribute("data-chat"+i) != null ) {
                    content += "<p class=\"chat\">" + item.getAttribute("data-chat"+i) + "</p>";
                    i++;
                }
                bottomsheet.getElementsByClassName("chat-con")[0].innerHTML = content;
            };
        }    
    }

    bottomsheet.getElementsByClassName("exit-space")[0].onclick = function() {
        console.log("clicked");
        bottomsheet.style.top = topsheetHeightClosed;
    };

    let timeButtons = document.getElementsByClassName("timeobject-con");

    for (let timeButton of timeButtons) {
        timeButton.unselected = false;
        timeButton.onclick = function() {
            if (this.unselected) {
                this.parentElement.parentElement.style.filter = "opacity(1) blur(0)";
                this.unselected = false;
                this.parentElement.parentElement.getElementsByClassName("shadow-con")[0].style.zIndex = 0;
            } else {
                this.parentElement.parentElement.style.filter = "opacity(.25) blur(.1rem)";
                this.unselected = true;
                this.parentElement.parentElement.getElementsByClassName("shadow-con")[0].style.zIndex = 1;
            }
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
