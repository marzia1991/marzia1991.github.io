function createMesh(geom) {

    geom.applyMatrix(new THREE.Matrix4().makeTranslation(-20, 0, 0));

    // assign two materials
    var meshMaterial = new THREE.MeshNormalMaterial({transparent: true, opacity: 0.7});

    //  meshMaterial.side = THREE.DoubleSide;
    var wireFrameMat = new THREE.MeshBasicMaterial();
    wireFrameMat.wireframe = true;

    // create a multimaterial
    var mesh = THREE.SceneUtils.createMultiMaterialObject(geom, [meshMaterial]);

    return mesh;
}

function createMesh(geom, imageFile) {
    var texture = THREE.ImageUtils.loadTexture("assets/textures/general/" + imageFile)
    var mat = new THREE.MeshPhongMaterial();
    mat.map = texture;
    mat.side = THREE.DoubleSide;

    var mesh = new THREE.Mesh(geom, mat);
    return mesh;
}

function createMeshB(geom, imageFile, bump) {
    var texture = THREE.ImageUtils.loadTexture("assets/textures/general/" + imageFile)
    geom.computeVertexNormals();
    var mat = new THREE.MeshPhongMaterial();
    mat.map = texture;
    mat.side=THREE.DoubleSide;

    if (bump) {
      var bump = THREE.ImageUtils.loadTexture("assets/textures/general/" + bump)
      mat.bumpMap = bump;
      mat.bumpScale = -0.05;
    }

    var mesh = new THREE.Mesh(geom, mat);

    return mesh;
  }

function createMeshRic(geom, imageFile) {
    var texture = THREE.ImageUtils.loadTexture("assets/textures/general/" + imageFile)
    var mat = new THREE.MeshPhongMaterial();
    texture.wrapS = THREE.RepeateWrapping;
    texture.wrapT = THREE.RepeateWrapping;
    mat.map = texture;
    mat.side = THREE.DoubleSide;

    var mesh = new THREE.Mesh(geom, mat);
    return mesh;
}


function drawShape(x1,y1,x2,y2,x3,y3,x4,y4) {

    // create a basic shape
    var shape = new THREE.Shape();

    // startpoint
    shape.moveTo(x1, y1);

    // straight line upwards
    shape.lineTo(x2, y2);
    shape.lineTo(x3, y3);
    shape.lineTo(x4, y4);
    shape.lineTo(x1, y1);

    // return the shape
    return shape;
}

function drawShapeMax(x1,y1,x2,y2,x3,y3,x4,y4,x5,y5,x6,y6,x7,y7,x8,y8) {

    // create a basic shape
    var shape = new THREE.Shape();

    // startpoint
    shape.moveTo(x1, y1);

    // straight line upwards
    shape.lineTo(x2, y2);
    shape.lineTo(x3, y3);
    shape.lineTo(x4, y4);
    shape.lineTo(x5, y5);
    shape.lineTo(x6, y6);
    shape.lineTo(x7, y7);
    shape.lineTo(x8, y8);
    shape.lineTo(x1, y1);

    // return the shape
    return shape;
}

function creaWindow(x, y, z,val){
    var finestra = new THREE.Object3D(); 
    var anta = creaAnta();

    finestra.add(anta);
    anta.position.x=0.005;
    finestra.position.set(x,y,z);
    finestra.chiusa=true;
    var angle2=0;
    var angle = Math.PI/2;
    if (val===1) {
        angle=-Math.PI/2;
    }
    if (val===2) {
        angle=3*Math.PI/2;
        angle2=Math.PI;
    }
    if (val===3) {
        angle=2*Math.PI;
        angle2=3*Math.PI/2;
    }
    if (val===4) {
        angle=Math.PI/2;
        angle2=Math.PI;
    }
    if (val===5) {
        angle=Math.PI;
        angle2=3*Math.PI/2;
    }
    finestra.children[0].children[0].interact=function(){ 
        if (finestra.chiusa) {
            finestra.chiusa=false;
            var windowRotation= new TWEEN.Tween(finestra.rotation)
            .to({x:0, y: 0, z:angle},1000)
            .start();
        }
        else {
            finestra.chiusa=true;
            var windowrRotation2= new TWEEN.Tween(finestra.rotation)
            .to({x:0, y: 0, z:angle2},1000)
            .start();
        }
    };
    return finestra;
}

