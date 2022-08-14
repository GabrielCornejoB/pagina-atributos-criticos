<?php

// function emptyInputLogin($username, $password) {
//     $result;
//     if(empty($username) || empty($password)) {
//         $result = true;
//     }
//     else {
//         $result = false;
//     }
//     return $result;
// }
function userExists($conn, $username) {
    $sql = "SELECT * FROM empresas WHERE usuario = '$username';";
    $sqlUser = mysqli_query($conn, $sql);
    if($user = mysqli_fetch_assoc($sqlUser)) {
         return $user;
    }
    else {
        $result = false;
        return $result;
    }
}
function loginUser($conn, $username, $pwd) {
    $userExists = userExists($conn, $username);
    if($userExists === false) {
        header("location: ../index.php?error=wronglogin");
        exit();
    }
    $pwdBd = $userExists["password"];
    if($pwd !== $pwdBd) {
        header("location: ../index.php?error=wrongpwd");
        exit();
    }
    else if($pwd === $pwdBd) {
        session_start();
        $_SESSION["user"] = $userExists["usuario"];
        $_SESSION["ide"] = $userExists['id_empresa'];
        header("location: ../objetivos.php");
        exit();
    }
}

if(isset($_POST['submit'])) {
    $username = $_POST['username'];
    $password = $_POST['pwd'];

    require_once 'connection.php';

    loginUser($conn, $username, $password);
}
else {
    header("location: ../index.php");
    exit();
}