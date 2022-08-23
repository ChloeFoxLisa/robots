<?php

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;
    require './PHPMailer-master/src/Exception.php';
    require './PHPMailer-master/src/SMTP.php';
    require './PHPMailer-master/src/PHPMailer.php';
    

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'phpmailer/language/');
    
    $mail->isSMTP();
    $mail->Host = 'smtp.mail.ru';
    $mail->SMTPAuth = true;
    $mail->Username = '';
    $mail->Password = '';
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;

    $mail->setFrom('', 'Сайт');
    $mail->addAddress('');
    $mail->Subject = 'Информация с сайта';


    $mail->IsHTML(true);
    

    $body = '<h1>Письмо с сайта</h1>';

    if(trim(!empty($_POST['place']))){
        $body.='<p><strong>Заявка на:</strong> '.$_POST['place'].'</p>';
    }

    if(trim(!empty($_POST['name']))){
        $body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
    }

    if($_POST['place'] == 'Звонок на телефон'){
        if(trim(!empty($_POST['phone']))){
            $body.='<p><strong>Телефон:</strong>  +7 '.$_POST['phone'].'</p>';
        }
    }else{
        if(trim(!empty($_POST['phone']))){
            $body.='<p><strong>Телефон:</strong> '.$_POST['phone'].'</p>';
        }
    }


    $mail->Body = $body;

    if (!$mail->send()) {
        $message = 'Ошибка';
    } else {
        $message = 'Данные отправлены!';
    }

    $response = ['message' => $mail];

    header('Content-type: application/json');
    echo json_encode($response);
?>