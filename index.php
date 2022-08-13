<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="css/login.css">
    <link rel="shortcut icon" href="#" />
</head>
<body>
    <div class="content">
        <h1 class="titulo">TALLER DE ATRIBUTOS CRÍTICOS</h1>
        <img src="https://seeklogo.com/images/U/upb-logo-A2CF08C960-seeklogo.com.png" alt="logo-upb" class="logo">
        <form action="php/login.php" method="post">
            <input type="text" name="username" placeholder="Usuario" required><br>
            <input type="password" name="pwd" placeholder="Contraseña" required><br>
            <button type="submit" name="submit">Ingresar</button>
        </form>
        <?php
            if (isset($_GET['error'])) {
                if($_GET['error'] == 'wronglogin') {
                    echo "<p>Usuario invalido</p>";
                }
                elseif($_GET['error'] == 'wrongpwd') {
                    echo "<p>Contraseña incorrecta</p>";
                }
            }
        ?>
    </div>
</body>
</html>