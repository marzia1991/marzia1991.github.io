var stats = initStats();

// create a scene, that will hold all our elements such as objects, cameras and lights.
scene = new THREE.Scene();

//oggetto che rappresenta la scena
House = new THREE.Object3D();
scene.add(House);
//queste due righe sopra sn state aggiunte per far funzionare il pointer lock

// create a camera, which defines where we're looking at.
camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.up=new THREE.Vector3(0,1,0);

// create trackball controls
trackballControls = new THREE.TrackballControls(camera);

// create a render and set the size
var webGLRenderer = new THREE.WebGLRenderer();
webGLRenderer.setClearColor(new THREE.Color(0xeeeeee, 1.0));
webGLRenderer.setSize(window.innerWidth, window.innerHeight);

//per il tocco del mouse
projector = new THREE.Projector();
document.addEventListener('mousedown', onDocumentMouseDown, false);

// position and point the camera to the center of the scene
//camera.position.set(-30,40,50);
camera.position.set(0,-20,20);
camera.lookAt(new THREE.Vector3(0, 0, 0));

/*var directionalLight = new THREE.DirectionalLight("#ffffff");
directionalLight.position.set(-30,40,50);
directionalLight.intensity = 1;
//scene.add(directionalLight);
House.add(directionalLight);

var directionalLight2 = new THREE.DirectionalLight("#ffffff");
directionalLight2.position.set(30,-40,-50);
directionalLight2.intensity = 1;
//scene.add(directionalLight2);
House.add(directionalLight2);*/

// aggiungo 4 luci direzionali alla scena
var light1 = new THREE.DirectionalLight(0xffffff);
  light1.position.set(5000, 5000, 1000);
  light1.intensity = 0.5;
  scene.add(light1);

var light2 = new THREE.DirectionalLight(0xffffff);
  light2.position.set(5000, -5000, 1000);
  light2.intensity = 0.5;
  scene.add(light2);

var light3 = new THREE.DirectionalLight(0xffffff);
  light3.position.set(-5000, -5000, 1000);
  light3.intensity = 0.5;
  scene.add(light3);

var light4 = new THREE.DirectionalLight(0xffffff);
  light4.position.set(-5000, 5000, 1000);
  light4.intensity = 0.5;
  scene.add(light4);

var light5 = new THREE.DirectionalLight(0xffffff);
  light4.position.set(0, 0, 1000);
  light4.intensity = 0.5;
  scene.add(light4);

// call the render function
var step = 0;

// setup the control gui

var mesh;

var loader = new THREE.OBJLoader();
loader.load('prova3.obj', function (obj) {

  global_o = obj;

  // var material = new THREE.MeshLambertMaterial({color: 0xaaaaaa});
  // material.side = THREE.DoubleSide;
  // obj.children[0].material = material;
  // mesh = obj.children[0];

  var multiMaterial = [
    new THREE.MeshLambertMaterial({color: 0xFFFFFF, side: THREE.DoubleSide, shading: THREE.FlatShading}),
    new THREE.MeshLambertMaterial({wireframe: false, overdraw: true, color: 0xffffff, side: THREE.DoubleSide})
    ];

  mesh = THREE.SceneUtils.createMultiMaterialObject(obj.children[0].geometry, multiMaterial);
  var axisHelper = new THREE.AxisHelper(3);
  //mesh.add(axisHelper);
  //scene.add(mesh);
  House.add(mesh);
});

var controls = new function () {
  this.pointerLock = false;
  this.roof= false;
}

var gui = new dat.GUI(); 
gui.add(controls,'pointerLock').onChange(function (value) {
  if(value) {
    House.rotation.x = -Math.PI/2;
    House.position.set(-100,-15,-110);
    House.scale.set(15,15,15);
    //con il primo valore mi sposto a dx e sx con il secondo su e giù e con l'ultimo di traverso
    window.location.pointerLock = true;
    startFPS();
  }
});

var houseroof = createMeshRic2(new THREE.BoxGeometry(11.1,17.1,0.2), "tegole.jpg","tegolebump.jpg");
houseroof.material.map.repeat.set(5,5);
houseroof.position.set(5.55,8.55,3.4);
houseroof.visible=false;
House.add(houseroof);

gui.add(controls,'roof').onChange(function (value) {
  if(value) {
    houseroof.visible=true;
  }
  else {
    houseroof.visible=false;
  }
});

