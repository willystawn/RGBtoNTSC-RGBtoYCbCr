function RGBtoNTSC(r, g, b) {
    var y = 0.299*r + 0.587*g + 0.114*b;
    var i = 0.596*r - 0.274*g - 0.322*b;
    var q = 0.211*r - 0.523*g + 0.312*b;
    return { y: y, i: i, q: q };
}

function RGBtoYCbCr(r, g, b) {
    var y = 0.299*r + 0.587*g + 0.114*b;
    var cb = -0.16874*r - 0.33126*g + 0.5*b;
    var cr = 0.5*r - 0.41869*g - 0.08131*b;
    return { y: y, cb: cb, cr: cr };
}