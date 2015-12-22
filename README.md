# Carbon
Intended to be a SUPER Lightweight SVG Drawing API

Below is an example of drawing some shapes and their attributes.
```
<html>
    <head>
        <style>
          svg{
            background: green;
          }
        </style>
    </head>
    <body>
        <svg id="mysvg"></svg>
        <script src="src/C.js"></script>
        <script>
            var _c = new C.SVG('mysvg');

            var _c2 = new C.SVG(500, 500);
            document.body.appendChild(_c2.el);

            var g = new C.Group();
            _c2.add(g);

            var rect = new C.Rect(50, 100);
            rect.attr({
              'fill': 'red',
              'stroke-width': 10
            });
            rect.attr('stroke', 'blue');
            g.add(rect);

            var poly = new C.Polygon([100,10,200,50,100,50]);
            poly.attr('fill', 'white');
            _c.add(poly);

            var path = new C.Path('M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80');
            path.attr('fill', 'red');
            _c.add(path);

            var circ = new C.Circle(40, 40, 20);
            circ.attr('fill', 'orange');
            _c.add(circ);
        </script>
    </body>
</html>
```
