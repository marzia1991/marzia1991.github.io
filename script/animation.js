//pentola 
loadObjMtl('bowl',.2,2.51,8.06,1.24);

//tazzine del caffè
loadObjMtl2('coffee-mug',.05,3.15,8.29,1.28,Math.PI/2);
loadObjMtl2('coffee-mug',.05,3.1,8.28,1.28,3*Math.PI/2);

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