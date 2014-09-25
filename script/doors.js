//porta cucina
var hook1 = new THREE.Object3D();
makeDoor(hook1,'puerta',0.0092,0.0096,0.028,3,3.55,0.31,0,0);

//porta camera mia
var hook2 = new THREE.Object3D();
makeDoor(hook2,'puerta',0.0092,0.0096,0.028,5.25,12.15,0.31,0,0);

//porta cameretta
var hook3 = new THREE.Object3D();
makeDoor(hook3,'puerta',0.0092,0.0096,0.028,7,5.6,0.31,Math.PI/2,1);

//porta camera mamma
var hook4 = new THREE.Object3D();
makeDoor(hook4,'puerta',0.0092,0.0096,0.028,7,9.8,0.31,Math.PI/2,1);

//porta bagno1
var hook5 = new THREE.Object3D();
makeDoor(hook5,'puerta',0.0092,0.0096,0.028,5.45,9.8,0.31,Math.PI/2,2);

//porta bagno2
var hook6 = new THREE.Object3D();
makeDoor(hook6,'puerta',0.0092,0.0096,0.028,5.45,12,0.31,Math.PI/2,2);

//porta ingresso
var hook7 = new THREE.Object3D();
makeFrontDoor(hook7,'frontDoorDark',1.25,1.56,1.4,9.27,0.3,0.311,0,0);
var hook8 = new THREE.Object3D();
makeFrontDoor(hook8,'frontDoorDark',1.25,1.56,1.4,7.63,0.28,0.311,Math.PI,1);

//portone della sala
//telaio del portone
var telaio1 =  createMesh(new THREE.BoxGeometry(0.2,0.5,1.9),"Wood1.jpg");
telaio1.position.set(7.52,0.2,1.26);
House.add(telaio1);

var telaio2 =  createMesh(new THREE.BoxGeometry(0.2,0.5,1.9),"Wood1.jpg");
telaio2.position.set(9.37,0.2,1.26);
House.add(telaio2);

var telaio3 =  createMesh(new THREE.BoxGeometry(2.05,0.5,0.2),"Wood1.jpg");
telaio3.position.set(8.445,0.2,2.3);
House.add(telaio3);

//ante
var door8 = createMesh(new THREE.BoxGeometry(0.9,0.15,1.98),"anta1.jpg");
var perno8 =new THREE.Object3D();
perno8.add(door8);
perno8.rotation.z=Math.PI;
door8.position.set(0.45,0.2,1);
perno8.position.set(9.35,0.4,0.31);
door8.perno8=perno8;
door8.interact=function(){ perno8.rotation.z=Math.PI/2;};