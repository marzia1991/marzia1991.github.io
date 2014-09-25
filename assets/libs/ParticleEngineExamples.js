Examples =
{
	
	smoke :
	{
		positionStyle    : Type.CUBE,
		positionBase     : new THREE.Vector3( 1.3, 2.5, 1.3 ),
		positionSpread   : new THREE.Vector3( .3, .3, .3 ),

		velocityStyle    : Type.CUBE,
		velocityBase     : new THREE.Vector3( 0, .15, 0 ),
		//la velocita' dello spread rappresenta di quanto si deve allargare il fumo
		velocitySpread   : new THREE.Vector3( 1.5, 1.5, 3 ), //(x,y,z) dove la z rappresenta l'altezza della casa
		accelerationBase : new THREE.Vector3( 0,0,0 ),
		
		particleTexture : THREE.ImageUtils.loadTexture( 'assets/textures/smokeparticle.png'),

		angleBase               : 0,
		angleSpread             : 720,
		angleVelocityBase       : 0,
		angleVelocitySpread     : 720,
		
		sizeTween    : new Tween( [0, 1], [1.3, 1.3] ),
		opacityTween : new Tween( [0.8, 2], [0.5, 0] ),
		colorTween   : new Tween( [0.4, 1], [ new THREE.Vector3(0,0,0.2), new THREE.Vector3(0, 0, 0.5) ] ),

		particlesPerSecond : 300,
		particleDeathAge   : 2.0,		
		emitterDeathAge    : 60
	},
	
	
	rain :
	{
		positionStyle    : Type.CUBE,
		positionBase     : new THREE.Vector3( 2.5, 2.5, 3.25 ),
		positionSpread   : new THREE.Vector3( 0, 0, 0 ),

		velocityStyle    : Type.CUBE,
		velocityBase     : new THREE.Vector3( 0, 0, -3.25 ),
		velocitySpread   : new THREE.Vector3( 6, 4.8, 0 ), 
		accelerationBase : new THREE.Vector3( 0, 0, 0 ),
		
		particleTexture : THREE.ImageUtils.loadTexture( 'assets/textures/raindrop2flip.png' ),

		sizeBase    : .03,
		sizeSpread  : .25,
		colorBase   : new THREE.Vector3(0.66, 1.0, 0.7), // H,S,L
		colorSpread : new THREE.Vector3(0.00, 0.0, 0.2),
		opacityBase : 0.6,

		particlesPerSecond : 1000,
		particleDeathAge   : 1.0,		
		emitterDeathAge    : 60
	},
		
	/*starfield :
	{
		positionStyle    : Type.CUBE,
		positionBase     : new THREE.Vector3( 0, 200, 0 ),
		positionSpread   : new THREE.Vector3( 600, 400, 600 ),

		velocityStyle    : Type.CUBE,
		velocityBase     : new THREE.Vector3( 0, 0, 0 ),
		velocitySpread   : new THREE.Vector3( 0.5, 0.5, 0.5 ), 
		
		angleBase               : 0,
		angleSpread             : 720,
		angleVelocityBase       : 0,
		angleVelocitySpread     : 4,

		particleTexture : THREE.ImageUtils.loadTexture( 'images/spikey.png' ),
		
		sizeBase    : 10.0,
		sizeSpread  : 2.0,				
		colorBase   : new THREE.Vector3(0.15, 1.0, 0.9), // H,S,L
		colorSpread : new THREE.Vector3(0.00, 0.0, 0.2),
		opacityBase : 1,

		particlesPerSecond : 20000,
		particleDeathAge   : 60.0,		
		emitterDeathAge    : 0.1
	},

	fireflies :
	{
		positionStyle  : Type.CUBE,
		positionBase   : new THREE.Vector3( 0, 100, 0 ),
		positionSpread : new THREE.Vector3( 400, 200, 400 ),

		velocityStyle  : Type.CUBE,
		velocityBase   : new THREE.Vector3( 0, 0, 0 ),
		velocitySpread : new THREE.Vector3( 60, 20, 60 ), 
		
		particleTexture : THREE.ImageUtils.loadTexture( 'images/spark.png' ),

		sizeBase   : 30.0,
		sizeSpread : 2.0,
		opacityTween : new Tween([0.0, 1.0, 1.1, 2.0, 2.1, 3.0, 3.1, 4.0, 4.1, 5.0, 5.1, 6.0, 6.1],
		                         [0.2, 0.2, 1.0, 1.0, 0.2, 0.2, 1.0, 1.0, 0.2, 0.2, 1.0, 1.0, 0.2] ),				
		colorBase   : new THREE.Vector3(0.30, 1.0, 0.6), // H,S,L
		colorSpread : new THREE.Vector3(0.3, 0.0, 0.0),

		particlesPerSecond : 20,
		particleDeathAge   : 6.1,		
		emitterDeathAge    : 600
	},*/

    candle :
	{
		positionStyle  : Type.SPHERE,
		positionBase   : new THREE.Vector3( 0.7,2.4,0.95 ),
		positionRadius : .025,
		
		velocityStyle  : Type.CUBE,
		velocityBase   : new THREE.Vector3(0,0,0),
		velocitySpread : new THREE.Vector3(.2,.2,.2),
		
		particleTexture : THREE.ImageUtils.loadTexture( 'assets/textures/smokeparticle.png' ),
		
		sizeTween    : new Tween( [0, 0.3, 1.5], [0.4,0.4,0.4] ),
		opacityTween : new Tween( [0.9, 1.5], [0.2, 0.3] ),
		colorTween   : new Tween( [0.5, 1], [ new THREE.Vector3(0.02, 1, 0.5),new THREE.Vector3(0.05, 1, 0.5)
		 ] ),
		blendStyle : THREE.AdditiveBlending,  
		
		particlesPerSecond : 60,
		particleDeathAge   : 1.5,		
		emitterDeathAge    : 60
	}

}