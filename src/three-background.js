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

	// let manager = new THREE.LoadingManager();
	// manager.onProgress = function ( item, loaded, total ) {
	// 	let percent = (loaded / total) * 100;
	// 	console.log(`Texture loading ${percent}% done.`);
	// }
	// manager.onLoad = () => {
	// 	console.log("Textures Loaded");
	// 	initScene(textures);
	// }
	// let plaster-texture = new THREE.TextureLoader(manager).load('images/plaster-texture.jpg');
	// //Add a sphere
	// geometry = new THREE.SphereGeometry(0.1, 0.1, 128);
	// material = 	new THREE.MeshLambertMaterial({
	// 	color: 0x46494C
	// });
	// background.sphereOne = new THREE.Mesh(geometry, material);
	// background.sphereOne.position.set(-0.4, -0.25, -.2)
	// background.scene.add(background.sphereOne);

	// geometry = new THREE.SphereGeometry(0.2, 0.2, 128);
	// material = 	new THREE.MeshLambertMaterial({
	// 	color: 0x46494C
	// });
	// background.sphereOne = new THREE.Mesh(geometry, material);
	// background.sphereOne.position.set(0, -.15, 0)
	// background.scene.add(background.sphereOne);

	// geometry = new THREE.TetrahedronGeometry(.3);
	// material = 	new THREE.MeshLambertMaterial({
	// 	color: 0x46494C
	// });
	//
	// background.tetrahedron = new THREE.Mesh(geometry, material);
	// background.tetrahedron.position.set(0, -.2, 0)
	// background.scene.add(background.tetrahedron);
	// background.tetrahedron.rotation.z = THREE.Math.degToRad( 45 );
	// background.tetrahedron.rotation.x = THREE.Math.degToRad( 5 );
	// background.tetrahedron.rotation.y = THREE.Math.degToRad( 45 );
	// background.tetrahedron.rotation.y = THREE.Math.degToRad( 30 );

	// geometry = new THREE.CylinderGeometry(0.1, 0.1, 0.3, 128);
	// material = 	new THREE.MeshLambertMaterial({
	// 	color: 0x46494C
	// });
	// background.sphereTwo = new THREE.Mesh(geometry, material);
	// background.sphereTwo.position.set(0, -0.25, -.2)
	// background.scene.add(background.sphereTwo);

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
