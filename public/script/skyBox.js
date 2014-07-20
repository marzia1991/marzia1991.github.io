var directions  = ["right", "left", "top", "down", "front", "back"];
var skyGeometry = new THREE.CubeGeometry( 50, 20, 50 ); 

var materialArray = [];
for (var i = 0; i < 6; i++)
  materialArray.push( new THREE.MeshBasicMaterial({
    map: THREE.ImageUtils.loadTexture( "assets/images/siege_" + directions[i] + ".jpg" ),
    side: THREE.BackSide
  }));
var skyMaterial = new THREE.MeshFaceMaterial( materialArray );
var skyBox = new THREE.Mesh( skyGeometry, skyMaterial );
skyBox.color = new THREE.Color('#ffffff');
skyBox.rotation.x=Math.PI/2;
skyBox.position.set(7,10,10);
House.add( skyBox );

var prato= createMeshRic(new THREE.PlaneGeometry(50,50),"siege_down.jpg");
prato.material.map.repeat.set(10,10);
prato.position.set(7,10,.01);
House.add(prato);