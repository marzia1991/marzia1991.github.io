//cassaforte dietro il quadro
var cassaforte = createMesh(new THREE.PlaneGeometry(0.6,0.6), "cassaforte.jpg");
cassaforte.rotation.x=Math.PI/2;
cassaforte.position.set(8.225,4.38,2.2);
cassaforte.suona=false;
House.add(cassaforte);
cassaforte.interact=function(){
	cassaforteaudio.play();
	cassaforte.suona=true;
	
}

//quadro della sala da pranzo
var pernoq= new THREE.Object3D();
var quadro = createMeshB(new THREE.PlaneGeometry(1.5,0.8), "cornice.jpg", "bump2.jpg");
quadro.rotation.x=Math.PI/2;
quadro.position.set(8,4.37,2.2);
pernoq.add(quadro);
pernoq.chiuso=true;
pernoq.children[0].interact=function(){
	if (pernoq.chiuso){
		pernoq.chiuso=false;
		var quadroPosition= new TWEEN.Tween(pernoq.position)
                .to({x:1.3, y: 0, z:0},1000)
                .start();
        
	}
	else{
		pernoq.chiuso=true;
		
		var quadroPosition2= new TWEEN.Tween(pernoq.position)
                .to({x:0, y: 0, z:0},1000)
                .start();
        cassaforteaudio.pause();
        
	}
}
House.add(pernoq);

//divano sala da pranzo
//loadObjMtl('L_shaped_sofa',0.01,9.5,3.7,0.31);

//mobili cucina
loadObjMtl('kitchenUpperCabinet',0.01,1.3,8.4,0.4);
loadObjMtl('kitchenUpperCabinet',0.01,3.46,8.4,0.4);
loadObjMtl('kitchenSmallUpperCabinet',0.01,4.2,8.36,0.4);
loadObjMtl('kitchenSmallUpperCabinet',0.01,0.65,8.36,0.4);
loadObjMtl('kitchenSink',0.01,1.42,8.16,0.3);
loadObjMtl('hood',0.01,3.94,7.8,0.24);
loadObjMtl('kitchenLowerCabinet',0.01,4.2,6.26,0.36);
loadObjMtl('mano_cooktop',0.0115,2.07,8.495,1.2);
loadObjMtl('kitchenDrawersCabinet',0.01,5.62,6.26,0.36);
loadObjMtl('kitchenLowerCabinet',0.01,5.62,6.26,0.36);
loadObjMtl('kitchenSmallLowerCabinet',0.01,2.09,6.255,0.3);
loadObjMtl('ovenFront',0.014,2.44,8.27,0.24);
loadObjMtl('kitchenTools',0.006,2,8.06,0.8);
loadObjMtl('percolateur',0.01,3.12,8.4,1.345);
loadObjMtl('apples',0.01,3.8,8.2,1.2);
loadObjMtl2('fridge',0.18,1.6,5,1.21,Math.PI);
loadObjMtl2('water_cooler',0.01,0.77,4.9,0.77,Math.PI);

//camino in sala con pianta 
/*loadObjMtl2('cheminee',0.3,1.05,2.4,1.05,Math.PI/2);
loadObjMtl2('mediumIndoorPlant',0.01,0.8,3.7,0.3,Math.PI/2);

//tavolo più sedie della sala e vaso
loadObj2('woodTable',0.07,3.3,2.3,0.83,Math.PI/2);
loadObjMtl2('white_kitchen_chair',0.012,2,2.47,0.83,Math.PI/2);
loadObjMtl2('white_kitchen_chair',0.012,2,3.07,0.83,Math.PI/2);
loadObjMtl2('white_kitchen_chair',0.012,4.3,1.67,0.83,-Math.PI/2);
loadObjMtl2('white_kitchen_chair',0.012,4.3,2.27,0.83,-Math.PI/2);
loadObjMtl('calla_lily_with_roses',0.01,3.2,2.4,1.065);

//mobili cameretta
loadObjMtl('largeCouch',0.37,9.5,14.9,0.65);
loadObjMtl2('dining_room',0.013,8.5,4.82,0.31,Math.PI);
loadObjMtl2('table_football',0.01,7,7.35,0.71,Math.PI/2);
loadObjMtl2('led_tv',0.017,8.5,4.9,1.38,Math.PI);*/

//televisore
var movieMaterial = new THREE.MeshBasicMaterial( { map: videoTexture, overdraw: true } );
var movieGeometry = new THREE.PlaneGeometry( 1.28, 0.68, 4, 4 );
var movieScreen = new THREE.Mesh( movieGeometry, movieMaterial );
movieScreen.position.set(0.64,0.34);
movieScreen.rotation.x=Math.PI/2;
movieScreen.rotation.y=Math.PI;
movieScreen.position.set(8.5,4.915,1.885);

var movieBlackGeom = new THREE.PlaneGeometry( 1.28, 0.68, 4, 4 );
var movieBlackMat = new THREE.MeshLambertMaterial({color: 0x000000});
var movieBlack = new THREE.Mesh(movieBlackGeom, movieBlackMat);
movieBlack.position.set(0.64,0.34);
movieBlack.rotation.x=Math.PI/2;
movieBlack.rotation.y=Math.PI;
movieBlack.position.set(8.5,4.915,1.885);
House.add(movieBlack);
House.add(movieScreen);
movieScreen.visible=false;

