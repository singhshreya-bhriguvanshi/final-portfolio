import { useEffect } from 'react';

const useCanvasCursor = () => {
  let e = 0;
  let ctx;
  let f;
  let pos = { x: 0, y: 0 };
  let lines = [];
  
  const E = {
    debug: true,
    friction: 0.5,
    trails: 20,
    size: 50,
    dampening: 0.25,
    tension: 0.98
  };

  function n(e) {
    this.init(e || {});
  }
  
  n.prototype = {
    init: function (e) {
      this.phase = e.phase || 0;
      this.offset = e.offset || 0;
      this.frequency = e.frequency || 0.001;
      this.amplitude = e.amplitude || 1;
    },
    update: function () {
      this.phase += this.frequency;
      e = this.offset + Math.sin(this.phase) * this.amplitude;
      return e;
    }
  };

  function Node() {
    this.x = 0;
    this.y = 0;
    this.vy = 0;
    this.vx = 0;
  }

  function Line(e) {
    this.init(e || {});
  }

  Line.prototype = {
    init: function (e) {
      this.spring = e.spring + 0.1 * Math.random() - 0.02;
      this.friction = E.friction + 0.01 * Math.random() - 0.002;
      this.nodes = [];
      for (var t, n = 0; n < E.size; n++) {
        t = new Node();
        t.x = pos.x;
        t.y = pos.y;
        this.nodes.push(t);
      }
    },
    update: function () {
      var e = this.spring,
        t = this.nodes[0];
      t.vx += (pos.x - t.x) * e;
      t.vy += (pos.y - t.y) * e;
      for (var n, i = 0, a = this.nodes.length; i < a; i++) {
        t = this.nodes[i];
        if (i > 0) {
          n = this.nodes[i - 1];
          t.vx += (n.x - t.x) * e;
          t.vy += (n.y - t.y) * e;
          t.vx += n.vx * E.dampening;
          t.vy += n.vy * E.dampening;
        }
        t.vx *= this.friction;
        t.vy *= this.friction;
        t.x += t.vx;
        t.y += t.vy;
        e *= E.tension;
      }
    },
    draw: function () {
      var e, t,
        n = this.nodes[0].x,
        i = this.nodes[0].y;
      ctx.beginPath();
      ctx.moveTo(n, i);
      for (var a = 1, o = this.nodes.length - 2; a < o; a++) {
        e = this.nodes[a];
        t = this.nodes[a + 1];
        n = 0.5 * (e.x + t.x);
        i = 0.5 * (e.y + t.y);
        ctx.quadraticCurveTo(e.x, e.y, n, i);
      }
      e = this.nodes[a];
      t = this.nodes[a + 1];
      ctx.quadraticCurveTo(e.x, e.y, t.x, t.y);
      ctx.stroke();
      ctx.closePath();
    }
  };

  function initLines() {
    lines = [];
    for (var e = 0; e < E.trails; e++) {
      lines.push(new Line({ spring: 0.45 + (e / E.trails) * 0.025 }));
    }
  }

  function render() {
    if (ctx && ctx.running) {
      ctx.globalCompositeOperation = 'source-over';
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.globalCompositeOperation = 'lighter';
      ctx.strokeStyle = `hsla(${Math.round(f.update())},50%,50%,0.2)`;
      ctx.lineWidth = 1;

      for (var i = 0; i < lines.length; i++) {
        lines[i].update();
        lines[i].draw();
      }

      ctx.frame++;
      requestAnimationFrame(render);
    }
  }

  function onMousemove(e) {
    if (e.touches) {
      pos.x = e.touches[0].pageX;
      pos.y = e.touches[0].pageY;
    } else {
      pos.x = e.clientX;
      pos.y = e.clientY;
    }
    
    if (!lines.length) {
      initLines();
    }
    
    if (ctx && !ctx.running) {
      ctx.running = true;
      render();
    }
    
    e.preventDefault();
  }

  function resizeCanvas() {
    if (ctx && ctx.canvas) {
      ctx.canvas.width = window.innerWidth;
      ctx.canvas.height = window.innerHeight;
    }
  }

  useEffect(() => {
    const canvas = document.getElementById('canvas');
    if (!canvas) return;

    ctx = canvas.getContext('2d');
    ctx.running = true;
    ctx.frame = 1;

    f = new n({
      phase: Math.random() * 2 * Math.PI,
      amplitude: 85,
      frequency: 0.0015,
      offset: 285,
    });

    document.addEventListener('mousemove', onMousemove);
    document.addEventListener('touchstart', onMousemove);
    window.addEventListener('resize', resizeCanvas);

    resizeCanvas();
    render();

    return () => {
      if (ctx) {
        ctx.running = false;
      }
      document.removeEventListener('mousemove', onMousemove);
      document.removeEventListener('touchstart', onMousemove);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
};

export default useCanvasCursor; 