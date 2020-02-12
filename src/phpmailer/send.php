<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$email = $_POST['email'];
$text = $_POST['text'];

// Проверяем валидность EMail
if (filter_var($email, FILTER_VALIDATE_EMAIL)) {

$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $msg = "ok";
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";                                          
    $mail->SMTPAuth   = true;

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP server
    $mail->Username   = 'shemetg@gmail.com '; // Login email
    $mail->Password   = 'qwErtasiculus'; // Email Password
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('noreply.com', 'Request from site'); // Mail address

    // Message recipient
    $mail->addAddress('shemetg@gmail.com ');
        $mail->isHTML(true);
    
        $mail->Subject = 'Letter heading';
        $mail->Body    = "<b>Name:</b> $name <br>
        <b>Email:</b> $email<br><br>
        <b>Message:</b><br>$text";


// Check message poisoning
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