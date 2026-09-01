/* ============================================================
   Alfa Creative Agency — PREMIUM EDITION — main.js
   Índice:
   1. Config / detecção de capacidade
   2. Fundo líquido (canvas 2D, inércia + deriva autônoma)
   3. Glass pointer (brilho líquido que segue o mouse)
   4. Navbar scroll state
   5. Scroll reveal (IntersectionObserver)
   6. HUD text cycler
   7. Hero — profundidade em camadas (parallax) + tilt nos cards + vídeo nos cards de projeto + logo interativa
   8. Cenas 3D (Three.js) — drone (com GLTFLoader) + objeto CGI com progressão por scroll
   9. Init
   ============================================================ */

(function () {
  "use strict";

  /* ---------- 1. CONFIG ---------- */

const REDUCED_MOTION = false;

// "dispositivo fraco" = tela pequena (celular) ou touch + tela estreita (tablet)
const LOW_POWER =
  window.innerWidth < 760 ||
  (window.matchMedia("(pointer: coarse)").matches && window.innerWidth < 1024);

const ALLOW_3D =
  !LOW_POWER &&
  typeof window.THREE !== "undefined";

  /* ---------- 2. FUNDO LÍQUIDO ---------- */
  function initLiquidBackground() {
    const canvas = document.getElementById("bg-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let w, h, dpr;

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 1.6);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener("resize", resize, { passive: true });

    // blobs: posição-base (percentual da tela) + cor + raio + fase de deriva própria
    const blobs = [
      { bx: 0.16, by: 0.18, r: 0.42, hue: "rgba(106,227,240,0.30)", speed: 0.00016, phase: 0 },
      { bx: 0.82, by: 0.1, r: 0.38, hue: "rgba(47,111,237,0.32)", speed: 0.00012, phase: 2.1 },
      { bx: 0.92, by: 0.86, r: 0.46, hue: "rgba(18,49,143,0.34)", speed: 0.0001, phase: 4.4 },
      { bx: 0.12, by: 0.9, r: 0.34, hue: "rgba(106,227,240,0.2)", speed: 0.00014, phase: 1.3 },
      { bx: 0.5, by: 0.5, r: 0.3, hue: "rgba(255,255,255,0.05)", speed: 0.00009, phase: 3.2 },
    ];

    // mouse com inércia: alvo real do ponteiro vs. posição "seguida" pelo fundo
    const mouse = { tx: 0.5, ty: 0.5, x: 0.5, y: 0.5 };
    window.addEventListener(
      "pointermove",
      (e) => {
        mouse.tx = e.clientX / window.innerWidth;
        mouse.ty = e.clientY / window.innerHeight;
      },
      { passive: true }
    );

    let scrollFrac = 0;
    window.addEventListener(
      "scroll",
      () => {
        const doc = document.documentElement;
        scrollFrac = doc.scrollTop / Math.max(1, doc.scrollHeight - doc.clientHeight);
      },
      { passive: true }
    );

    let raf = null;
    let running = true;
    document.addEventListener("visibilitychange", () => {
      running = !document.hidden;
      if (running) loop();
    });

    function loop(t) {
      if (!running) return;
      // inércia: a posição seguida caminha lentamente em direção ao alvo (nunca gruda no cursor)
      mouse.x += (mouse.tx - mouse.x) * 0.02;
      mouse.y += (mouse.ty - mouse.y) * 0.02;

      ctx.clearRect(0, 0, w, h);
      const time = (t || 0) * 1;

      blobs.forEach((b, i) => {
        const drift = time * b.speed + b.phase;
        // deriva orgânica lenta e autônoma (figura em "8")
        const dx = Math.sin(drift) * 0.05 + Math.cos(drift * 0.6) * 0.02;
        const dy = Math.cos(drift * 0.8) * 0.045;
        // leve resposta ao mouse (parallax de profundidade, não segue o cursor)
        const mx = (mouse.x - 0.5) * 0.06 * (i % 2 === 0 ? 1 : -1);
        const my = (mouse.y - 0.5) * 0.06 * (i % 2 === 0 ? -1 : 1);
        // leve resposta ao scroll
        const sy = scrollFrac * 0.08 * (i % 2 === 0 ? 1 : -1);

        const cx = (b.bx + dx + mx) * w;
        const cy = (b.by + dy + my + sy) * h;
        const r = b.r * Math.max(w, h);

        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
        grad.addColorStop(0, b.hue);
        grad.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fill();
      });

      raf = requestAnimationFrame(loop);
    }

    if (REDUCED_MOTION) {
      // desenha um único frame estático e para
      loop(0);
      running = false;
    } else {
      loop(0);
    }
  }

  /* ---------- 3. GLASS POINTER ---------- */
  function initGlassPointer() {
    document.addEventListener(
      "pointermove",
      (e) => {
        const el = e.target.closest(".glass, .glass-premium, .btn, .social-btn, .page-btn");
        if (!el) return;
        const r = el.getBoundingClientRect();
        el.style.setProperty("--mx", ((e.clientX - r.left) / r.width) * 100 + "%");
        el.style.setProperty("--my", ((e.clientY - r.top) / r.height) * 100 + "%");
      },
      { passive: true }
    );
  }

  /* ---------- 4. NAVBAR SCROLL STATE ---------- */
  function initNavbar() {
    const nav = document.querySelector(".navbar");
    if (!nav) return;
    let last = -1;
    function onScroll() {
      const scrolled = window.scrollY > 24;
      if (scrolled !== last) {
        nav.classList.toggle("is-scrolled", scrolled);
        last = scrolled;
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---------- 5. SCROLL REVEAL ---------- */
  function initScrollReveal() {
    const items = document.querySelectorAll(".reveal");
    if (!items.length) return;
    if (REDUCED_MOTION || !("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -40px 0px" }
    );
    items.forEach((el) => io.observe(el));
  }

  /* ---------- 6. HUD TEXT CYCLER ---------- */
  function initHudCyclers() {
    document.querySelectorAll("[data-hud-cycle]").forEach((el) => {
      let lines;
      try {
        lines = JSON.parse(el.getAttribute("data-hud-cycle"));
      } catch (e) {
        return;
      }
      if (!lines || lines.length < 2) return;
      let i = 0;
      if (REDUCED_MOTION) return;
      setInterval(() => {
        i = (i + 1) % lines.length;
        el.style.opacity = "0";
        setTimeout(() => {
          el.textContent = lines[i];
          el.style.opacity = "1";
        }, 350);
      }, 4200);
      el.style.transition = "opacity 0.35s ease";
    });
  }

  /* ---------- 7. HERO — PROFUNDIDADE EM CAMADAS ---------- */
  // Robô, HUD, badges, glow e partículas se movem em velocidades diferentes conforme o mouse —
  // a sensação de profundidade vem dessa diferença de velocidade entre camadas, não do movimento em si.
  function initHeroDepth() {
    const stage = document.querySelector(".hero-stage");
    const wrap = document.querySelector(".hero-robot-wrap");
    if (!stage || !wrap || REDUCED_MOTION) return;
    const glow = stage.querySelector(".depth-glow");
    const hud = stage.querySelector(".hero-hud");
    const b1 = stage.querySelector(".hero-badge.b1");
    const b2 = stage.querySelector(".hero-badge.b2");
    const particles = stage.querySelectorAll(".hero-particles span");

    let nx = 0, ny = 0, cx = 0, cy = 0;
    stage.addEventListener(
      "pointermove",
      (e) => {
        const r = stage.getBoundingClientRect();
        nx = (e.clientX - r.left) / r.width - 0.5;
        ny = (e.clientY - r.top) / r.height - 0.5;
      },
      { passive: true }
    );
    stage.addEventListener("pointerleave", () => { nx = 0; ny = 0; }, { passive: true });

    function tick() {
      cx += (nx - cx) * 0.06;
      cy += (ny - cy) * 0.06;

      wrap.style.transform = `rotateY(${cx * 8.4}deg) rotateX(${-cy * 6}deg) translate(${cx * 5.6}px, ${cy * 4}px)`;
      if (glow) glow.style.transform = `translate(${cx * 26}px, ${cy * 20}px)`;
      if (hud) hud.style.transform = `translate(${cx * -14}px, ${cy * -10}px)`;
      if (b1) b1.style.transform = `translate(${cx * 10}px, ${cy * 7}px)`;
      if (b2) b2.style.transform = `translate(${cx * -12}px, ${cy * -8}px)`;
      particles.forEach((p, i) => {
        const dir = i % 2 === 0 ? 1 : -1;
        p.style.transform = `translate(${cx * 16 * dir}px, ${cy * 12 * dir}px)`;
      });

      requestAnimationFrame(tick);
    }
    tick();
  }

  // Robô animado do Hero (vídeo real, ver comentário no index.html). O conteúdo de fallback
  // dentro de <video> (o <img>) só é respeitado por navegadores que não suportam a TAG
  // <video> — na prática nenhum hoje em dia. Um navegador que entende <video> mas não sabe
  // decodificar WebM/VP9+alpha (ex.: Safari mais antigo) mostraria o elemento vazio, não a
  // imagem de fallback. Por isso o canPlayType() abaixo troca o <video> por um <img> estático
  // manualmente sempre que o navegador não sabe tocar o formato — nunca fica em branco.
  function initHeroRobotVideo() {
    const video = document.getElementById("hero-robot-video");
    if (!video) return;

    video.addEventListener("loadeddata", () => {
  video.classList.add("is-ready");
}, { once: true });

    function swapToStaticFallback() {
      if (!video.isConnected) return;
      const img = document.createElement("img");
      img.src = "assets/images/robot-hero-fallback.png";
      img.alt = "Robot Alfa Creative Agency";
      img.className = "hero-robot-media is-ready";
      video.replaceWith(img);
    }

    const canPlayWebm = !!(video.canPlayType && video.canPlayType('video/webm; codecs="vp9"'));
    if (!canPlayWebm) {
      swapToStaticFallback();
      return;
    }
    video.addEventListener("error", swapToStaticFallback, { once: true });

    if (REDUCED_MOTION) return; // fica parado no poster (pose estática) de propósito
    const playPromise = video.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {}); // autoplay bloqueado -> poster já cobre esse caso
    }
  }

  /* ---------- 7b. TILT NOS CARDS (bento + serviços) ---------- */
  function initCardTilt() {
    if (REDUCED_MOTION || LOW_POWER) return;
    document.querySelectorAll(".svc-card").forEach((card) => {
      card.addEventListener(
        "pointermove",
        (e) => {
          const r = card.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width - 0.5;
          const py = (e.clientY - r.top) / r.height - 0.5;
          card.style.transform = `translateY(-4px) rotateX(${(-py * 5).toFixed(2)}deg) rotateY(${(px * 6).toFixed(2)}deg)`;
        },
        { passive: true }
      );
      card.addEventListener(
        "pointerleave",
        () => {
          card.style.transform = "";
        },
        { passive: true }
      );
    });
  }

  /* ---------- 7c. PORTFOLIO — VÍDEO NO HOVER ---------- */
  // Cada .proj-video tem data-src vazio até você colocar o vídeo real do projeto.
  // Com data-src preenchido, o hover troca a thumbnail estática pelo vídeo em loop, mudo.
  function initPortfolioVideo() {
    document.querySelectorAll(".proj-thumb").forEach((thumb) => {
      const video = thumb.querySelector(".proj-video");
      if (!video) return;
      const src = video.getAttribute("data-src");
      if (!src) return; // nenhum vídeo real ainda — mantém a thumbnail estática
      thumb.addEventListener("pointerenter", () => {
        if (!video.src) video.src = src;
        video.currentTime = 0;
        video.play().catch(() => {});
        video.classList.add("is-active");
      });
      thumb.addEventListener("pointerleave", () => {
        video.pause();
        video.classList.remove("is-active");
      });
    });
  }

  /* ---------- 7d. LOGO FINALE — campo magnético interativo ----------
     Evolução do sistema de partículas que já existia (não criamos um segundo canvas):
     mesmo canvas + ring de pontos, agora com:
       - órbita autônoma lenta (vida própria mesmo sem mouse/touch — importante no mobile)
       - campo de "distância": longe = só órbita: médio = atração sutil para o cursor;
         perto = repulsão (o "campo magnético" pedido, numa única física contínua)
       - parallax extremamente sutil no container (reaproveita a mesma leitura de mouse)
       - reflexo de luz (.logo-sweep, mascarado na silhueta real da logo) via --sx/--sy
     Parâmetros fáceis de ajustar: ORBIT_SPEED, PULL_R/PUSH_R, PARALLAX_MAX. */
  function initLogoSignature() {
    const el = document.getElementById("logo-signature");
    const canvas = document.getElementById("logo-particles");
    const sweep = el ? el.querySelector(".logo-sweep") : null;
    if (!el || !canvas) return;
    const ctx = canvas.getContext("2d");
    let w, h, dpr;
    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 1.6);
      w = el.clientWidth;
      h = el.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener("resize", resize, { passive: true });

    const N = REDUCED_MOTION ? 0 : LOW_POWER ? 16 : 30;
    const ORBIT_SPEED = 0.0011; // rotação autônoma do anel — dá vida sem depender de mouse/touch
    const PUSH_R = 95;  // raio de repulsão (perto do cursor)
    const PULL_R = 230; // raio de atração sutil (distância média)
    const cx0 = () => w / 2, cy0 = () => h / 2;
    const ringR = () => Math.min(w, h) * 0.4;
    const dots = Array.from({ length: N }, (_, i) => ({ a: (i / N) * Math.PI * 2, x: 0, y: 0 }));

    let mouse = { x: -9999, y: -9999, active: false };
    let nx = 0, ny = 0; // posição normalizada (-0.5..0.5) para parallax
    let touchTimer = null;

    function setFromEvent(e) {
      const r = el.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
      nx = mouse.x / w - 0.5;
      ny = mouse.y / h - 0.5;
      const dist = Math.hypot(mouse.x - cx0(), mouse.y - cy0());
      mouse.active = dist < Math.max(w, h) * 0.68;
    }
    function clearMouse() {
      mouse.active = false;
      mouse.x = -9999;
      mouse.y = -9999;
    }
    el.addEventListener(
      "pointermove",
      (e) => {
        setFromEvent(e);
        // Touch não tem "hover" nem pointerleave real: simula um toque que "assenta"
        // e depois solta sozinho, em vez de ficar ativo pra sempre após o último toque.
        if (e.pointerType === "touch") {
          clearTimeout(touchTimer);
          touchTimer = setTimeout(clearMouse, 1400);
        }
      },
      { passive: true }
    );
    el.addEventListener("pointerleave", () => { clearTimeout(touchTimer); clearMouse(); }, { passive: true });
    el.addEventListener(
      "pointerdown",
      (e) => { if (e.pointerType === "touch") { setFromEvent(e); clearTimeout(touchTimer); touchTimer = setTimeout(clearMouse, 1400); } },
      { passive: true }
    );

    let activeEase = 0;
    let ringAngle = 0;
    let px = 0, py = 0; // parallax suavizado

    function loop() {
      requestAnimationFrame(loop);
      if (!isElementInViewport(el)) return;
      ctx.clearRect(0, 0, w, h);
      activeEase += ((mouse.active ? 1 : 0) - activeEase) * 0.08;
      el.classList.toggle("is-active", activeEase > 0.06);
      if (!REDUCED_MOTION) ringAngle += ORBIT_SPEED;

      // parallax extremamente sutil no conjunto logo+canvas
      px += (nx - px) * 0.05;
      py += (ny - py) * 0.05;
      el.style.transform = REDUCED_MOTION ? "" : `translate(${(px * 10).toFixed(2)}px, ${(py * 8).toFixed(2)}px)`;

      // reflexo de luz: só ativo perto do mouse, some suavemente quando o cursor sai
      if (sweep) {
        sweep.style.setProperty("--sx", `${((mouse.x / w) * 100).toFixed(1)}%`);
        sweep.style.setProperty("--sy", `${((mouse.y / h) * 100).toFixed(1)}%`);
      }

      dots.forEach((d) => {
        const angle = d.a + ringAngle;
        const baseX = cx0() + Math.cos(angle) * ringR();
        const baseY = cy0() + Math.sin(angle) * ringR();
        const dx = baseX - mouse.x, dy = baseY - mouse.y;
        const dist = Math.hypot(dx, dy) || 1;
        let field = 0;
        if (mouse.active) {
          if (dist < PUSH_R) field = (1 - dist / PUSH_R) * 20; // repulsão: afasta-se do cursor
          else if (dist < PULL_R) field = -(1 - (dist - PUSH_R) / (PULL_R - PUSH_R)) * 9; // atração sutil
        }
        const tx = baseX + (dx / dist) * field;
        const ty = baseY + (dy / dist) * field;
        d.x += (tx - d.x) * 0.12;
        d.y += (ty - d.y) * 0.12;

        const glow = 0.32 + activeEase * 0.45;
        ctx.beginPath();
        ctx.fillStyle = `rgba(106,227,240,${glow.toFixed(2)})`;
        ctx.shadowColor = "rgba(106,227,240,0.9)";
        ctx.shadowBlur = 5 + activeEase * 6;
        ctx.arc(d.x, d.y, 1.6, 0, Math.PI * 2);
        ctx.fill();
      });

      // leve halo geral seguindo o cursor (campo visual gerado pela logo, não um brilho solto)
      if (activeEase > 0.02) {
        const grad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, Math.max(w, h) * 0.42);
        grad.addColorStop(0, `rgba(106,227,240,${(0.14 * activeEase).toFixed(3)})`);
        grad.addColorStop(1, "rgba(106,227,240,0)");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);
      }
    }
    if (N > 0) loop();
    else if (!REDUCED_MOTION) {
      // sem partículas (low power), mas mantém o realce simples ao passar o mouse
      el.addEventListener("pointerenter", () => el.classList.add("is-active"), { passive: true });
      el.addEventListener("pointerleave", () => el.classList.remove("is-active"), { passive: true });
    }
  }

  function isElementInViewport(el) {
    const r = el.getBoundingClientRect();
    return r.bottom > 0 && r.top < window.innerHeight;
  }

  /* ---------- 8. CENAS 3D ---------- */
  // Fábrica compartilhada: cria renderer + câmera + luzes, pausa fora da viewport e em tabs ocultas.
  function createScene(container) {
    const THREE = window.THREE;
    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(0, 0.4, 6);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const key = new THREE.PointLight(0x6ae3f0, 3.2, 20);
    key.position.set(3, 3, 4);
    scene.add(key);
    const rim = new THREE.PointLight(0x2f6fed, 2.4, 20);
    rim.position.set(-4, -2, -3);
    scene.add(rim);
    scene.add(new THREE.AmbientLight(0x1a2540, 1.1));

    let visible = true;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => (visible = e.isIntersecting)),
      { threshold: 0.05 }
    );
    io.observe(container);

    function onResize() {
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (!w || !h) return;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    }
    window.addEventListener("resize", onResize, { passive: true });

    return { THREE, scene, camera, renderer, isVisible: () => visible && !document.hidden };
  }

  // Logo 3D — dois losangos com cantos arredondados (a marca Alfa Creative Agency),
  // extrudados com bisel. Construída por código a partir das proporções da logo
  // plana (assets/images/logo-mark.webp), não de um .glb — não precisa de nenhum
  // arquivo externo, sempre funciona (inclusive em file://, sem o aviso de CORS
  // que o GLTFLoader tem). Reaproveita os dois MeshPhysicalMaterial já usados no
  // resto do site (vidro para o losango claro, metal+glow para o ciano) em vez
  // de neon — pedido explícito do cliente é a logo ficar "premium", não neon.
  function buildLogo3D(THREE) {
    const group = new THREE.Group();

    function roundedSquareShape(size, radius) {
      const s = size / 2;
      const r = radius;
      const shape = new THREE.Shape();
      shape.moveTo(-s + r, -s);
      shape.lineTo(s - r, -s);
      shape.quadraticCurveTo(s, -s, s, -s + r);
      shape.lineTo(s, s - r);
      shape.quadraticCurveTo(s, s, s - r, s);
      shape.lineTo(-s + r, s);
      shape.quadraticCurveTo(-s, s, -s, s - r);
      shape.lineTo(-s, -s + r);
      shape.quadraticCurveTo(-s, -s, -s + r, -s);
      return shape;
    }

    const SIZE = 1.55;
    const OFFSET = SIZE * 0.66;
    const geo = new THREE.ExtrudeGeometry(roundedSquareShape(SIZE, SIZE * 0.16), {
      depth: 0.22,
      bevelEnabled: true,
      bevelThickness: 0.035,
      bevelSize: 0.035,
      bevelSegments: 4,
      curveSegments: 8,
    });
    geo.center();

    const whiteMat = new THREE.MeshPhysicalMaterial({
      color: 0xeef3fa,
      metalness: 0.1,
      roughness: 0.16,
      clearcoat: 1,
      clearcoatRoughness: 0.1,
      transmission: 0.22,
      thickness: 0.5,
      emissive: 0x0b1220,
      emissiveIntensity: 0.05,
    });
    const white = new THREE.Mesh(geo, whiteMat);
    white.rotation.z = Math.PI / 4;
    white.position.set(-OFFSET / 2, 0, -0.05);
    group.add(white);

    const cyanMat = new THREE.MeshPhysicalMaterial({
      color: 0x37c9dd,
      metalness: 0.55,
      roughness: 0.2,
      clearcoat: 1,
      clearcoatRoughness: 0.15,
      emissive: 0x1ec2d6,
      emissiveIntensity: 0.5,
    });
    const cyan = new THREE.Mesh(geo, cyanMat);
    cyan.rotation.z = Math.PI / 4;
    cyan.position.set(OFFSET / 2, -SIZE * 0.03, 0.05);
    group.add(cyan);

    group.scale.setScalar(1.05);
    return group;
  }

  // Objeto genérico (icosaedro + wireframe + anel) usado nesta cena em duas situações:
  // 1) fallback caso assets/models/dji-drone.glb não exista ou não carregue (file://, erro de rede);
  // 2) mesmo com o drone real carregado, o wireframe/anel deste objeto são reaproveitados como
  //    a "gaiola" de modelagem ao redor do drone (ver initCgiScene) — não precisou duplicar a lógica.
  function buildCgiObject(THREE) {
    const group = new THREE.Group();
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0x0d1a2c,
      metalness: 0.2,
      roughness: 0.12,
      transmission: 0.55,
      thickness: 0.6,
      clearcoat: 1,
      emissive: 0x0d3a4a,
      emissiveIntensity: 0.35,
    });
    const core = new THREE.Mesh(new THREE.IcosahedronGeometry(1, 1), glassMat);
    group.add(core);

    const wireMat = new THREE.MeshBasicMaterial({ color: 0x6ae3f0, wireframe: true, transparent: true, opacity: 0.35 });
    const wire = new THREE.Mesh(new THREE.IcosahedronGeometry(1.28, 1), wireMat);
    group.add(wire);

    const ringMat = new THREE.MeshBasicMaterial({ color: 0x2f6fed, transparent: true, opacity: 0.55 });
    const ring = new THREE.Mesh(new THREE.TorusGeometry(1.7, 0.006, 8, 64), ringMat);
    ring.rotation.x = Math.PI / 2.4;
    group.add(ring);
    group.userData.ring = ring;

    return group;
  }

  // Leituras do HUD ao redor do drone — variam suavemente para parecer telemetria "viva".
  function initDroneHud() {
    if (REDUCED_MOTION) return;
    const alt = document.querySelector("[data-drone-altitude]");
    const spd = document.querySelector("[data-drone-speed]");
    const gmb = document.querySelector("[data-drone-gimbal]");
    if (!alt && !spd && !gmb) return;
    setInterval(() => {
      if (alt) alt.textContent = Math.round(118 + Math.random() * 12) + "m";
      if (spd) spd.textContent = Math.round(36 + Math.random() * 12) + " km/h";
      if (gmb) gmb.textContent = "-" + Math.round(8 + Math.random() * 8) + "°";
    }, 2600);
  }

  // Antes carregava o drone (procedural ou .glb real) neste palco. A pedido do cliente,
  // essa cena agora mostra a logo em 3D (buildLogo3D acima), girando e reagindo ao mouse —
  // mesmo motor de câmera/luz/partículas/easing de mouse que o drone usava (createScene +
  // o mesmo padrão de mouseTarget/mouseEased), só trocando o que é construído e animado.
  function initLogoScene3D() {
    const container = document.getElementById("drone-stage");
    if (!container) return;
    if (!ALLOW_3D) return; // fallback CSS glow já está no markup
    container.classList.add("has-3d");
    const glow = container.querySelector(".cgi-fallback-glow");
    if (glow) glow.style.display = "none";
    const shadow = container.querySelector(".drone-shadow");

    const { THREE, scene, camera, renderer, isVisible } = createScene(container);

    const target = buildLogo3D(THREE);
    target.rotation.x = -0.16;
    target.rotation.y = 0.32;
    target.position.x = 0.35; // afasta um pouco do canto onde fica o painel HUD esquerdo
    scene.add(target);

    // partículas discretas ao redor da logo (mesma técnica do drone)
    const particleGeo = new THREE.BufferGeometry();
    const particleCount = 16;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const a = (i / particleCount) * Math.PI * 2;
      const r = 1.6 + Math.random() * 0.6;
      positions[i * 3] = Math.cos(a) * r;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 1.2;
      positions[i * 3 + 2] = Math.sin(a) * r;
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particles = new THREE.Points(
      particleGeo,
      new THREE.PointsMaterial({ color: 0x6ae3f0, size: 0.028, transparent: true, opacity: 0.4 })
    );
    scene.add(particles);

    // mouse com atraso (easing) — nunca acompanha bruscamente.
    // Posição relativa ao PRÓPRIO palco da logo (não à janela inteira): o efeito responde
    // a "passar o mouse ali" como pedido, ficando mais forte perto do centro do elemento
    // e no máximo (clampado) quando o cursor está fora dele.
    const mouseTarget = { x: 0, y: 0 };
    const mouseEased = { x: 0, y: 0 };
    window.addEventListener(
      "pointermove",
      (e) => {
        const r = container.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        mouseTarget.x = Math.min(1, Math.max(-1, (e.clientX - cx) / (r.width / 2)));
        mouseTarget.y = Math.min(1, Math.max(-1, (e.clientY - cy) / (r.height / 2)));
      },
      { passive: true }
    );

    // aumenta o glow/luz quando o mouse está exatamente sobre o palco da logo
    let hovered = false;
    container.addEventListener("pointerenter", () => (hovered = true), { passive: true });
    container.addEventListener("pointerleave", () => (hovered = false), { passive: true });
    const key = scene.children.find((c) => c.isPointLight && c.color.getHex() === 0x6ae3f0);
    let glowBoost = 0;

    let t = 0;
    function animate() {
      requestAnimationFrame(animate);
      if (!isVisible()) return;
      t += 0.008;

      // easing: a rotação "sentida" pela logo persegue o mouse com atraso (lerp lento = flutuação)
      mouseEased.x += (mouseTarget.x - mouseEased.x) * 0.045;
      mouseEased.y += (mouseTarget.y - mouseEased.y) * 0.045;

      const bob = Math.sin(t * 1.1) * 0.14;
      target.position.y = bob;
      // rotação contínua e constante (não para nunca, nunca inverte) + o mouse acelera/desacelera
      // o giro e inclina/rola o objeto — resposta bem mais perceptível que antes.
      target.rotation.y += 0.0034 + mouseEased.x * 0.0027;
      target.rotation.x = -0.16 + Math.sin(t * 0.5) * 0.03 - mouseEased.y * 0.38;
      target.rotation.z = mouseEased.x * 0.16;
      // leve "aproximação" ao passar o mouse — reforça a sensação de resposta direta
      const mouseMag = Math.min(1, Math.hypot(mouseEased.x, mouseEased.y));
      target.scale.setScalar(1.05 + mouseMag * 0.05);

      particles.rotation.y += 0.0009;
      particles.position.y = bob * 0.6;

      glowBoost += ((hovered ? 1 : 0) - glowBoost) * 0.08;
      if (key) key.intensity = 3.2 + glowBoost * 2.2;
      if (shadow) {
        const s = 1 - Math.abs(bob) * 0.4 + glowBoost * 0.15;
        shadow.style.transform = `translateX(-50%) scale(${s.toFixed(3)})`;
        shadow.style.opacity = String(0.7 + glowBoost * 0.3);
      }

      renderer.render(scene, camera);
    }
    animate();
  }

  function smoothstep(a, b, x) {
    const v = Math.min(1, Math.max(0, (x - a) / (b - a)));
    return v * v * (3 - 2 * v);
  }

  // Progresso de leitura da seção CGI/VFX (0 = ainda não entrou, 1 = já passou) — usado para
  // fazer o objeto 3D evoluir de wireframe cru até totalmente "renderizado" junto com o scroll.
  function sectionProgress(el) {
    const r = el.getBoundingClientRect();
    const vh = window.innerHeight || 1;
    const total = r.height + vh;
    const passed = vh - r.top;
    return Math.min(1, Math.max(0, passed / total));
  }

  // Roda a mesma narrativa de scroll (MODEL → LIGHT → ANIMATE → COMPOSITE) tanto para o
  // fallback procedural quanto para o drone real — só o que cada uma anima muda (ver chamadas
  // de startCgiAnimation() dentro de initCgiScene()).
  function startCgiAnimation({ scene, camera, renderer, isVisible, section, steps, obj, wireItems, coreItems, ring, baseTiltX }) {
    let t = 0;
    function animate() {
      requestAnimationFrame(animate);
      if (!isVisible()) return;
      t += 0.006;

      const p = section ? sectionProgress(section) : 1;
      // MODEL (0–0.25): só o wireframe/silhueta, o objeto real praticamente invisível
      // LIGHT (0.25–0.5): o objeto ganha luz/emissão
      // ANIMATE (0.5–0.75): a rotação acelera
      // COMPOSITE (0.75–1): cena "renderizada" — objeto opaco, anel de câmera visível
      const lightP = smoothstep(0.2, 0.55, p);
      const animP = smoothstep(0.45, 0.8, p);
      const compP = smoothstep(0.68, 1, p);

      wireItems.forEach((w) => {
        w.material.opacity = 0.75 - compP * 0.5;
      });
      coreItems.forEach((c) => {
        const baseOpacity = c.baseOpacity != null ? c.baseOpacity : 1;
        c.material.opacity = baseOpacity * (0.12 + lightP * 0.7 + compP * 0.18);
        if (c.material.emissive) {
          c.material.emissiveIntensity = (c.baseEmissiveIntensity || 0) + lightP * 0.5;
        }
      });
      if (ring) ring.material.opacity = compP * 0.55;

      const spin = 0.0015 + animP * 0.006;
      obj.rotation.y += spin;
      obj.rotation.x = (baseTiltX || 0) + Math.sin(t) * 0.15;
      if (ring) ring.rotation.z += 0.0018 + animP * 0.003;

      if (steps.length === 4) {
        const activeIdx = Math.min(3, Math.floor(p * 4));
        steps.forEach((s, i) => s.classList.toggle("is-active", i === activeIdx));
      }

      renderer.render(scene, camera);
    }
    animate();
  }

  function initCgiSceneFallback(sceneCtx) {
    const { THREE, scene, section, steps } = sceneCtx;
    const obj = buildCgiObject(THREE);
    scene.add(obj);
    const wire = obj.children.find((c) => c.material && c.material.wireframe);
    const core = obj.children.find((c) => c.geometry && c.geometry.type === "IcosahedronGeometry" && !c.material.wireframe);
    if (core) core.material.transparent = true;
    startCgiAnimation({
      ...sceneCtx,
      obj,
      wireItems: wire ? [wire] : [],
      coreItems: core ? [{ material: core.material, baseOpacity: 1, baseEmissiveIntensity: 0.08 }] : [],
      ring: obj.userData.ring,
    });
  }

  // Carrega o drone real (assets/models/dji-drone.glb, enviado pelo cliente — geometria
  // otimizada: 672 meshes originais foram unidos em 8 draw calls via gltf-transform, texturas
  // redimensionadas para 1024px) e devolve ele já centralizado na origem e escalado para
  // targetSize (maior dimensão da bounding box, em unidades de cena). Compartilhado pela
  // cena de CGI/VFX (com a "gaiola" de wireframe) e pela cena do Hero (drone sozinho, sem
  // gaiola, sempre totalmente visível) — evita duplicar a lógica de load/normalização.
  // onLoad(droneScaledGroup, coreItems) — coreItems é a lista de materiais (com opacidade/
  // emissivo originais salvos) pra quem quiser animar opacidade depois (ver startCgiAnimation).
  function loadDroneGLB(THREE, targetSize, onLoad, onError) {
    if (location.protocol === "file:") return false; // fetch do GLTFLoader não funciona em file://
    if (!window.THREE || !THREE.GLTFLoader) return false;

    const loader = new THREE.GLTFLoader();
    loader.load(
      "assets/models/dji-drone.glb",
      (gltf) => {
        const drone = gltf.scene;

        // Centraliza na origem e normaliza a escala — a geometria real vem em metros (~0.3m).
        const box = new THREE.Box3().setFromObject(drone);
        const size = new THREE.Vector3();
        box.getSize(size);
        const center = new THREE.Vector3();
        box.getCenter(center);
        drone.position.sub(center);
        const maxDim = Math.max(size.x, size.y, size.z) || 1;
        const scale = targetSize / maxDim;

        const droneScaled = new THREE.Group();
        droneScaled.add(drone);
        droneScaled.scale.setScalar(scale);

        const coreItems = [];
        drone.traverse((child) => {
          if (!child.isMesh || !child.material) return;
          const mats = Array.isArray(child.material) ? child.material : [child.material];
          mats.forEach((mat) => {
            mat.transparent = true;
            coreItems.push({
              material: mat,
              baseOpacity: mat.opacity != null ? mat.opacity : 1,
              baseEmissiveIntensity: mat.emissiveIntensity || 0,
            });
          });
        });

        onLoad(droneScaled, coreItems);
      },
      undefined,
      () => onError()
    );
    return true;
  }

  // Mostra o drone real dentro da mesma narrativa MODEL→LIGHT→ANIMATE→COMPOSITE que a cena já
  // tinha: a "gaiola" de wireframe/anel de buildCgiObject() fica em volta do drone e cada
  // material dele ganha transparent:true pra poder entrar em opacidade progressiva com o scroll.
  function initCgiSceneDrone(sceneCtx) {
    const { THREE, scene } = sceneCtx;
    const loading = loadDroneGLB(
      THREE,
      2.7,
      (droneScaled, coreItems) => {
        // "outer" é o que gira/inclina (ver startCgiAnimation abaixo). O drone entra escalado;
        // a gaiola de wireframe/anel entra separada, direto em "outer", em unidades de mundo
        // (raio ~1.28/1.7) — do contrário ela herdaria a escala do drone e ficaria gigante.
        const outer = new THREE.Group();
        outer.rotation.set(0.18, 0.6, 0);
        outer.add(droneScaled);

        const cage = buildCgiObject(THREE);
        const cageCore = cage.children.find((c) => c.geometry && c.geometry.type === "IcosahedronGeometry" && !c.material.wireframe);
        if (cageCore) cage.remove(cageCore); // não precisamos do núcleo de vidro do fallback aqui
        outer.add(cage);

        scene.add(outer);

        const wire = cage.children.find((c) => c.material && c.material.wireframe);
        startCgiAnimation({
          ...sceneCtx,
          obj: outer,
          wireItems: wire ? [wire] : [],
          coreItems,
          ring: cage.userData.ring,
          baseTiltX: 0.18,
        });
      },
      () => {
        // .glb ausente/corrompido/erro de rede — cai no fallback procedural, mesma lógica
        // silenciosa que o resto do site já usa para modelos 3D reais.
        initCgiSceneFallback(sceneCtx);
      }
    );
    return loading;
  }

  function initCgiScene() {
    const container = document.getElementById("cgi-stage");
    const section = document.getElementById("cgi");
    if (!container) return;
    if (!ALLOW_3D) return;
    container.classList.add("has-3d");
    const glow = container.querySelector(".cgi-fallback-glow");
    if (glow) glow.style.display = "none";
    const steps = section ? Array.from(section.querySelectorAll(".cgi-step")) : [];

    const { THREE, scene, camera, renderer, isVisible } = createScene(container);
    const sceneCtx = { THREE, scene, camera, renderer, isVisible, section, steps };

    const loading = initCgiSceneDrone(sceneCtx);
    if (!loading) initCgiSceneFallback(sceneCtx);
  }

  /* ---------- 9. INIT ---------- */

function initVision() {
  initLiquidBackground();
  initGlassPointer();
  initNavbar();
  initScrollReveal();
  initHudCyclers();
  initHeroDepth();
  initHeroRobotVideo();
  initCardTilt();
  initPortfolioVideo();
  initLogoSignature();
  initLogoScene3D();
  initCgiScene();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initVision, { once: true });
} else {
  initVision();
}

})();
