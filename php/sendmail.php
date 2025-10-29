<?php
if($_SERVER['REQUEST_METHOD'] !== 'POST') { http_response_code(405); echo 'Method not allowed'; exit; }
$to = 'ssengineering030@gmail.com';
$name = htmlspecialchars($_POST['name'] ?? 'No name');
$email = filter_var($_POST['email'] ?? '', FILTER_VALIDATE_EMAIL);
$phone = htmlspecialchars($_POST['phone'] ?? '');
$company = htmlspecialchars($_POST['company'] ?? '');
$message = htmlspecialchars($_POST['message'] ?? '');
$subject = "Website enquiry from $name";
$body = "Name: $name\nEmail: $email\nPhone: $phone\nCompany: $company\n\nMessage:\n$message";
$headers = "From: $name <$email>\r\nReply-To: $email\r\n";
if(!$email){ http_response_code(400); echo 'Invalid email'; exit; }
$sent = mail($to, $subject, $body, $headers);
if($sent){ echo 'OK'; } else { http_response_code(500); echo 'Mail failed'; }
?>