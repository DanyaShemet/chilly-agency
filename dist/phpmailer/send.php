<?php
//  phpmailer files
require 'PHPMailer.php';
require 'SMTP.php';
require 'Exception.php';

// Variables that the user submits
$name = $_POST['name'];
$email = $_POST['email'];
$text = $_POST['message'];

// Checking the validity of EMail
if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $msg = "ok";
    $mail->isSMTP();
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP server
    $mail->Username   = 'shemetwork@gmail.com'; // Login email
    $mail->Password   = 'chicipici1234'; //Email Password
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('shemetwork@gmail.com', 'Request from site'); // Mail address

    // Message recipient
    $mail->addAddress('shemetwork@gmail.com');

    // Letter
    $mail->isHTML(true);

    $mail->Subject = 'Letter heading';
    $mail->Body    = "<b>Name:</b> $name <br>
    <b>Email:</b> $email<br><br>
    <b>Message:</b><br>$text";


    // Проверяем отравленность сообщения
    if ($mail->send()) {
        echo "$msg";
    } else {
    echo "Message has not been sent. Your email settings are incorrect";
    }

    } catch (Exception $e) {
        echo "Message has not been sent. Cause of error: {$mail->ErrorInfo}";
    }

    } else {
        echo 'mailerror';
    }