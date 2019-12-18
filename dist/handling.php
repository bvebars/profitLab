<?php

$password = $_GET['password'];
$email = $_GET['email'];

$arrayName = array('password' => '', 'email' => '');

if ($password == '') {
    $arrayName['password'] = 'none';
} else if (strlen($password) < 5 ) {
    $arrayName['password'] = 'shortPassword';
}

if ($email == '') {
    $arrayName['email'] = 'none';
} else if (strrpos($email, '@')) {
    $arrayName['email'] = 'success';
}



function output($arrayName)
{
    return json_encode($arrayName);
}

echo output($arrayName);

//function checkEmail($app)
//{
//    $arrayName = array($app);
//    return json_encode($arrayName);
//}


//array_push($arrayName, 'arr');


//if ($password == '' || $email == '') {
//   echo ["Ошибка"];


//} else {
// echo "Успешно";
//}



