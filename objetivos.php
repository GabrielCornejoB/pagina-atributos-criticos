<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Paso 1</title>
    <link rel="stylesheet" href="css/styles.css">
    <link rel="shortcut icon" href="#"/>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
</head>
<body>
    <header class="navbar">
        <h1 class="titulo-header">OBJETIVOS ESTRATÉGICOS</h2>
        <nav>
            <ul class="nav-links">
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Objetivos</a></li>
                <li><a href="#">Aspectos Problemáticos</a></li>
                <li><a href="#">Datos</a></li>
            </ul>
        </nav>
    </header>

    <!-- Div para cargar los datos que ya están en la bd -->
    <div class="objetivos">
        <div class="objetivo">
            <p>1. Mejorar la eficiencia de tal</p>
            <span class="material-symbols-outlined">edit</span>
        </div> 
        <hr>

        <div class="objetivo">
            <p>2. Aumentar las ventas de los productos de la marca tales</p>
            <span class="material-symbols-outlined">edit</span>
        </div>
        <hr>

        <div class="objetivo">
            <p>3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dicta id tempora sapiente quisquam? Quaerat, porro? Eveniet laboriosam reiciendis quae.</p>
            <span class="material-symbols-outlined">edit</span>
        </div>
        <hr>

        <div class="objetivo">
            <p>4. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quam eius, excepturi nostrum mollitia atque cumque earum ipsam eveniet possimus ex exercitationem saepe aliquam praesentium? Aspernatur assumenda nisi eum architecto optio fuga porro sapiente quasi.</p>
            <span class="material-symbols-outlined">edit</span>
        </div>
        <hr>
        <form action="">
            <p>En el siguiente campo puede agregar más objetivos estratégicos, una vez haya terminado de escribir uno, presione "Agregar"</p>
            <textarea placeholder='Objetivo estratégico' cols='175' rows='3' style='resize:none' required></textarea>
            <button type="submit">Agregar</button>
        </form>
    </div>
    <script src="js/functions.js"></script>
</body>
</html>