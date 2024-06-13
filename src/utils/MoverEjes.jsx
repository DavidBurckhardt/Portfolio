import { act } from 'react';
import * as THREE from 'three'; // Importar Three.js para convertir grados a radianes

export function moverEje(camera,eje,actual,fin){
  if (actual < fin){
    aumentarEje(camera,eje,actual,fin);
  }else if (actual > fin ){
    disminuirEje(camera,eje,actual,fin);
  }
}


export function aumentarEje(camera,eje,actual,fin){
  let velocidad = 0.5; // Velocidad inicial
  
  const incrementar = () => {
    if (actual < fin) {
      actual += velocidad;
      if (eje === 'x') {
        camera.current.position.x += velocidad;
      } else if (eje === 'y') {
        camera.current.position.y += velocidad;
      } else if (eje === 'z') {
        camera.current.position.z += velocidad;
      }
      // Incrementar la velocidad con el tiempo
      velocidad += 0.001; // Puedes ajustar este valor según tu preferencia
    } else {
      clearInterval(intervalo);
    }
  };

  const intervalo = setInterval(incrementar, 0);
}

  export function disminuirEje(camera,eje,actual,fin){
    let velocidad = 0.5; // Velocidad inicial
  
    const incrementar = () => {
      if (actual > fin) {
        actual -= velocidad;
        if (eje === 'x') {
          camera.current.position.x -= velocidad;
        } else if (eje === 'y') {
          camera.current.position.y -= velocidad;
        } else if (eje === 'z') {
          camera.current.position.z -= velocidad;
        }
        // Incrementar la velocidad con el tiempo
        velocidad += 0.001; // Puedes ajustar este valor según tu preferencia
      } else {
        clearInterval(intervalo);
      }
    };
  
    const intervalo = setInterval(incrementar,  0);
}
