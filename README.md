<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="estilos.css">
    <script src="https://kit.fontawesome.com/d50a6f965f.js" crossorigin="anonymous"></script>
</head>
<body>
    <header>
            <img class="logo" src="logo.png">
            <nav class="nav">
                <ul>
                    <li><a class="menu" href="">INICIO</a></li>
                    <li><a class="menu" href="proyectos.html">PROYECTOS</a></li>
                    <li><a class="menu" href="contacto.html">CONTACTO</a></li>
                </ul>
            </nav>
    </header>

    <div class="contenedor1">
        <div class="contenedor-foto">
            <img class="foto" src="programador.png" alt="">
        </div>
        <div class="contenedor-biografia">
            <p class="biografia">Hola! Soy Kevin Ortiz, estudiante de la carrera de <b>"Computación e Informática"</b>, programador y desarrollador Front-end. Soy un fanático del deporte, me gusta escuchar música en mis ratos libres, investigar sobre nuevas tecnologías de la programación. Te invito a unirte a este mundo de la programación, te va a gustar mucho.<br><br>
            <b class="frase">"La programación no resuelve problemas, crea soluciones"</b></p>
        </div>
    </div>

    <div class="contenedor2">
        <h2 class="titulo-tec">Tecnologías</h2>
        <div class="fila">
            <div class="caja">
                <div class="contenedor-img">
                    <h3>HTML</h3>
                    <img class="logo-tec" src="https://img.freepik.com/iconos-gratis/html-5_318-566077.jpg?w=2000" alt="">
                </div>
                <div class="puntuacion">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </div>
            </div>
    
            <div class="caja">
                <div class="contenedor-img">
                    <h3>CSS</h3>
                    <img class="logo-tec" src="https://cdn-icons-png.flaticon.com/512/732/732190.png" alt="">
                </div>
                <div class="puntuacion">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </div>
            </div>
            
            <div class="caja">
                <div class="contenedor-img">
                    <h3>JavaScript</h3>
                    <img class="logo-tec" src="data:image/png;base64,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" alt="">
                </div>
                <div class="puntuacion">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i id="a" class="fa fa-star"></i>
                </div>
            </div>
        </div>
        

        <div class="fila">
            <div class="caja">
                <div class="contenedor-img">
                    <h3>Java</h3>
                    <img class="logo-tec" src="https://assets.stickpng.com/images/58480979cef1014c0b5e4901.png" alt="">
                </div>
                <div class="puntuacion">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i id="a" class="fa fa-star"></i>
                    <i id="a" class="fa fa-star"></i>
                </div>
            </div>
    
            <div class="caja">
                <div class="contenedor-img">
                    <h3>Python</h3>
                    <img class="logo-tec" src="https://assets.stickpng.com/images/5848152fcef1014c0b5e4967.png" alt="">
                </div>
                <div class="puntuacion">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i id="a" class="fa fa-star"></i>
                    <i id="a" class="fa fa-star"></i>
                </div>
            </div>
    
            <div class="caja">
                <div class="contenedor-img">
                    <h3>MySql</h3>
                    <img class="logo-tec" src="https://assets.stickpng.com/images/58481057cef1014c0b5e4951.png" alt="">
                </div>
                <div class="puntuacion">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i id="a" class="fa fa-star"></i>
                </div>
            </div>
        </div>    
    </div>

    <footer>
        <div class="contenedor-redes">
            <div class="cajita">
                <a href="https://www.facebook.com"><i class="fa fa-facebook redes"></i></a>
            </div>
            <div class="cajita">
                <a href="https://www.instagram.com"><i class="fa fa-instagram redes"></i></a>
            </div>
            <div class="cajita">
                <a href="https://www.whatsapp.com"><i class="fa fa-whatsapp redes"></i></a>
            </div>
            <div class="cajita">
                <a href="https://www.linkedin.com"><i class="fa fa-linkedin redes"></i></a>
            </div>
        </div>
    </footer>
    
</body>
</html>
