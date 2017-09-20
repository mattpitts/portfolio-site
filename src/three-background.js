import * as THREE from 'three';

export default function createBackground() {
	const background = {};
	background.scene = new THREE.Scene();
	let WIDTH = window.innerWidth;
	let HEIGHT = window.innerHeight;
	background.renderer = new THREE.WebGLRenderer({antialias: true, alpha:true});   //
	background.renderer.setSize(WIDTH,HEIGHT);
	background.renderer.domElement.setAttribute('style', 'position: fixed; top: 0; left: 0; z-index: -5;');
	document.body.appendChild(background.renderer.domElement);

	background.camera = new THREE.PerspectiveCamera( 60, WIDTH / HEIGHT, .001, 2 );
	background.camera.position.z = .49;
	background.camera.position.y = -0.1;


	//Add lights
	background.scene.add(background.camera);
	background.ambientLight = new THREE.AmbientLight(0xa0a0a0);
	background.scene.add(background.ambientLight);
	background.pointLight = new THREE.PointLight(0xeeeebc);
    background.pointLight.position.set(0.2,0,0);
    background.scene.add(background.pointLight);

	//Add Outer Box
	let geometry = new THREE.BoxGeometry(1,1,1);
	let material = new THREE.MeshLambertMaterial({
		color: 0x46494C,
		side: THREE.DoubleSide
	});
	background.outerBox = new THREE.Mesh(geometry, material);
	background.outerBox.recieveShadow = true;
	background.scene.add(background.outerBox);


	window.addEventListener('resize', () => {
		let newWIDTH = window.innerWidth;
		let newHEIGHT = window.innerHeight;
		background.renderer.setSize(newWIDTH,newHEIGHT);
		background.camera.aspect = newWIDTH / newHEIGHT;
		background.camera.updateProjectionMatrix();
	});

	window.addEventListener('scroll', () => {
		let theta = window.scrollY / 600;
		// let r = 2;
		// let x = r * Math.cos(theta)
		let x = Math.cos(theta) * 2;
		let y = Math.sin(theta) * 2;
		background.pointLight.position.set(x,0,y)
	});


	function animate() {
		requestAnimationFrame( animate );
		background.renderer.render( background.scene, background.camera );
	}
	animate();
}
