# canvas stars
sometimes we add box-shadow to realize 3D,sometimes we use css3 to realize 3D.Now I try to realize it by canvas in "context(2d)".
It is important to have a habit of coding regularly.
*var get element-canvas,context-ctx*
```javascript
/*get context*/
var canvasEL=document.getElementById("canvas"),
    ctx=canvasEL.getContext("2d");
```

*var set arrays*
```javascript
/*stars edges mouseXY*/
var nodes=[],
    edges=[],
    mousePos=[0,0];
```

*var set common variables*
```javascript
/*color...common variables*/
var bgcolor="#000",
    nodeColor="#fff",
    edgeColor="#fff",
    easingFactor=5.0;
```

*a series of functions*
```javascript
(function(){
    function constructNodes(){...addEdges(nodes);}
    function addEdges(nodes){...}

    function step(){...
        clamp(0,canvasEL.width,e.x);..
        addFirstNodeDrivenByMouse();
        render();
        window.requestAnimationFrame(step);}
    function clamp(min,max,value){...return min/max;}
    function addFirstNodeDrivenByMouse(){mousePos[0/1]}
    window.onmousemove=function(e){
            mousePos[0]=e.clientX;
            mousePos[1]=e.clientY;
    };

    function render(){...lengthOfEdge(e)}
    function lengthOfEdge(edge){...}

    window.onresize=function(){..constructNodes();..render();}

    window.onresize();
    window.requestAnimationFrame(step);
})();
```

*how canvas work see*
### here [detailOne](http://pinglikethinking.github.io/blog/2016/05/13/2D_canvas/)
*how can I put that block on the canvas?see*
### here [detailTwo](http://pinglikethinking.github.io/blog/2016/05/18/3Dand2D/)