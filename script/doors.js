//porta cameretta
/*var door1 = createMesh(new THREE.BoxGeometry(0.3,0.8,1.98),"porta2.jpg");
var perno1 =new THREE.Object3D();
perno1.add(door1);
door1.position.set(-0.05,0.4,1);
perno1.position.set(6.1,5.2,0.31);
door1.perno1=perno1;
door1.interact=function(){ perno1.rotation.z=-Math.PI/2;};
House.add(perno1);

//porta camera mamma
var door2 = createMesh(new THREE.BoxGeometry(0.3,0.8,1.98),"porta2.jpg");
var perno2 =new THREE.Object3D();
perno2.add(door2);
door2.position.set(-0.05,0.4,1);
perno2.position.set(6.1,9.4,0.31);
door2.perno2=perno2;
door2.interact=function(){ perno2.rotation.z=-Math.PI/2;};
House.add(perno2);

//porta bagno1
var door3 = createMesh(new THREE.BoxGeometry(0.2,0.8,1.98),"porta2.jpg");
var perno3 =new THREE.Object3D();
perno3.add(door3);
door3.position.set(0.1,0.4,1);
perno3.position.set(4.4,9.4,0.31);
door3.perno3=perno3;
door3.interact=function(){ perno3.rotation.z=Math.PI/2;};
House.add(perno3);

//porta bagno2
var door4 = createMesh(new THREE.BoxGeometry(0.2,0.8,1.98),"porta2.jpg");
var perno4 =new THREE.Object3D();
perno4.add(door4);
door4.position.set(0.1,0.4,1);
perno4.position.set(4.4,11.6,0.31);
door4.perno4=perno4;
door4.interact=function(){ perno4.rotation.z=Math.PI/2;};
House.add(perno4);

//porta cucina
/*var door5 = createMesh(new THREE.BoxGeometry(0.8,0.2,1.98),"porta3.jpg");
var perno5 =new THREE.Object3D();
perno5.add(door5);
perno5.rotation.z=Math.PI;
door5.position.set(0.4,0.1,1);
perno5.position.set(3.4,4.6,0.31);
door5.perno5=perno5;
door5.interact=function(){ perno5.rotation.z=Math.PI/2;};*/
//House.add(perno5);*/

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
//makeFrontDoor(hook7,'frontDoorDark',1.25,1.56,1.4,9.24,0.2,0.05,0,0);
makeFrontDoor(hook7,'frontDoorDark',1.25,1.56,1.4,9.27,0.3,0.311,0,0);
var hook8 = new THREE.Object3D();
makeFrontDoor(hook8,'frontDoorDark',1.25,1.56,1.4,7.63,0.28,0.311,Math.PI,1);
//makeFrontDoor(hook8,'frontDoorDark',1.25,1.56,1.4,8.42,0.2,0.05,0,0);

//porta camera mia
/*var door6 = createMesh(new THREE.BoxGeometry(0.8,0.2,1.98),"porta3.jpg");
var perno6 =new THREE.Object3D();
perno6.add(door6);
perno6.rotation.z=Math.PI;
door6.position.set(0.4,0.1,1);
perno6.position.set(5.65,13.2,0.31);
door6.perno6=perno6;
door6.interact=function(){ perno6.rotation.z=Math.PI/2;};
House.add(perno6);*/

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

//prima anta
/*var door7 = createMesh(new THREE.BoxGeometry(0.9,0.15,1.98),"antabis.jpg");
var perno7 =new THREE.Object3D();
perno7.add(door7);
door7.position.set(0.45,-0.2,1);
perno7.position.set(7.55,0.4,0.31);
door7.perno7=perno7;
door7.interact=function(){ perno7.rotation.z=Math.PI/2;};*/
//House.add(perno7);

//seconda anta
var door8 = createMesh(new THREE.BoxGeometry(0.9,0.15,1.98),"anta1.jpg");
var perno8 =new THREE.Object3D();
perno8.add(door8);
perno8.rotation.z=Math.PI;
door8.position.set(0.45,0.2,1);
perno8.position.set(9.35,0.4,0.31);
door8.perno8=perno8;
door8.interact=function(){ perno8.rotation.z=Math.PI/2;};
//House.add(perno8);