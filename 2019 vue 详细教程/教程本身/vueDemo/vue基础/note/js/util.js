function formatTime(time) {
    return time.getFullYear()
        + "-" + lpad((time.getMonth() + 1), 2, '0')
        + "-" + lpad(time.getDate(), 2, '0')
        + " " + lpad(time.getHours(), 2, '0')
        + ":" + lpad(time.getMinutes(), 2, '0') 
        + ":" + lpad(time.getSeconds(), 2, '0');
}

function lpad(s, n, c) {
    return s.toString().padStart(n, c);
}