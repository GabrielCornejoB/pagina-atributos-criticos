<?php

function emptyInputLogin($username, $password) {
    $result;
    if(empty($username) || empty($password)) {
        $result = true;
    }
    else {
        $result = false;
    }
    return $result;
}
function uidExists($conn, $username) {
    $sql = "SELECT * FROM usuarios WHERE nombre_usuario = ?;";
    $stmt = mysqli_stmt_init($conn);
    if(!mysqli_stmt_prepare($stmt, $sql)) {
        exit();
    }
    mysqli_stmt_bind_param($stmt, "s", $username);
    mysqli_stmt_execute($stmt);
    $resultData = mysqli_stmt_get_result($stmt);
    if($row = mysqli_fetch_assoc($resultData)) {
         return $row;
    }
    else {
        $result = false;
        return result;
    }
    mysqli_stmt_close($stmt);
}
function loginUser($conn, $username, $pwd) {
    $uidExists = uidExists($conn, $username);
    if($uidExists === false) {
        header("location: ../index.php?error=wronglogin");
        exit();
    }
    $pwdBd = $uidExists["password"];
    if($pwd !== $pwdBd) {
        header("location: ../index.php?error=wrongpwd");
        exit();
    }
    else if($pwd === $pwdBd) {
        session_start();
        $_SESSION["user"] = $uidExists["nombre_usuario"];
        header("location: ../taller.html");
        exit();
    }
}

if(isset($_POST['submitLogin'])) {
    $username = $_POST['username'];
    $password = $_POST['pwd'];

    require_once 'connection.php';

    if(emptyInputLogin($username, $password) !== false) {
        header("location: ../index.php?error=emptyinput");
        exit();
    }
    loginUser($conn, $username, $password);
}
else {
    header("location: login.php");
    exit();
}