movieBlack.interact=function(){
	if(video.onPlay){ 
		movieBlack.visible=false;
		movieScreen.visible= true;
		video.onPlay = false;
		video.play();
	}
	else{
		movieBlack.visible=true;
		movieScreen.visible= false;
		video.onPlay = true;
		video.pause();
	}
};


//mobili camera mia 
loadObjMtl2('juniorBed',0.01,1.41,15.3,0.31,Math.PI/2);
loadObjMtl2('bedsideTable',0.01,0.6,16.3,0.31,Math.PI/2);
loadObjMtl2('wardrobe',0.01,1.5,13.2,0.31,Math.PI);
loadObjMtl2('wardrobe',0.01,2.4,13.2,0.31,Math.PI);
loadObjMtl2('hallTable',0.01,4.4,13.2,0.31,Math.PI);
loadObjMtl2('desk',0.013,5.86,16.5,0.31,-Math.PI/2);
loadObjMtl2('officeChair',0.013,2.25,10.52,1.9,Math.PI/2);
loadObjMtl2('tourPC',0.2,5.43,14.84,0.62,3*Math.PI/2);
loadObjMtl2('monitorLCD',1,4.8,15.7,1.85,3*Math.PI/2+Math.PI/6);
loadObjMtl2('clavier',.1,5.45,15.6,1.25,3*Math.PI/2);
loadObjMtl2('souris',.03,5.475,15.25,1.3,Math.PI);
loadObjMtl2('livres',.02,3.7,13.4,1.37,Math.PI);
loadObjMtl2('frame1',.1,4.25,13.75,1.18,Math.PI+Math.PI/6);

//pc
var pcMaterial = new THREE.MeshBasicMaterial( { map: videoTexture2, overdraw: true } );
var pcGeometry = new THREE.PlaneGeometry( 0.6, 0.4, 4, 4 );
var pc = new THREE.Mesh( pcGeometry, pcMaterial );
pc.position.set(0.3,0.2);
pc.rotation.x=Math.PI/2;
pc.rotation.y=3*Math.PI/2+Math.PI/6;
pc.position.set(5.56,16.14,1.63);

var pcBlackGeom = new THREE.PlaneGeometry( 0.6, 0.4, 4, 4 );
var pcBlackMat = new THREE.MeshLambertMaterial({color: 0x000000});
var pcBlack = new THREE.Mesh(pcBlackGeom, pcBlackMat);
pcBlack.position.set(0.3,0.2);
pcBlack.rotation.x=Math.PI/2;
pcBlack.rotation.y=3*Math.PI/2+Math.PI/6;
pcBlack.position.set(5.56,16.14,1.63);
House.add(pcBlack);
House.add(pc);
pc.visible=false;

pcBlack.interact=function(){
	if(video2.onPlay){ 
		pcBlack.visible=false;
		pc.visible= true;
		video2.onPlay = false;
		video2.play();
	}
	else{
		pcBlack.visible=true;
		pc.visible= false;
		video2.onPlay = true;
		video2.pause();
	}
};


/*

//mobili camera di mamma
loadObjMtl2('lettoCloud',.011,8.7,7.53,0.31,Math.PI);
loadObjMtl2('bedsideTable',0.01,7.2,9,0.31,Math.PI);
loadObjMtl2('bedsideTable',0.01,10.1,9,0.31,Math.PI);
var wardrobe=wardrobe(6.21,12.4,0.31);
House.add(wardrobe);
loadObjMtl2('hanging-clothes2',0.015,8.2,14.5,1.65,Math.PI/2);
loadObjMtl2('hanging-clothes2',0.015,8.2,15.5,1.65,Math.PI/2);
loadObjMtl2('hallTable',0.01,10.68,12.7,0.31,3*Math.PI/2);
loadObjMtl2('mini_stereo',0.015,10.4,12.1,1.19,3*Math.PI/2);
loadObjMtl('candleWhite_obj',0.012,7.2,9,0.8);
loadObjMtl('candleWhite_obj',0.012,10.1,9,0.8);
loadObjMtl('candleWhite_obj',0.01,10.15,12.55,1.2);

//mobili bagno1
loadObjMtl2('bath_jay_hardy',0.011,0.42,9.76,0.31,Math.PI/2);
loadObjMtl('water',0.011,2.3,10.47,0.31);
loadObjMtl('bidet',0.011,2.3,10.47,0.31);
loadObjMtl('bathroom_vanity',0.01,3.5,10.6,1.12);
loadObjMtl('bathroom-tissue',0.6,2.75,10.7,1);

//mobili bagno2
loadObjMtl2('water',0.011,1.6,11.32,0.31,Math.PI);
loadObjMtl2('bidet',0.011,1.8,11.32,0.31,Math.PI);
loadObjMtl('bathroom_vanity2',0.01,3.3,12.8,1.12);
loadObjMtl2('bathroom-tissue',0.6,1,11.09,1,Math.PI);
loadObjMtl('shower',0.005,1.68,12.98,1.1);
loadObjMtl2('doccia',0.01,2,9.2,0.31,Math.PI/2);
loadObjMtl2bis('pareDouche',0.0055,0.0106,0.01,2,13,0.4,3*Math.PI/2);*/
