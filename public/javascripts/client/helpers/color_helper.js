/* http://martin.ankerl.com/2009/12/09/how-to-create-random-colors-programmatically/ */
(function() {



  function hsv_to_rgb(h, s, v) {
    var h_i = Math.floor(h*6);
    var f = h*6 - h_i;
    var p = v * (1 - s);
    var q = v * (1 - f*s);
    var t = v * (1 - (1 - f) * s);
    switch(h_i) {
      case 0:
        return build_rgb(v, t, p);
      case 1:
        return build_rgb(q, v, p);
      case 2:
        return build_rgb(p, v, t);
      case 3:
        return build_rgb(p, q, v);
      case 4:
        return build_rgb(t,p, v);
      case 5:
        return build_rgb(v,p,q);
    }
    return "none";
  }

  function build_rgb(r, g, b) {
    var encoded = Math.round(r*256) + 256 * Math.round(g*256) + 65536 * Math.round(b*256);
    return encoded.toString(16);
  }


  var GOLDEN_RATIO = 0.618033988749895;
  var current = Math.random();
  
  $$.ColorHelper = {
    saturation : 0.3,
    value: 0.99,

    generate : function() {
      return $$.ColorHelper.generateColor($$.ColorHelper.saturation, $$.ColorHelper.value)
    },

    generateColor : function(saturation, value) {
      current += GOLDEN_RATIO;
      current %= 1;
      return hsv_to_rgb(current, saturation, value);
    }
  }
  
})();