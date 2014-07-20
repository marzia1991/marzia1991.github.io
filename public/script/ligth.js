// luci della sala 
//luce divano
var int1Geom = new THREE.BoxGeometry(0.1,0.1,0.1);
var int1Mat = new THREE.MeshLambertMaterial({color: 0x5C3317});
var int1 = new THREE.Mesh(int1Geom,int1Mat);
int1.visible=false;
int1.position.set(6.5,4.4,1.4);
House.add(int1);
crealuce(int1, 2, -2, 1);
loadObjMtl('interrupteur',0.02,6.5,4.39,1.4);
loadObjMtl('hangingLight',0.015,7.5,2.4,2.742);

//luce tavolo
var int2Geom = new THREE.BoxGeometry(0.1,0.1,0.1);
var int2Mat = new THREE.MeshLambertMaterial({color: 0x5C3317});
var int2 = new THREE.Mesh(int2Geom,int2Mat);
int2.visible=false;
int2.position.set(6.3,4.39,1.4);
House.add(int2);
crealuce(int2, -3, -2, 1);
loadObjMtl('interrupteur',0.02,6.3,4.39,1.4);
loadObjMtl('hangingLight',0.015,2.4,2.4,2.742);

//luce cucina
var int3Geom = new THREE.BoxGeometry(0.1,0.1,0.1);
var int3Mat = new THREE.MeshLambertMaterial({color: 0x5C3317});
var int3 = new THREE.Mesh(int3Geom,int3Mat);
int3.visible=false;
int3.position.set(4.2,4.39,1.4);
House.add(int3);
crealuce(int3, -2, 3, 1);
loadObjMtl('interrupteur',0.02,4.2,4.39,1.4);
loadObjMtl('ceilingFan',0.012,1.85,7.5,2.785);

//luce bagno1
var int4Geom = new THREE.BoxGeometry(0.1,0.1,0.1);
var int4Mat = new THREE.MeshLambertMaterial({color: 0x5C3317});
var int4 = new THREE.Mesh(int4Geom,int4Mat);
int4.visible=false;
int4.position.set(4.61,10.6,1.4);
House.add(int4);
crealuce(int4, -2.5, -1, 1);
loadObjMtl2('interrupteur',0.02,4.61,10.6,1.4,Math.PI/2);
loadObjMtl('hangingLight',0.015,2.8,10,2.75);

//luce bagno2
var int5Geom = new THREE.BoxGeometry(0.1,0.1,0.1);
var int5Mat = new THREE.MeshLambertMaterial({color: 0x5C3317});
var int5 = new THREE.Mesh(int5Geom,int5Mat);
int5.visible=false;
int5.position.set(4.61,11.1,1.4);
House.add(int5);
crealuce(int5, -2.5, 1, 1);
loadObjMtl2('interrupteur',0.02,4.61,11.1,1.4,Math.PI/2);
loadObjMtl('hangingLight',0.015,2.8,12,2.75);

//luce camera mamma
var int6Geom = new THREE.BoxGeometry(0.1,0.1,0.1);
var int6Mat = new THREE.MeshLambertMaterial({color: 0x5C3317});
var int6 = new THREE.Mesh(int6Geom,int6Mat);
int6.visible=false;
int6.position.set(6.21,10.5,1.4);
House.add(int6);
crealuce(int6, 2.2, 2, 1.2);
loadObjMtl2('interrupteur',0.02,6.21,10.5,1.4,Math.PI/2);
loadObjMtl('hangingLight',0.015,8,12,2.75);

//luce cameretta
var int7Geom = new THREE.BoxGeometry(0.1,0.1,0.1);
var int7Mat = new THREE.MeshLambertMaterial({color: 0x5C3317});
var int7 = new THREE.Mesh(int7Geom,int7Mat);
int7.visible=false;
int7.position.set(6.21,6.5,1.4);
House.add(int7);
crealuce(int7, 2.2, 0, 1);
loadObjMtl2('interrupteur',0.02,6.21,6.5,1.4,Math.PI/2);
loadObjMtl('hangingLight',0.015,8,7,2.75);

//luce camera mia
var int8Geom = new THREE.BoxGeometry(0.1,0.1,0.1);
var int8Mat = new THREE.MeshLambertMaterial({color: 0x5C3317});
var int8 = new THREE.Mesh(int8Geom,int8Mat);
int8.visible=false;
int8.position.set(4.65,13.21,1.4);
House.add(int8);
crealuce(int8, -1, 2, 1);
loadObjMtl2('interrupteur',0.02,4.65,13.21,1.4,Math.PI);
loadObjMtl('hangingLight',0.015,2.8,15.2,2.75);

//luce corridoio
var int9Geom = new THREE.BoxGeometry(0.1,0.1,0.1);
var int9Mat = new THREE.MeshLambertMaterial({color: 0x5C3317});
var int9 = new THREE.Mesh(int9Geom,int9Mat);
int9.visible=false;
int9.position.set(5.89,4.95,1.4);
House.add(int9);
crealuce(int9, -0.5, 4, 1);
loadObjMtl2('interrupteur',0.02,5.89,4.95,1.4,3*Math.PI/2);
loadObjMtl('hangingLight',0.015,5,9.2,2.75);

//lampione ingresso casa
loadObjMtl('porch-light',0.2,10,-0.15,2);

//lampioni
loadObjMtl('classic-lamppost',.1,-1,-1,0);
loadObjMtl('classic-lamppost',.1,12,-1,0);
