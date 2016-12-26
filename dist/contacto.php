<?php
  $smtp_host = $_ENV['SMTP_HOST'];
  $smtp_user = $_ENV['SMTP_USER'];
  $smtp_password = $_ENV['SMTP_PASSWORD'];

  require('phpmailer.class.php');
  require('smtp.class.php');

  $mail = new PHPMailer;

  $mail->SMTPDebug = 3;                               // Enable verbose debug output

  $mail->isSMTP();                                      // Set mailer to use SMTP
  $mail->Host = $smtp_host;  // Specify main and backup SMTP servers
  $mail->SMTPAuth = true;                               // Enable SMTP authentication
  $mail->Username = $smtp_user;                 // SMTP username
  $mail->Password = $smtp_password;                           // SMTP password
  // $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
  $mail->Port = 587;                                    // TCP port to connect to

  $mail->setFrom('web@estudiorosso.com.ar', 'Web Mailer');
  $mail->addAddress('mrosso10@gmail.com');     // Add a recipient

  $mail->Subject = 'Email desde Web';
  $mail->Body    = 'This is the HTML message body <b>in bold!</b>';

  if(!$mail->send()) {
      echo 'Message could not be sent.';
      echo 'Mailer Error: ' . $mail->ErrorInfo;
  } else {
      echo 'Message has been sent';
  }