function creaAnta(){

    var options = {amount: 0.12,bevelThickness: 2,bevelSize: 1,bevelSegments: 3,bevelEnabled: false,curveSegments: 12,steps: 1};
    var shapew1=drawShape(0,0,0.99,0,0.99,0.8,0,0.8);
    var holew1=drawShape(0.1,0.1,0.89,0.1,0.89,0.7,0.1,0.7);

    shapew1.holes.push(holew1);
    var f1 = createMeshRic(new THREE.ExtrudeGeometry(shapew1, options),"finestra.jpg");
    f1.rotation.y=-Math.PI/2;
    f1.position.x=-0.15;

    var geometry = new THREE.BoxGeometry(0.79,0.6,0.08);
    var material = new THREE.MeshLambertMaterial( {color: 0x87cefa, transparent: true, opacity: .5} );
    var vetro = new THREE.Mesh( geometry, material );
    vetro.position.set(0.4955,0.4,0.06);
    f1.add(vetro);

    return f1;
}

/*function creaFrenchWindow(x, y, z){
    var pfinestra = new THREE.Object3D(); 
    var anta = creaAnta2();
    pfinestra.add(anta);
    pfinestra.position.set(x,y,z);
    return pfinestra;
}

function creaAnta2(){

    var anta = new THREE.Object3D();
    var options = {amount: 0.12,bevelThickness: 2,bevelSize: 1,bevelSegments: 3,bevelEnabled: false,curveSegments: 12,steps: 1};
    var shapew1=drawShape(0,0,1.99,0,1.99,1,0,1);
    var holew1=drawShape(0.1,0.1,1.89,0.1,1.89,0.9,0.1,0.9);
    shapew1.holes.push(holew1);
    var f1 = createMeshRic(new THREE.ExtrudeGeometry(shapew1, options),"finestra.jpg");
    f1.material.map.repeat.set(0.5,0.5)
    f1.rotation.y=-Math.PI/2;

    anta.add(f1);

    var geometry = new THREE.BoxGeometry(1.79,0.8,0.1);
    var material = new THREE.MeshLambertMaterial( {color: 0x87cefa, transparent: true, opacity: .5} );
    var vetro = new THREE.Mesh( geometry, material );
    vetro.position.set(-.2,0.5,1);
    vetro.rotation.y=-Math.PI/2;
    anta.add( vetro );

    return anta ;
}*/

function loadObjMtl ( name, scale, posx, posy, posz) {
    var loader = new THREE.OBJMTLLoader();
    loader.addEventListener('load', function (event) {

        var object = event.content;
        var wing2 = object.children[0];
        var wing1 = object.children[1];

        object.scale.set(scale, scale, scale);
        object.rotation.x = Math.PI/2;
        object.position.set(posx,posy,posz);
        House.add(object);
    });


    loader.load(
    'assets/obj-mtl/'+name+'.obj', 
    'assets/obj-mtl/'+name+'.mtl', 
    {side: THREE.DoubleSide}
    );
}

function loadObjMtl2 ( name, scale, posx, posy, posz, rotz) {
    var loader = new THREE.OBJMTLLoader();
    loader.addEventListener('load', function (event) {

        var object = event.content;
        var wing2 = object.children[0];
        var wing1 = object.children[1];

        object.scale.set(scale, scale, scale);
        object.rotation.x = Math.PI/2;
        object.rotation.y = rotz;
        object.position.set(posx,posy,posz);
        House.add(object);
    });


    loader.load(
    'assets/obj-mtl/'+name+'.obj', 
    'assets/obj-mtl/'+name+'.mtl', 
    {side: THREE.DoubleSide}
    );
}

function loadObjMtl2bis ( name, scalex, scaley, scalez, posx, posy, posz, rotz) {
    var loader = new THREE.OBJMTLLoader();
    loader.addEventListener('load', function (event) {
        var object = event.content;
        var wing2 = object.children[0];
        var wing1 = object.children[1];

        object.scale.set(scalex, scaley, scalez);
        object.rotation.x = Math.PI/2;
        object.rotation.y = rotz;
        object.position.set(posx,posy,posz);
        House.add(object);
    });


    loader.load(
    'assets/obj-mtl/'+name+'.obj', 
    'assets/obj-mtl/'+name+'.mtl', 
    {side: THREE.DoubleSide}
    );
}

