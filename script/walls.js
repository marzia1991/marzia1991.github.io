//muri della sala 
      
var m1sala= createMeshRic(new THREE.ShapeGeometry(drawShape(0,0,3,0,3,4,0,4)),"carta2.jpg");
m1sala.rotation.y=-Math.PI/2;
m1sala.position.set(0.41,0.4,0.31);
House.add(m1sala);

var shape1=drawShape(0,0,10.3,0,10.3,3,0,3);
var hole1=drawShape(7.15,0,8.95,0,8.95,2,7.15,2);
var hole2=drawShape(1.1,1,1.9,1,1.9,2,1.1,2);
var hole3=drawShape(2.1,1,2.9,1,2.9,2,2.1,2);
shape1.holes.push(hole1);
shape1.holes.push(hole2);
shape1.holes.push(hole3);
var m2sala= createMeshRic(new THREE.ShapeGeometry(shape1),"carta2.jpg");
      
m2sala.rotation.x=Math.PI/2;
m2sala.position.set(0.4,0.41,0.31);
House.add(m2sala);

var m3sala= createMeshRic(new THREE.ShapeGeometry(drawShape(0,0,3,0,3,4,0,4)),"carta2.jpg");
m3sala.rotation.y=-Math.PI/2;
m3sala.position.set(10.69,0.4,0.31);
House.add(m3sala);

var shape2=drawShape(0,0,10.3,0,10.3,3,0,3);
var hole4=drawShape(4.2,0,5.5,0,5.5,2.9999,4.2,2.9999);
var hole5=drawShape(2.2,0,3,0,3,2,2.2,2);
shape2.holes.push(hole4);
shape2.holes.push(hole5);
var m4sala= createMeshRic(new THREE.ShapeGeometry(shape2),"carta2.jpg");

m4sala.rotation.x=Math.PI/2;
m4sala.position.set(0.4,4.39,0.31);
House.add(m4sala);

//muri del corridoio
var shape3=drawShape(0,0,3,0,3,8.6,0,8.6);
var hole6=drawShape(0,5,2,5,2,5.8,0,5.8);
var hole7=drawShape(0,7.2,2,7.2,2,8,0,8);
shape3.holes.push(hole6);
shape3.holes.push(hole7);
var m1corridoio= createMeshRic(new THREE.ShapeGeometry(shape3),"carta2.jpg");
m1corridoio.rotation.y=-Math.PI/2;
m1corridoio.position.set(4.61,4.4,0.31);
House.add(m1corridoio);

var shape4=drawShape(0,0,3,0,3,8.6,0,8.6);
var hole8=drawShape(0,5,2,5,2,5.8,0,5.8);
var hole9=drawShape(0,0.8,2,0.8,2,1.6,0,1.6);
shape4.holes.push(hole8);
shape4.holes.push(hole9);
var m2corridoio= createMeshRic(new THREE.ShapeGeometry(shape4),"carta2.jpg");
m2corridoio.rotation.y=-Math.PI/2;
m2corridoio.position.set(5.89,4.4,0.31);
House.add(m2corridoio);

var m3corridoio= createMeshRic(new THREE.ShapeGeometry(drawShapeMax(0,0,0.25,0,0.25,2,1.05,2,1.05,0,1.3,0,1.3,3,0,3)),"carta2.jpg");
m3corridoio.rotation.x=Math.PI/2;
m3corridoio.position.set(4.6,12.99,0.31);
House.add(m3corridoio);

//muri della cameretta
var m1cameretta= createMeshRic(new THREE.ShapeGeometry(drawShape(0,0,4.5,0,4.5,3,0,3)),"carta_beige.jpg");
m1cameretta.rotation.x=Math.PI/2;
m1cameretta.position.set(6.2,4.61,0.31);
House.add(m1cameretta);

var m2cameretta= createMeshRic(new THREE.ShapeGeometry(drawShape(0,0,4.5,0,4.5,3,0,3)),"carta_beige.jpg");
m2cameretta.rotation.x=Math.PI/2;
m2cameretta.position.set(6.2,8.59,0.31);
House.add(m2cameretta);

var m3cameretta= createMeshRic(new THREE.ShapeGeometry(drawShapeMax(0,0,3,0,3,4,0,4,0,1.4,2,1.4,2,0.6,0,0.6)),"carta_beige.jpg");
m3cameretta.rotation.y=-Math.PI/2;
m3cameretta.position.set(6.21,4.6,0.31);
House.add(m3cameretta);

