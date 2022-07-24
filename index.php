<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <div class="card">
        <div class="contenido-final">
            <div class="div-login">
                <h1>Login</h1>             
                <form action="php/login.php" method="post">
                    <input type="text" name="username" placeholder="Usuario"><br>
                    <input type="password" name="pwd" placeholder="Constraseña"><br>
                    <button type="submit" name="submitLogin" class='btn_confirmar'>Ingresar</button>                   
                </form>
            </div>           
        </div>       
    </div>    
</body>
</html>