function makeDoor ( hook, name, scalex, scaley, scalez, posx, posy, posz, rotz, val, balc) {
    var loader = new THREE.OBJMTLLoader();
    loader.addEventListener('load', function (event) {
        var object = event.content;
        var wing1 = object.children[0];
        var wing2 = object.children[1];
        var wing3 = object.children[2];
    
        wing1.scale.set(scalex, scaley, scalez);
        wing1.rotation.x = Math.PI/2;
        wing1.rotation.y = rotz;
        wing1.position.set(posx,posy,posz);

        wing2.scale.set(scalex, scaley, scalez);
        wing2.rotation.x = Math.PI/2;
        wing2.rotation.y = rotz;
        wing2.position.set(posx,posy,posz);

        hook.add(wing3);
        wing3.scale.set(scalex, scaley, scalez);
        wing3.rotation.x = Math.PI/2;
        wing3.rotation.y = rotz;
        if (val===0) {
            wing3.position.set(0.33,-0.96,0);
            hook.position.set(posx-0.33,posy+0.96,posz);
        }
        else {
            if (val===1 || val==2){
                wing3.position.set(0.9,0.32,0);
                hook.position.set(posx-0.9,posy-0.32,posz);
            }
        }

        var angle=Math.PI/2;
        if (val===1){
            angle=-Math.PI/2;
        }

        House.add(wing1);
        House.add(wing2);
        House.add(hook);
        hook.chiusa=true;
        if (balc){
            hook.children[0].children[1].material.transparent=true;
            hook.children[0].children[1].material.opacity=0.5;
            hook.children[0].children[1].material.color=0xffffff;
            wing3.position.set(0.94,0.32,0);
            hook.position.set(posx-0.94,posy-0.32,posz);
        }
        hook.children[0].children[1].interact=function(){ 
            
            if (hook.chiusa) {
                
                if (balc){}
                    else{portaaudio.play();}
                hook.chiusa=false;
                var doorRotation= new TWEEN.Tween(hook.rotation)
                .to({x:0, y: 0, z:angle},2000)
                .delay(1000)
                .start();
            }
            else {
                hook.chiusa=true;
                var doorRotation2= new TWEEN.Tween(hook.rotation)
                .to({x:0, y: 0, z:0},1000)
                .start();
            }
        };
    });


    loader.load(
    'assets/obj-mtl/'+name+'.obj', 
    'assets/obj-mtl/'+name+'.mtl', 
    {side: THREE.DoubleSide}
    );
}

function makeFrontDoor ( hook, name, scalex, scaley, scalez, posx, posy, posz, rotz, val) {
    var loader = new THREE.OBJMTLLoader();
    loader.addEventListener('load', function (event) {
        var object = event.content;
        var wing1 = object.children[0];
        var wing2 = object.children[1];
        object.children[1]=new THREE.Object3D();
        var wing3 = object.children[2];
        var wing4 = object.children[3];
        var wing5 = object.children[4];
        object.children[4]=new THREE.Object3D();
        var wing6 = object.children[5];
        var wing7 = object.children[6];
        var wing8 = object.children[7];
        var wing9 = object.children[8];
        var wing10 = object.children[9];
        var wing11 = object.children[10];
        object.children[10]=new THREE.Object3D();
        var wing12 = object.children[11];
        
        object.scale.set(scalex, scaley, scalez);
        object.rotation.x = Math.PI/2;
        object.rotation.y = rotz;
        if (val===0){
            object.position.set(0.065,-0.08,1.75);
        }
        else {
            object.position.set(-0.06,-0.09,1.75);
        }
        
        hook.add(object);
        hook.children[0].children[7].material.transparent=true;
        hook.children[0].children[7].material.opacity=0.5;
    
      
        hook.position.set(posx,posy,posz);
       
        hook.chiusa=true;
        var angle=-Math.PI/2;
        if (val===1){
            angle=Math.PI/2;
        }

        hook.children[0].children[5].interact=function(){ 
            if (hook.chiusa) {
                hook.chiusa=false;
                var doorRotation= new TWEEN.Tween(hook.rotation)
                .to({x:0, y: 0, z:angle},1000)
                .start();
            }
            else {
                hook.chiusa=true;
                var doorRotation2= new TWEEN.Tween(hook.rotation)
                .to({x:0, y: 0, z:0},1000)
                .start();
            }
        };
        House.add(hook);
    });


    loader.load(
    'assets/obj-mtl/'+name+'.obj', 
    'assets/obj-mtl/'+name+'.mtl', 
    {side: THREE.DoubleSide}
    );
}

