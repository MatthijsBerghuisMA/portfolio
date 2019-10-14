<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $naam = filter_var($_POST['naam'] , FILTER_SANITIZE_STRING);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);
    

    $to      = 'matthijsdevelopment@gmail.com';
    $subject = 'Portfolio - Contact';
    $message = 'My name is: ' . $naam ."\n\n".$email.".\n\n".$message;
    $headers = 'From:' . $email . "\r\n" .
    'Reply-To:' . $email . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

    if (mail($to, $subject, $message, $headers)) {
        header('location: ../../');
        exit;
    }

    echo "email is wous ouwe";
}
?>

