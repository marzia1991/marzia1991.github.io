//incendio
loadObjMtl('wood_logs',0.005,0.6,2.4,0.8);
var fGeom = new THREE.BoxGeometry(0.5,0.5,0.5);
var fMat = new THREE.MeshLambertMaterial({color: 0x5C3317});
var firea = new THREE.Mesh(fGeom,fMat);
firea.visible=false;
firea.position.set(0.6,2.4,0.8);
House.add(firea);
sportello.chiuso=true;
firea.interact=function(){
	if (sportello.chiuso){
		fire=new ParticleEngine();
		fire.setValues(Examples.candle);
		fire.initialize();
		sportello.chiuso=false;
	}
	else {
		sportello.chiuso=true;
		var sportelloRotation= new TWEEN.Tween(sportello.rotation)
	       .to({x:0, y: 0, z:-Math.PI/2},1000)
	        .start();

		setTimeout( function() {
			fire.destroy();
			smoke=new ParticleEngine();
			smoke.setValues(Examples.smoke);
			smoke.initialize();
		} , 6000);
		setTimeout( function() {
			water4fire=new ParticleEngine();
			water4fire.setValues(Examples.rain);
			water4fire.initialize();
		} , 15000);
		setTimeout( function() {
			smoke.destroy();
		} , 20000);
		setTimeout( function() {
			water4fire.destroy();
		} , 25000);
		setTimeout( function() {
			var sportelloRotation2= new TWEEN.Tween(sportello.rotation)
	       		.to({x:0, y: 0, z:0},1000)
	        	.start();
		} , 25000);
	}
}
