# Modelo 3D do drone DJI

Coloque aqui o arquivo:

    dji-drone.glb

Caminho completo esperado pelo código:

    /assets/models/dji-drone.glb

Assim que esse arquivo existir, js/main.js (função initDroneScene) carrega o modelo
automaticamente via THREE.GLTFLoader e a interação de mouse já builtada passa a
funcionar sobre o modelo real, sem nenhuma alteração de código necessária.
Se o arquivo não existir, o site usa o drone procedural (gerado em código) como
fallback — o site nunca quebra por falta do .glb.

⚠️ IMPORTANTE — file:// vs. servidor local:
Navegadores bloqueiam por segurança o carregamento de arquivos via fetch/XHR quando a
página é aberta direto como arquivo (duplo clique, file://). Isso significa que o .glb
só é carregado de fato quando o site roda em um servidor — local ou em produção. Para
testar localmente, rode dentro da pasta do site algo como:

    python3 -m http.server 8080

e abra http://localhost:8080 no navegador. Assim que o site estiver publicado
normalmente (qualquer hospedagem real), o .glb carrega sem nenhuma configuração extra.

Recomendações para o modelo:
- Formato .glb (binário, single-file) de preferência a .gltf + texturas soltas.
- Malha otimizada (idealmente < 50k triângulos) para manter performance em mobile.
- Escala aproximada de 1 unidade Three.js = 1 metro; o código reescala automaticamente
  para caber no palco 3D, mas uma escala realista evita ajustes manuais.
- Sem animações embutidas necessárias — a rotação/flutuação é feita via código.
