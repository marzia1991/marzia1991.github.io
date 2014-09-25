//finestra cucina
var f1cucina= creaWindow(0.26,5.3,1.31,1);
House.add(f1cucina);

var f2cucina= creaWindow(0.15,7.1,1.31,2);
f2cucina.rotation.z=Math.PI;
House.add(f2cucina);

//finestre bagni
var fbagno1= creaWindow(0.26,9.4,1.31,1);
House.add(fbagno1);

var fbagno2= creaWindow(0.26,11.6,1.31,1);
House.add(fbagno2);

//finestre sala
var f1sala= creaWindow(3.3,0.25,1.31,0);
f1sala.rotation.z=Math.PI/2;
House.add(f1sala);

var f2sala= creaWindow(1.5,0.15,1.31,3);
f2sala.rotation.z=3*Math.PI/2;
House.add(f2sala);

//finestre camera mia
var f1cam= creaWindow(4.3,16.95,1.31,4);
f1cam.rotation.z=Math.PI/2;
House.add(f1cam);

var f2cam= creaWindow(2.5,16.85,1.31,5);
f2cam.rotation.z=3*Math.PI/2;
House.add(f2cam);

//portafinestra cameretta
var hookpf1 = new THREE.Object3D();
makeDoor(hookpf1,'puerta',0.012,0.0096,0.028,11.9,6.6,0.31,Math.PI/2,1,true);

//portafinestra camera mamma
var hookpf2 = new THREE.Object3D();
makeDoor(hookpf2,'puerta',0.012,0.0096,0.028,11.9,13.8,0.31,Math.PI/2,1,true);
