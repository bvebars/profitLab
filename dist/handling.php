<?php

$password = $_GET['password'];
$passwordAgain = $_GET['passwordAgain'];
$email = $_GET['email'];

$arrayName = array('password' => '', 'passwordAgain' => '', 'email' => '');

if ($password == '') {
    $arrayName['password'] = 'none';
} else if (strlen($password) < 5) {
    $arrayName['password'] = 'shortPassword';
}

if ($password == '') {
    $arrayName['passwordAgain'] = 'none';
} else if ($password !== $passwordAgain) {
    $arrayName['passwordAgain'] = 'unequal';
}

if ($email == '') {
    $arrayName['email'] = 'none';
} else if (strrpos($email, '@')) {
    $arrayName['email'] = 'success';
} else {
    $arrayName['email'] = 'incorrect';
}

function output($arrayName)
{
    return json_encode($arrayName);
}

echo output($arrayName);