var m4cameretta= createMeshRic(new THREE.ShapeGeometry(drawShapeMax(0,0,3,0,3,4,0,4,0,2.5,2,2.5,2,1.5,0,1.5)),"carta_beige.jpg");
m4cameretta.rotation.y=-Math.PI/2;
m4cameretta.position.set(10.69,4.6,0.31);
House.add(m4cameretta);

//muri della camera di mamma
var m1cameramamma= createMeshRic(new THREE.ShapeGeometry(drawShape(0,0,4.5,0,4.5,3,0,3)),"carta_pink.jpg");
m1cameramamma.rotation.x=Math.PI/2;
m1cameramamma.position.set(6.2,8.81,0.31);
House.add(m1cameramamma);

var m2cameramamma= createMeshRic(new THREE.ShapeGeometry(drawShape(0,0,4.5,0,4.5,3,0,3)),"carta_pink.jpg");
m2cameramamma.rotation.x=Math.PI/2;
m2cameramamma.position.set(6.2,14.89,0.31);
House.add(m2cameramamma);

var m3cameramamma= createMeshRic(new THREE.ShapeGeometry(drawShapeMax(0,0,3,0,3,6.1,0,6.1,0,1.4,2,1.4,2,0.6,0,0.6)),"carta_pink.jpg");
m3cameramamma.rotation.y=-Math.PI/2;
m3cameramamma.position.set(6.21,8.8,0.31);
House.add(m3cameramamma);

var m4cameramamma= createMeshRic(new THREE.ShapeGeometry(drawShapeMax(0,0,3,0,3,6.1,0,6.1,0,5.5,2,5.5,2,4.5,0,4.5)),"carta_pink.jpg");
m4cameramamma.rotation.y=-Math.PI/2;
m4cameramamma.position.set(10.69,8.8,0.31);
House.add(m4cameramamma);

//muri della camera mia
var m1cameramia= createMeshRic(new THREE.ShapeGeometry(drawShape(0,0,3,0,3,3.5,0,3.5)),"carta9.jpg");
m1cameramia.rotation.y=-Math.PI/2;
m1cameramia.position.set(0.41,13.2,0.31);
House.add(m1cameramia);

var m2cameramia= createMeshRic(new THREE.ShapeGeometry(drawShape(0,0,3,0,3,3.5,0,3.5)),"carta9.jpg");
m2cameramia.rotation.y=-Math.PI/2;
m2cameramia.position.set(5.89,13.2,0.31);
House.add(m2cameramia);

var m3cameramia= createMeshRic(new THREE.ShapeGeometry(drawShapeMax(0,0,4.45,0,4.45,2,5.25,2,5.25,0,5.5,0,5.5,3,0,3)),"carta9.jpg");
m3cameramia.rotation.x=Math.PI/2;
m3cameramia.position.set(0.4,13.21,0.31);
House.add(m3cameramia);

var shape5=drawShape(0,0,5.5,0,5.5,3,0,3);
var hole10=drawShape(3.1,1,3.9,1,3.9,2,3.1,2);
var hole11=drawShape(2.1,1,2.9,1,2.9,2,2.1,2);
shape5.holes.push(hole10);
shape5.holes.push(hole11);

var m4cameramia= createMeshRic(new THREE.ShapeGeometry(shape5),"carta9.jpg");
m4cameramia.rotation.x=Math.PI/2;
m4cameramia.position.set(0.4,16.69,0.31);
House.add(m4cameramia);

//muri della cucina
var m1cucina = createMeshRic(new THREE.ShapeGeometry(drawShape(0,0,2.2,0,2.2,1.8,0,1.8)), "mattonelle_cucina.jpg");
m1cucina.rotation.x=Math.PI/2;
m1cucina.position.set(0.4,4.61,0.31);
m1cucina.material.map.repeat.set(1.21,1.21);
House.add(m1cucina);

var m2cucina = createMeshRic(new THREE.ShapeGeometry(drawShapeMax(0,0,1.8,0,1.8,0.7,1,0.7,1,2.5,1.8,2.5,1.8,4,0,4)), "mattonelle_cucina.jpg");
m2cucina.rotation.y=-Math.PI/2;
m2cucina.position.set(0.41,4.6,0.31);
m2cucina.material.map.repeat.set(1.21,1.21);
House.add(m2cucina);

var m3cucina = createMeshRic(new THREE.ShapeGeometry(drawShape(0,0,4,0,4,1.8,0,1.8)), "mattonelle_cucina.jpg");
m3cucina.rotation.x=Math.PI/2;
m3cucina.position.set(0.4,8.59,0.31);
m3cucina.material.map.repeat.set(1.21,1.21);
House.add(m3cucina);