render();

function onDocumentMouseDown (event) {

  event.preventDefault();

  if (!window.location.pointerLock){
    var vector = new THREE.Vector3(( event.clientX / window.innerWidth ) * 2 - 1, -( event.clientY / window.innerHeight ) * 2 + 1, 0.5);
    projector.unprojectVector(vector, camera);

    var raycaster = new THREE.Raycaster(camera.position, vector.sub(camera.position).normalize());

    var intersects = raycaster.intersectObjects([water_box,int1,int2,int3,int4,int5,int6,int7,int8,int9,pernoq.children[0],cassaforte,movieBlack,pcBlack,f1cam.children[0].children[0],f2cam.children[0].children[0],fbagno1.children[0].children[0],fbagno2.children[0].children[0],f1cucina.children[0].children[0],f2cucina.children[0].children[0],f1sala.children[0].children[0],f2sala.children[0].children[0],hook1.children[0].children[1],hook2.children[0].children[1],hook3.children[0].children[1],hook4.children[0].children[1],hook5.children[0].children[1],hook6.children[0].children[1],hook7.children[0].children[5],hook8.children[0].children[5],hookpf1.children[0].children[1],hookpf2.children[0].children[1],wardrobe.anta1,wardrobe.anta2]);

    if (intersects.length > 0) {
      intersects[0].object.interact();
    }
  }
  else {
    event.preventDefault();
    var vector2 = new THREE.Vector3(( event.clientX / window.innerWidth ) * 2 - 1, -( event.clientY / window.innerHeight ) * 2 + 1, 0.5);
    projector.unprojectVector(vector2, camera);

    var raycaster = new THREE.Raycaster(vector2, controls.getDirection(new THREE.Vector3(0,0,0)).clone());

    var intersects = raycaster.intersectObjects([water_box,int1,int2,int3,int4,int5,int6,int7,int8,int9,pernoq.children[0],cassaforte,movieBlack,pcBlack,f1cam.children[0].children[0],f2cam.children[0].children[0],fbagno1.children[0].children[0],fbagno2.children[0].children[0],f1cucina.children[0].children[0],f2cucina.children[0].children[0],f1sala.children[0].children[0],f2sala.children[0].children[0],hook1.children[0].children[1],hook2.children[0].children[1],hook3.children[0].children[1],hook4.children[0].children[1],hook5.children[0].children[1],hook6.children[0].children[1],hook7.children[0].children[5],hook8.children[0].children[5],hookpf1.children[0].children[1],hookpf2.children[0].children[1],wardrobe.anta1,wardrobe.anta2]);

    if (intersects.length > 0) {
      intersects[0].object.interact();
    }
  }
}

function createMeshRic2(geom, imageFile, bump) {
  var texture = THREE.ImageUtils.loadTexture("assets/textures/general/" + imageFile);
  geom.computeVertexNormals();
  var mat = new THREE.MeshPhongMaterial();
  texture.wrapS = THREE.RepeateWrapping;
  texture.wrapT = THREE.RepeateWrapping;
  mat.map = texture;
  mat.side=THREE.DoubleSide;

  if (bump) {
    var bump = THREE.ImageUtils.loadTexture("assets/textures/general/" + bump);
    bump.wrapS = THREE.RepeateWrapping;
    bump.wrapT = THREE.RepeateWrapping;
    mat.bumpMap = bump;
    mat.bumpScale = -0.6;
  }

  var mesh = new THREE.Mesh(geom, mat);

  return mesh;
}


function render() {
  stats.update();
  trackballControls.update();
  TWEEN.update();

  if ( video.readyState === video.HAVE_ENOUGH_DATA ) {
    videoImageContext.drawImage( video, 0, 0 );
    if ( videoTexture ) 
      videoTexture.needsUpdate = true;
  }

  if ( video2.readyState === video2.HAVE_ENOUGH_DATA ) {
    videoImageContext2.drawImage( video2, 0, 0 );
    if ( videoTexture2 ) 
      videoTexture2.needsUpdate = true;
  }

  if (controls.pointerLock === true || window.location.pointerLock === true)
    computeFPControls();

  // render using requestAnimationFrame
  requestAnimationFrame(render);
  webGLRenderer.render(scene, camera);
}

function initStats() {
  var stats = new Stats();
  stats.setMode(0); // 0: fps, 1: ms
  $('body').append(stats.domElement);
  return stats;
}
