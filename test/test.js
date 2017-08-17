const expect = require('chai').expect
const platzom = require('..').default  // el .. va a requerinir el modulo platzom, que esta más arriba, va a buscar el package.json en la designacíón del "main" donde esta el proyecto

describe('#platzom', function(){
  
  it('Si la palabra termina en "ar", se le quitan esos dos letras', function(){
    const translation = platzom("Programar")
    expect(translation).to.equal("Program")
  })

  it('Si la palbra inicia con Z, se la anade "pe" al final', function(){
    const translation = platzom("Zorro")
    const translation2 = platzom("Zarpar")

    expect(translation).to.equal("Zorrope")
    expect(translation2).to.equal("Zarppe")
  })

  it('Si la palabra traducida tiene 10 o más letras, se debe partir en dos por a mitad y unir con un guion en el medio.', function(){
    const translation = platzom("abecedario")
    expect(translation).to.equal("abece-dario")
  })

  it('Si la palabra original es un palindriomo, ninguna regla anterior cuenta, y se devuelve la misma palabra intercalando mayuscuclas y minusculas', function(){
    const translation = platzom("sometemos")
    expect(translation).to.equal("SoMeTeMoS")
  })

})