var m4cucina = createMeshRic(new THREE.ShapeGeometry(drawShape(0,0,1.8,0,1.8,4,0,4)), "mattonelle_cucina.jpg");
m4cucina.rotation.y=-Math.PI/2;
m4cucina.position.set(4.39,4.6,0.31);
m4cucina.material.map.repeat.set(1.21,1.21);
House.add(m4cucina);

var m5cucina = createMeshRic(new THREE.ShapeGeometry(drawShape(0,0,1,0,1,1.8,0,1.8)), "mattonelle_cucina.jpg");
m5cucina.rotation.x=Math.PI/2;
m5cucina.position.set(3.4,4.61,0.31);
m5cucina.material.map.repeat.set(1.21,1.21);
House.add(m5cucina);

//muri del primo bagno
var m1bagno1 = createMeshRic(new THREE.ShapeGeometry(drawShape(0,0,4,0,4,1.8,0,1.8)), "parete_bagno.jpg");
m1bagno1.rotation.x=Math.PI/2;
m1bagno1.position.set(0.4,8.81,0.31);
House.add(m1bagno1);

var m2bagno1 = createMeshRic(new THREE.ShapeGeometry(drawShape(0,0,4,0,4,1.8,0,1.8)), "parete_bagno.jpg");
m2bagno1.rotation.x=Math.PI/2;
m2bagno1.position.set(0.4,10.79,0.31);
House.add(m2bagno1);

var m3bagno1 = createMeshRic(new THREE.ShapeGeometry(drawShapeMax(0,0,1.8,0,1.8,0.6,1,0.6,1,1.4,1.8,1.4,1.8,2,0,2)), "parete_bagno2.jpg");
m3bagno1.rotation.y=-Math.PI/2;
m3bagno1.position.set(0.41,8.8,0.31);
House.add(m3bagno1);

var m4bagno1 = createMeshRic(new THREE.ShapeGeometry(drawShape(0,0,1.8,0,1.8,0.6,0,0.6)), "parete_bagno2.jpg");
m4bagno1.rotation.y=-Math.PI/2;
m4bagno1.position.set(4.39,8.8,0.31);
House.add(m4bagno1);

var m5bagno1 = createMeshRic(new THREE.ShapeGeometry(drawShape(0,0,1.8,0,1.8,0.6,0,0.6)), "parete_bagno2.jpg");
m5bagno1.rotation.y=-Math.PI/2;
m5bagno1.position.set(4.39,10.2,0.31);
House.add(m5bagno1);

//muri del secondo bagno
var m1bagno2 = createMeshRic(new THREE.ShapeGeometry(drawShape(0,0,4,0,4,1.8,0,1.8)), "parete_bagno3.jpg");
m1bagno2.rotation.x=Math.PI/2;
m1bagno2.position.set(0.4,11.01,0.31);
House.add(m1bagno2);

var m2bagno2 = createMeshRic(new THREE.ShapeGeometry(drawShape(0,0,4,0,4,1.8,0,1.8)), "parete_bagno3.jpg");
m2bagno2.rotation.x=Math.PI/2;
m2bagno2.position.set(0.4,12.99,0.31);
House.add(m2bagno2);

var m3bagno2 = createMeshRic(new THREE.ShapeGeometry(drawShapeMax(0,0,1.8,0,1.8,0.6,1,0.6,1,1.4,1.8,1.4,1.8,2,0,2)), "parete_bagno4.jpg");
m3bagno2.rotation.y=-Math.PI/2;
m3bagno2.position.set(0.41,11,0.31);
House.add(m3bagno2);

var m4bagno2 = createMeshRic(new THREE.ShapeGeometry(drawShape(0,0,1.8,0,1.8,0.6,0,0.6)), "parete_bagno4.jpg");
m4bagno2.rotation.y=-Math.PI/2;
m4bagno2.position.set(4.39,11,0.31);
House.add(m4bagno2);

var m5bagno2 = createMeshRic(new THREE.ShapeGeometry(drawShape(0,0,1.8,0,1.8,0.6,0,0.6)), "parete_bagno4.jpg");
m5bagno2.rotation.y=-Math.PI/2;
m5bagno2.position.set(4.39,12.4,0.31);
House.add(m5bagno2);

