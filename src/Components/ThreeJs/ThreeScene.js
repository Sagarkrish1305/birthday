import React, { useEffect } from 'react';
import * as THREE from 'three';
import { FontLoader } from './FontLoader';
import { TextGeometry } from './TextGeometry';

const ThreeScene = () => {
    useEffect(() => {
        // Your Three.js logic here
        const scene = new THREE.Scene();

        //
        const textureLoader = new THREE.TextureLoader();
        const texture = textureLoader.load('/Assets/matcaps/6.png');
        texture.magFilter = THREE.NearestFilter;
        texture.minFilter = THREE.NearestFilter;

        // Variables
        let textGeometry, text, text1, textGeometry1;
        let font;
        const textMaterial = new THREE.MeshMatcapMaterial({
            matcap: texture
        });

        // Parameters
        const text3Dparameters = {
            text: 'Happy Birthday',
            text1: 'Priya',
            size: 0.5,
            height: 0.2,
            curveSegments: 12,
            bevelEnabled: true,
            bevelThickness: 0.03,
            bevelSize: 0.02,
            bevelOffset: 0,
            bevelSegments: 5
        };

        // Function to create and update text geometry
        function createTextGeometry() {
          if (text) {
              scene.remove(text);
              textGeometry.dispose();
          }
          if(text1){
            scene.remove(text1)
          }

      
          textGeometry = new TextGeometry(text3Dparameters.text, {
              font: font,
              size: text3Dparameters.size,
              depth: text3Dparameters.height,
              curveSegments: text3Dparameters.curveSegments,
              bevelEnabled: text3Dparameters.bevelEnabled,
              bevelThickness: text3Dparameters.bevelThickness,
              bevelSize: text3Dparameters.bevelSize,
              bevelOffset: text3Dparameters.bevelOffset,
              bevelSegments: text3Dparameters.bevelSegments
          });

          textGeometry1 = new TextGeometry(text3Dparameters.text1, {
            font: font,
            size: text3Dparameters.size,
            depth: text3Dparameters.height,
            curveSegments: text3Dparameters.curveSegments,
            bevelEnabled: text3Dparameters.bevelEnabled,
            bevelThickness: text3Dparameters.bevelThickness,
            bevelSize: text3Dparameters.bevelSize,
            bevelOffset: text3Dparameters.bevelOffset,
            bevelSegments: text3Dparameters.bevelSegments
        });
      
          
          text = new THREE.Mesh(textGeometry, textMaterial);
          text1 = new THREE.Mesh(textGeometry1, textMaterial)
          text1.position.y -= 0.8
          scene.add(text, text1);
      
          // To Center the Text Geometry
          // textGeometry.computeBoundingBox()
          // console.log(textGeometry.boundingBox)
          // textGeometry.translate(
          //     - (textGeometry.boundingBox.max.x - text3Dparameters.bevelSize) * 0.5, 
          //     - (textGeometry.boundingBox.max.y - text3Dparameters.bevelSize) * 0.5, 
          //     - (textGeometry.boundingBox.max.z - text3Dparameters.bevelThickness) * 0.5, 
          // )
      
          // An easy way is to 
          textGeometry.center()
          textGeometry1.center()
        }

        // Fonts
        const fontLoader = new FontLoader();
        fontLoader.load('/Assets/Fonts/helvetiker_regular.typeface.json', (loadedFont) => {
            console.log("Font Loaded");
            font = loadedFont;
            createTextGeometry();
        });


        // Donuts
        console.time("donuts");
        const donutGeometry = new THREE.TorusGeometry(0.3, 0.2, 20, 45);
        for(let i = 0 ; i < 50 ; i++){
          const donut = new THREE.Mesh(donutGeometry, textMaterial)
    
          donut.position.x = Math.random() * 20 - 10
          donut.position.y = Math.random() * 20 - 10
          donut.position.z = Math.random() * 20 - 10

          donut.rotation.set(
              Math.random() * 2 * Math.PI, 
              Math.random() * 2 * Math.PI,
              0
          )
          scene.add(donut)
        }
        console.timeEnd("donuts");

        // Camera
        const FieldOfView = 75;
        const sizes = {
            width: window.innerWidth,
            height: window.innerHeight,
        };
        const X = 4, Y = 3, Z = 4;
        const camera = new THREE.PerspectiveCamera(FieldOfView, sizes.width / sizes.height);
        camera.position.set(X, Y, Z);
        scene.add(camera);

        // Renderer
        const renderer = new THREE.WebGLRenderer({
            canvas: document.querySelector('.webgl')
        });
        renderer.setSize(sizes.width, sizes.height);


        // Handle window resize
        const handleResize = () => {
            sizes.width = window.innerWidth;
            sizes.height = window.innerHeight;

            camera.aspect = sizes.width / sizes.height;
            camera.updateProjectionMatrix();
            
            renderer.setSize(sizes.width, sizes.height);
            renderer.setPixelRatio(Math.min(2, window.devicePixelRatio));
        };
        window.addEventListener('resize', handleResize);

        let angle = 0;
        // Animation loop
        const animate = () => {
            renderer.render(scene, camera);
            if(text){
              camera.lookAt(text.position)
              text.lookAt(camera.position)
              text1.lookAt(camera.position)
              camera.position.set(
                X * Math.cos(angle),
                Y * Math.sin(angle),
                Z * Math.sin(angle)
              )
              angle += 0.01
            }
            requestAnimationFrame(animate);
        };
        animate();

        return () => {
            // Cleanup logic if needed
        };
    }, []); // Empty dependency array to run only once on component mount

    return (
        <canvas className="webgl" />
    );
};

export default ThreeScene;
