//moto, pedane e ostacolo
var motoGeom = new THREE.BoxGeometry(2,2,2);
var motoMat = new THREE.MeshLambertMaterial({color: 0x5C3317});
var moto = new THREE.Mesh(motoGeom,motoMat);
moto.visible=false;
moto.position.set(-5,2,0);
House.add(moto);
caricaMoto(moto,'bike',0.04,-5,2,-1.22);
loadObjMtl2bis('triangle',6,2,3,20,21,1,Math.PI/2);
loadObjMtl2bis('triangle',6,2,3,20,2,1,-Math.PI/2);

//pentola 
loadObjMtl('bowl',.2,2.51,8.06,1.24);

//tazzine del caffè
loadObjMtl2('coffee-mug',.05,3.15,8.29,1.27,Math.PI/2);
loadObjMtl2('coffee-mug',.05,3.1,8.29,1.27,3*Math.PI/2);
var b2Geom = new THREE.BoxGeometry(0.3,0.3,0.3);
var b2Mat = new THREE.MeshLambertMaterial({color: 0xCC0000});
var coffe_box = new THREE.Mesh(b2Geom,b2Mat);
coffe_box.visible=false;
coffe_box.position.set(3.136,8.295,1.31);
House.add(coffe_box);

var coffe_cilinder1 = new THREE.Mesh( new THREE.CylinderGeometry(0.002,0.002,0.45,32), new THREE.MeshLambertMaterial({color: 0x654321}));
coffe_cilinder1.scale.y = 0.0001;
coffe_cilinder1.rotation.x = Math.PI/2;
coffe_box.add(coffe_cilinder1);
coffe_box.inactive= true;

var coffe_cilinder2 = new THREE.Mesh( new THREE.CylinderGeometry(0.002,0.002,0.45,32), new THREE.MeshLambertMaterial({color: 0x654321}));
coffe_cilinder2.scale.y = 0.0001;
coffe_cilinder2.rotation.x = Math.PI/2;
coffe_cilinder2.position.x=-0.03;
coffe_box.add(coffe_cilinder2);

coffe_box.interact = function() {
	if (coffe_box.inactive) {
		coffe_box.inactive = false;
		//coffe_audio.play();
		var versac1 = new TWEEN.Tween(coffe_box.children[0].scale)
			.to({y: 0.5}, 2000)
			.start();
		var versac2 = new TWEEN.Tween(coffe_box.children[1].scale)
			.to({y: 0.5}, 2000)
			.start();
		var versac3 = new TWEEN.Tween(coffe_box.children[0].scale)
			.to({y: 0}, 2000)
			.delay(2500)
			.start();
		var versac4 = new TWEEN.Tween(coffe_box.children[1].scale)
			.to({y: 0}, 2000)
			.delay(2500)
			.start();
	}
}

//bicchiere 
loadObjMtl('12-oz-glass',.1,0.825,5,0.675);
var b1Geom = new THREE.BoxGeometry(0.2,0.2,0.2);
var b1Mat = new THREE.MeshLambertMaterial({color: 0xCC0000});
var water_box = new THREE.Mesh(b1Geom,b1Mat);
water_box.visible=false;
water_box.position.set(0.825,5,0.93);
House.add(water_box);

var water_cilinder = new THREE.Mesh( new THREE.CylinderGeometry(0.002,0.002,0.55,32), new THREE.MeshLambertMaterial({color: 0xABCDEF}));
water_cilinder.scale.y = 0.0001;
water_cilinder.rotation.x = Math.PI/2;
water_box.add(water_cilinder);
water_box.inactive= true;

var water_cilinder2 = new THREE.Mesh( new THREE.CylinderGeometry(0.02,0.02,0.06,32), new THREE.MeshLambertMaterial({color: 0xABCDEF}));
water_cilinder2.scale.y = 0.0001;
water_cilinder2.rotation.x = Math.PI/2;
water_box.add(water_cilinder2);
water_cilinder2.position.z=-0.3;
water_box.interact = function() {
	if (water_box.inactive) {
		water_box.inactive = false;
		water_audio.play();
		var versa1 = new TWEEN.Tween(water_box.children[0].scale)
			.to({y: 1}, 2000)
			.start();
		var versa2 = new TWEEN.Tween(water_box.children[0].position)
			.to({z: -1}, 4000)
			.start();
		var versa3 = new TWEEN.Tween(water_box.children[1].scale)
			.to({y:1 }, 2000)
			.delay(500)
			.start();
		
	}
}

//radio
var rGeom = new THREE.BoxGeometry(0.5,0.5,0.5);
var rMat = new THREE.MeshLambertMaterial({color: 0x5C3317});
var radio = new THREE.Mesh(rGeom,rMat);
radio.visible=false;
radio.position.set(10.4,12.1,1.22);
House.add(radio);
radio.spenta=true;
var cont=1;
radio.interact=function(){
	if(radio.spenta){
		radio.spenta=false;
		if(cont===1){
			radioaudio1.play();
			cont=2;
		}

	}
	else{
		
		if (cont===2) {
			radioaudio1.pause();
			radioaudio2.play();
			cont=3;
		}
		else if (cont===3) {
			radioaudio2.pause();
			radioaudio3.play();
			cont=4;
		}
		else if (cont==4){
			cont=1; 
			radioaudio3.pause();
			radio.spenta=true;
		}
	}
}