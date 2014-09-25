//sala
var mattonelle_sala = createMeshRic(new THREE.ShapeGeometry(drawShapeMax(0.4,0.4,10.7,0.4,10.7,4.4,5.9,4.4,5.9,13,4.6,13,4.6,4.4,0.4,4.4)),"mattonelle_marmo.jpg");
mattonelle_sala.material.map.repeat.set(1.3,1.3);
mattonelle_sala.position.z=0.31;
House.add(mattonelle_sala);

//primo bagno
var m1=createMeshRic(new THREE.ShapeGeometry(drawShape(0,0,0.2,0,0.2,0.8,0,0.8)),"cornicione_marmo.jpg");
m1.position.set(4.4,9.4,0.31);
House.add(m1);

//secondo bagno
var m2=createMeshRic(new THREE.ShapeGeometry(drawShape(0,0,0.2,0,0.2,0.8,0,0.8)),"cornicione_marmo.jpg");
m2.position.set(4.4,11.6,0.31);
House.add(m2);

//cameretta
var m3=createMeshRic(new THREE.ShapeGeometry(drawShape(0,0,0.3,0,0.3,0.8,0,0.8)),"cornicione_marmo.jpg");
m3.position.set(5.9,5.2,0.31);
House.add(m3);

//camera mamma
var m4=createMeshRic(new THREE.ShapeGeometry(drawShape(0,0,0.3,0,0.3,0.8,0,0.8)),"cornicione_marmo.jpg");
m4.position.set(5.9,9.4,0.31);
House.add(m4);

//cucina
var m5=createMeshRic(new THREE.ShapeGeometry(drawShape(0,0,0.8,0,0.8,0.2,0,0.2)),"cornicione_marmo.jpg");
m5.position.set(2.6,4.4,0.31);
House.add(m5);

//camera mia
var m6=createMeshRic(new THREE.ShapeGeometry(drawShape(0,0,0.8,0,0.8,0.2,0,0.2)),"cornicione_marmo.jpg");
m6.position.set(4.85,13,0.31);
House.add(m6);

//porta ingresso
var m7=createMeshRic(new THREE.ShapeGeometry(drawShape(0,0,1.8,0,1.8,0.4,0,0.4)),"cornicione_marmo.jpg");
m7.material.map.repeat.set(0.5,0.5);
m7.position.set(7.55,0,0.31);
House.add(m7);

//balcone cameretta
var m8=createMeshRic(new THREE.ShapeGeometry(drawShape(0,0,0.4,0,0.4,1,0,1)),"cornicione_marmo.jpg");
m8.position.set(10.7,6.1,0.31);
House.add(m8);

//balcone camera mamma
var m9=createMeshRic(new THREE.ShapeGeometry(drawShape(0,0,0.4,0,0.4,1,0,1)),"cornicione_marmo.jpg");
m9.position.set(10.7,13.3,0.31);
House.add(m9);

//pavimento cameretta
var mattonelle_cameretta= createMeshRic(new THREE.ShapeGeometry(drawShape(6.2,4.6,10.7,4.6,10.7,8.6,6.2,8.6)),"mattonelle_cameretta.jpg");
mattonelle_cameretta.material.map.repeat.set(1.1,1.1);
mattonelle_cameretta.position.z=0.31;
House.add(mattonelle_cameretta);

//pavimento camera mamma
var mattonelle_camera_mamma= createMeshRic(new THREE.ShapeGeometry(drawShape(6.2,8.8,10.7,8.8,10.7,14.9,6.2,14.9)),"mattonelle_camera_mamma.jpg");
mattonelle_camera_mamma.material.map.repeat.set(2.8,2.8);
mattonelle_camera_mamma.position.z=0.31;
House.add(mattonelle_camera_mamma);

//pavimento camera mia
var mattonelle_camera_mia= createMeshRic(new THREE.ShapeGeometry(drawShape(0.4,13.2,5.9,13.2,5.9,16.7,0.4,16.7)),"mattonelle_camera_mia.jpg");
mattonelle_camera_mia.material.map.repeat.set(1.1,1.1);
mattonelle_camera_mia.position.z=0.31;
House.add(mattonelle_camera_mia);

//pavimento bagno1
var mattonelle_bagno1= createMeshRic(new THREE.ShapeGeometry(drawShape(0.4,8.8,4.4,8.8,4.4,10.8,0.4,10.8)),"piastrelle_bagno_blu.jpg");
mattonelle_bagno1.material.map.repeat.set(5.7,5.7);
mattonelle_bagno1.position.z=0.31;
House.add(mattonelle_bagno1);

//pavimento bagno2
var mattonelle_bagno2= createMeshRic(new THREE.ShapeGeometry(drawShape(0.4,11,4.4,11,4.4,13,0.4,13)),"piastrelle_bagno_gialle.jpg");
mattonelle_bagno2.material.map.repeat.set(0.7,0.7);
mattonelle_bagno2.position.z=0.31;
House.add(mattonelle_bagno2);

//pavimento balcone
var mattonelle_balcone= createMeshRic(new THREE.ShapeGeometry(drawShape(11.1,4.6,12.3,4.6,12.3,14.9,11.1,14.9)),"mattonelle_balcone.jpg");
mattonelle_balcone.position.z=0.31;
House.add(mattonelle_balcone);

//pavimento cucina
var mattonelle_cucina= createMeshRic(new THREE.ShapeGeometry(drawShape(0.4,4.6,4.4,4.6,4.4,8.6,0.4,8.6)),"pav_c.jpg");
mattonelle_cucina.material.map.repeat.set(3,3);
mattonelle_cucina.position.z=0.31;
House.add(mattonelle_cucina);