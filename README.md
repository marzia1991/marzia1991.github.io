<!-- saved from url=(0081)https://raw.githubusercontent.com/cvdlab-cg/438541/master/final-project/Readme.md -->
<html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">**COMPUTATIONAL GRAPHICS - FINAL PROJECT**
=======================================

Marzia Dominici - 439474
--------------------------

[Avvia il progetto] (https://marzia1991.github.io/)

**Code organization :**

* [index](index.html): pagina html di avvio in cui viene inizializzata la scena.
* [animation](script/animation.js): gestisce alcune delle maggiori animazioni del progetto.
* [animationFireplace] (script/animationFireplace.js): gestisce l'animazione del fuoco.
* [arredamento] (script/arredamento.js) : carico la maggior parte degli oggetti presenti nella casa.
* [doors] (script/doors.js) : realizza ttte le porte della casa gestendo anche le aperture e le chiusure
* [floors] (script/floors.js) : realizza tutti i pavimenti della casa applicando specifiche texture.
* [function] (script/function.js) : insieme di funzioni utili per l'intero progetto
* [init] (script/init.js) : crea la casa importanto l'obj realizzato in lar.
* [ligth] (script/ligth.js) : realizza tutti gli interruttori e le luci della casa
* [skybox](script/skybox.js) : realizza il panorama che circonda la casa
* [videoesuoni] (script/videoesuoni.js) : carica tutti i video e i suoni per l'intero progetto
* [walls] (script/walls.js) : applica le texture di tutte le pareti della casa, che siano maioliche o carta da parati
* [windows] (script/windows.js) : realizza tutte le finestre della casa
=======

**Graphic techniques :**

* STATIC TEXTURES: per pareti e pavimenti 
* VIDEO TEXTURE: per la tv e il computer
* AUDIO: per lo stereo, il ferro da stiro, la moto, la macchinetta del caffè l'allarme per la cassaforte e quello antincendio
* SKYBOX:intorno alla casa
* AUDIO FADING: per il video
* SPOTLIGH: presenti in ogni stanza 
* GUI CONTROLS
* OBJ + MTL IMPORT for room detailing
* **AUTOMATIZED ROOM LIGHTS** 
* **POINTER LOCK CAMERA**  con possibilità di switch tra una visuale e l'altra
* **PARTICLE ENGINE**: per il fuoco nel camino, il fumo e l'acqua che spenge il fuoco
* **OBJECT PICKING**: si possono aprire porte e finestre e interagire con gli oggetti in casa
* **TWEEN: utilizzato per animazioni**

</pre></body></html>
