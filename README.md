# Platzom

Platzom es un idioma inventado para el [Curso de Fundamentos de JavaScript](https://platzi.com/js) de [Platzi](https://platzi.com), el mejor lugar de educación online

## Descripción del Idioma

- Si la palabra termina en "ar", se le quitan esos dos letras
- Si la palbra inicia con Z, se la anade "pe" al final
- Si la palabra traducida tiene 10 o más letras, se debe partir en dos por a mitad y unir con un guion en el medio.
- Si la palabra original es un palindriomo, ninguna regla anterior cuenta, y se devuelve la misma palabra intercalando mayuscuclas y minusculas


## Instalación

```
npm install platzom
```

## Uso

```
import platzom from 'platzom'

platzom("Programar") // Program
platzom('Zorro') // Zorrope
platzom('Zarpar') // Zarppe
platzom('abecedario') // abede-cario
platzom('sometemos') // SoMeTeMoS
```

##  Créditos
- [Daniel Medina](https://twitter.com/@danielmedinagi)

## Licencia
[MIT](https://opensource.org/licenses/MIT)