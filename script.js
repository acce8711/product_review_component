
let mobileWidth = false;
 
if($(window).width() < 600) {
    mobileWidth = true;
    changeMobileImg();
}


function changeMobileImg()
{
    document.getElementById("productImg").src = "images/image-product-mobile.jpg";
}

function changeDesktopImg()
{
    document.getElementById("productImg").src = "images/image-product-desktop.jpg";
}

console.log(mobileWidth);

$(window).resize(() => {
    if ($(window).width() < 600 && !mobileWidth){
        changeMobileImg();
        mobileWidth = true;
    }
    else if($(window).width() > 600) {
        changeDesktopImg();
        mobileWidth = false;
    }

  });