//muri esterni di casa
var shape6=drawShape(0,0,11.1,0,11.1,3.3,0,3.3);
var hole1e=drawShape(7.55,0.3,9.35,0.3,9.35,2.3,7.55,2.3);
var hole2e=drawShape(1.5,1.3,2.3,1.3,2.3,2.3,1.5,2.3);
var hole3e=drawShape(2.5,1.3,3.3,1.3,3.3,2.3,2.5,2.3);
shape6.holes.push(hole1e);
shape6.holes.push(hole2e);
shape6.holes.push(hole3e);
var m1esterno=createMeshRic(new THREE.ShapeGeometry(shape6), "stone_texture.jpg");
m1esterno.rotation.x=Math.PI/2;
m1esterno.position.y=-0.01;
House.add(m1esterno);

var shape7=drawShape(0,0,3.3,0,3.3,17.1,0,17.1);
var hole4e=drawShape(1.3,5.3,2.3,5.3,2.3,6.1,1.3,6.1);
var hole5e=drawShape(1.3,6.3,2.3,6.3,2.3,7.1,1.3,7.1);
var hole6e=drawShape(1.3,9.4,2.3,9.4,2.3,10.2,1.3,10.2);
var hole7e=drawShape(1.3,11.6,2.3,11.6,2.3,12.4,1.3,12.4);
shape7.holes.push(hole4e);
shape7.holes.push(hole5e);
shape7.holes.push(hole6e);
shape7.holes.push(hole7e);
var m2esterno=createMeshRic(new THREE.ShapeGeometry(shape7), "stone_texture2.jpg");
m2esterno.rotation.y=-Math.PI/2;
m2esterno.position.x=-0.01;
House.add(m2esterno);

var shape8=drawShape(0,0,6.2,0,6.2,3.3,0,3.3);
var hole8e=drawShape(3.5,1.3,4.3,1.3,4.3,2.3,3.5,2.3);
var hole9e=drawShape(2.5,1.3,3.3,1.3,3.3,2.3,2.5,2.3);
shape8.holes.push(hole8e);
shape8.holes.push(hole9e);
var m3esterno= createMeshRic(new THREE.ShapeGeometry(shape8),"stone_texture.jpg");
m3esterno.rotation.x=Math.PI/2;
m3esterno.position.y=17.11;
House.add(m3esterno);

var m4esterno = createMeshRic(new THREE.ShapeGeometry(drawShape(0,0,3.3,0,3.3,1.8,0,1.8)), "stone_texture2.jpg");
m4esterno.rotation.y=-Math.PI/2;
m4esterno.position.set(6.21,15.3,0);
House.add(m4esterno);

var m5esterno = createMeshRic(new THREE.ShapeGeometry(drawShape(0,0,4.9,0,4.9,3.3,0,3.3)), "stone_texture.jpg");
m5esterno.rotation.x=Math.PI/2;
m5esterno.position.set(6.2,15.31,0);
House.add(m5esterno);

var shape9=drawShape(0,0,3.3,0,3.3,15.3,0,15.3);
var hole10e=drawShape(0.3,6.1,2.3,6.1,2.3,7.1,0.3,7.1);
var hole11e=drawShape(0.3,13.3,2.3,13.3,2.3,14.3,0.3,14.3);
shape9.holes.push(hole10e);
shape9.holes.push(hole11e);
var m6esterno= createMeshRic(new THREE.ShapeGeometry(shape9),"stone_texture2.jpg");
m6esterno.rotation.y=-Math.PI/2;
m6esterno.position.x=11.11;
House.add(m6esterno);

var m7esterno = createMeshRic(new THREE.ShapeGeometry(drawShape(0,0,1.6,0,1.6,1.5,0,1.5)), "stone_texture.jpg");
m7esterno.rotation.x=Math.PI/2;
m7esterno.position.set(11.1,4.39,0);
House.add(m7esterno);

var m8esterno = createMeshRic(new THREE.ShapeGeometry(drawShape(0,0,1.6,0,1.6,1.5,0,1.5)), "stone_texture.jpg");
m8esterno.rotation.x=Math.PI/2;
m8esterno.position.set(11.1,15.31,0);
House.add(m8esterno);

var m9esterno = createMeshRic(new THREE.ShapeGeometry(drawShape(0,0,1.5,0,1.5,10.9,0,10.9)), "stone_texture2.jpg");
m9esterno.rotation.y=-Math.PI/2;
m9esterno.position.set(12.71,4.4,0);
House.add(m9esterno);

//due gradini di ingresso a casa
var gradino1 = createMesh(new THREE.BoxGeometry(2.5,0.5,0.3),"cornicione_marmo.jpg");
var gradino2 = createMesh(new THREE.BoxGeometry(2.5,0.5,0.15),"cornicione_marmo.jpg");
gradino1.position.set(8.45,-0.25,0.16);
gradino2.position.set(8.45,-0.75,0.085);
House.add(gradino1);
House.add(gradino2);
