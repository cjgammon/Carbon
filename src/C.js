var C = {};
C.ns    = 'http://www.w3.org/2000/svg';
C.xmlns = 'http://www.w3.org/2000/xmlns/';
C.xlink = 'http://www.w3.org/1999/xlink';
C.svgjs = 'http://svgjs.com/svgjs';

C.Element = {
  add: function (o) {
    this.el.appendChild(o.el);
  },
  remove: function () {
    this.el.parentElement.removeChild(this.el);
  },
  removeChild: function (o) {
    this.el.removeChild(o.el);
  },
  addClass: function (cl) {
    this.el.classList.add(cl);
  },
  removeClass: function (cl) {
    this.el.classList.remove(cl);
  },
  transform: function (v) {
    // do transform magic?
    this.el.setAttribute('transform', v);
  },
  attr: function (o, v) {
    if (typeof(o) == 'string' && v) {
      this.el.setAttribute(o, v);
    } else {
      for (var prop in o) {
        this.el.setAttribute(prop, o[prop]);
      }
    }
  },
  set: function (n, v) {
    this.el.setAttribute(n, v);
  },
  get: function (n) {
    return this.el.getAttribute(n);
  }
};

C.SVG = function (w, h) {
    var inst = this;

    if (typeof(w) == "string") {
        inst.el = document.getElementById(w);
        inst.w = inst.el.offsetWidth;
        inst.h = inst.el.offsetHeight;
    } else {
        inst.el = document.createElementNS(C.ns, 'svg');
        inst.w = w;
        inst.h = h;
        inst.el.setAttribute('width', w);
        inst.el.setAttribute('height', h);
        inst.el.setAttribute('viewBox', '0 0 ' + w + ' ' + h);
        inst.el.setAttribute('preserveAspectRatio', "xMidYMid slice");
    }

    inst.add = function (o) {
      inst.el.appendChild(o.el);
    }

    inst.remove = function (o) {
      inst.el.removeChild(o.el);
    }
};
C.SVG.prototype = C.Element;

C.Group = function () {
  this.el = document.createElementNS(C.ns, 'g');
};
C.Group.prototype = C.Element;

C.Rect = function (_x, _y, _w, _h) {
  x = _h ? _x : 0;
  y = _h ? _y : 0;
  w = _h || _x;
  h = _h || _y;

  this.el = document.createElementNS(C.ns, 'rect');
  this.el.setAttribute('x', x);
  this.el.setAttribute('y', y);
  this.el.setAttribute('width', w);
  this.el.setAttribute('height', h);
};
C.Rect.prototype = C.Element;

C.Circle = function (_cx, _cy, _r) {
  cx = _r ? _cx : 0;
  cy = _r ? _cy : 0;
  r = _r || _cx;

  this.el = document.createElementNS(C.ns, 'circle');
  this.el.setAttribute('cx', cx);
  this.el.setAttribute('cy', cy);
  this.el.setAttribute('r', r);
};
C.Circle.prototype = C.Element;

C.Polygon = function (_p) {
  this.el = document.createElementNS(C.ns, 'polygon');
  this.el.setAttribute('points', _p);
};
C.Polygon.prototype = C.Element;

C.Path = function (_p) {
  this.el = document.createElementNS(C.ns, 'path');
  this.el.setAttribute('d', _p);
};
C.Path.prototype = C.Element;
