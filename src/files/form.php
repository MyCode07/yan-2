<?php

    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $msg = $_POST['msg'];
    $service = $_POST['order-type'];

    $token = "5867300529:AAEF3mOeF7lSiRTvWwuk6OonqOoY_lhRsio";
    $chat_id = "-756402697";
    $arr = array(
        'Имя: ' => $name,
        'Телефон: ' => $phone,
        'E-mail' => $email,
        'Сообщенеи:' => $msg
    );

    if(!empty($service)){
        $dop = '<b>Заказ - '.$service.'</b>%0A%0A';
    }
    else{
        $dop = '<b>Обсуждение</b>%0A%0A';
    }

    $txt = '<b>Новый заказ со сайта yanstudio.site.</b>%0A'.$dop;
    foreach($arr as $key => $value) {
        if(trim(!empty($value))){
            $txt .= "<b>".$key."</b>  ".$value.".%0A";
        }
    };

    $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
	header('Content-type: application/json');
	echo json_encode($txt);
?>