//senza mtl
function loadObj2 ( name, scale, posx, posy, posz, rotz) {
    var loader = new THREE.OBJMTLLoader();
    loader.addEventListener('load', function (event) {

        var object = event.content;
        var wing2 = object.children[0];
        var wing1 = object.children[1];

        object.scale.set(scale, scale, scale);
        object.rotation.x = Math.PI/2;
        object.rotation.y = rotz;
        object.position.set(posx,posy,posz);
        House.add(object);
    });


    loader.load(
    'assets/obj-mtl/'+name+'.obj', 
    {side: THREE.DoubleSide}
    );
}

//per creare l'armadio guardaroba in camera da mamma
function wardrobe(posx,posy,posz){
    var rit=new THREE.Object3D();
    var options = {amount: 2.4,bevelThickness: 2,bevelSize: 1,bevelSegments: 3,bevelEnabled: false,curveSegments: 12,steps: 1};
    var options2 = {amount: 0.02,bevelThickness: 2,bevelSize: 1,bevelSegments: 3,bevelEnabled: false,curveSegments: 12,steps: 1};
    var shape=drawShape(0,0,1.25,0,1.25,2.5,0,2.5);
    var tetto= createMeshRic(new THREE.ExtrudeGeometry(shape, options2),"Wood1.jpg");
    var shape2=drawShapeMax(0,0,1.2,0,1.2,0.05,0.05,0.05,0.05,2.45,1.25,2.45,1.25,2.5,0,2.5);
    var wardrobe = createMeshRic(new THREE.ExtrudeGeometry(shape2, options),"Wood1.jpg");
    var shapeanta=drawShape(0,0,0.05,0,0.05,1.25,0,1.25);
    var anta1=createMeshRic(new THREE.ExtrudeGeometry(shapeanta, options),"portaScorrevole.jpg");
    var anta2=createMeshRic(new THREE.ExtrudeGeometry(shapeanta, options),"portaScorrevole.jpg");
    var perno1=new THREE.Object3D();
    var perno2=new THREE.Object3D();
    var stecca= createMesh(new THREE.CylinderGeometry(0.02,0.02,2.4,32),"colore_argento.jpg");
    stecca.rotation.y=Math.PI/2;
    stecca.position.set(0.6,1.2,2);
    perno1.add(anta1);
    perno2.add(anta2);
    perno1.anta=anta1;
    perno2.anta=anta2;
    anta1.interact=function(){ 
        var wardrobePosition= new TWEEN.Tween(perno1.position)
                .to({x:0, y: 1.25, z:0},1000)
                .start();
        };
    anta2.interact=function(){ 
        var wardrobePosition= new TWEEN.Tween(perno1.position)
                .to({x:0, y: 0, z:0},1000)
                .start();
        };
    tetto.position.set(0,0,2.4);
    anta1.position.set(1.2,0,0);
    anta2.position.set(1.25,1.25,0);
    rit.add(wardrobe);
    rit.add(tetto);
    rit.add(perno1);
    rit.add(perno2);
    rit.anta1=anta1;
    rit.anta2=anta2;
    rit.add(stecca);
    rit.position.set(posx,posy,posz);
    
    return rit;
}

function crealuce(interruttore, posX, posY, posZ) {
    var luce = new THREE.PointLight(0xeeeeaa, 0, 5);
    luce.position.set(posX,posY,posZ);
    var target = new THREE.Object3D();
    target.position.set(posX,posY,0);
    luce.target = target;
    interruttore.add(luce);

    interruttore.spento = true;

    interruttore.interact = function() {
        if (interruttore.spento) {
          interruttore.spento = false;
          luce.intensity = 2;
          
        } else {
          interruttore.spento = true;
          luce.intensity = 0;
        }
    }
}
