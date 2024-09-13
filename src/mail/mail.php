<?php
// Allow CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../mail/Exception.php';
require '../mail/PHPMailer.php';
require '../mail/SMTP.php';

// Datos del formulario
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];

// Configuración de PHPMailer
$mail = new PHPMailer(true);

try {
    // Configuración del servidor
    $mail->isSMTP();
    $mail->Host = 'smtp.hostinger.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'info@daisyfireapp.com';
    $mail->Password = '41377907Brian_';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port = 465;

    // Configuración del correo
    $mail->setFrom('info@daisyfireapp.com', 'Formulario Web');
    $mail->addAddress('info@daisyfireapp.com', 'VER');

    // Contenido del correo
    $mail->isHTML(true);
    $mail->Subject = 'Nuevo mensaje del formulario web';
    $mail->Body = "Nombre: $nombre<br>Email: $email<br>Mensaje: $mensaje";
    $mail->AltBody = "Nombre: $nombre\nEmail: $email\nMensaje: $mensaje";

    $mail->send();
    echo 'El mensaje ha sido enviado';
} catch (Exception $e) {
    echo "El mensaje no pudo ser enviado. Error de PHPMailer: {$mail->ErrorInfo}";
}
