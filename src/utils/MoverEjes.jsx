
export function moverEje(camera,eje,actual,fin){
  if (actual < fin){
    aumentarEje(camera,eje,actual,fin);
  }else if (actual > fin ){
    disminuirEje(camera,eje,actual,fin);
  }
}


export function aumentarEje(camera,eje,actual,fin){
  let velocidad = 1; // Velocidad inicial
  
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
      velocidad += 0.01; // Puedes ajustar este valor según tu preferencia
    } else {
      clearInterval(intervalo);
    }
  };

  const intervalo = setInterval(incrementar, 0);
}

  export function disminuirEje(camera,eje,actual,fin){
    let velocidad = 1; // Velocidad inicial
  
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
        velocidad += 0.01; // Puedes ajustar este valor según tu preferencia
      } else {
        clearInterval(intervalo);
      }
    };
  
    const intervalo = setInterval(incrementar,  0);
}

export function moveAndRotate(camera, posX, posY, posZ) {
  if (camera.current && window.innerWidth >= 1100) {
      let { x, y, z } = camera.current.position;
      moverEje(camera,'x',x,posX);
      moverEje(camera,'y',y,posY);
      moverEje(camera,'z',z,posZ);
  }
}

export function home(camera,setActive){
  moveAndRotate(camera, -150, 0, 350)
  setActive([true,false,false,false,false])
}

export function about(camera,setActive){
  moveAndRotate(camera,-450, 0, -30)
  setActive([false,true,false,false,false])
}

export function proyects(camera,setActive){
    moveAndRotate(camera,-200, 0, -200)
    setActive([false,false,true,false,false])
}

export function skills(camera,setActive){
    moveAndRotate(camera,75, 50, 280)
    setActive([false,false,false,true,false])
}

export function contact(camera,setActive){
    moveAndRotate(camera,165, 200, -122)
    setActive([false,false,false,false,true])
}
