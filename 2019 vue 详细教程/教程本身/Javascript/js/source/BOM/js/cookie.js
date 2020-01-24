// function setCookie(cname, cvalue, expiresMinute) {
//     var now = new Date();

//     var s = cname + "=" + cvalue;

//     if(expiresMinute !== undefined) {
//         now.setMinutes(now.getMinutes() + expiresMinute);
//         s += ";expires=" + now.toGMTString();
//     }
   
//     document.cookie = s;
// }

// setCookie("", "", {
//     days: 5
// });

// setCookie("", "", {minutes: 5});

function setCookie(cname, cvalue, expires) {
    var s = cname + "=" + cvalue;
    if(expires !== undefined) {
        var now = new Date();
        for(var k in expires) {
            if(k === "days") {
                now.setDate(now.getDate() + expires[k]);
            }else if(k === "minutes") {
                now.setMinutes(now.getMinutes() + expires[k]);
            }
        }
        s += ";expires=" + now.toGMTString();
    }

    document.cookie = s;
    
}


function getCookie(cname) {
    var arr = document.cookie.split("; ");
    for(var i = 0; i < arr.length; i++) {
        var brr = arr[i].split("=");
        if(brr[0] === cname) {
            return brr[1];
        }
    }
    return "";
}