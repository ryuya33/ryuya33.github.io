<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>くらしの百科おくも</title>
  <link rel="icon" href="img/favicon.png">
  <link rel="stylesheet" href="css/style.css">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
</head>
<body>
<header>
  <div class="container">
    <div class="head">
      <div class="headline">
        <a href="index.html">
          <h1>くらしの百科おくも</h1>
        </a>
      </div>
      <div class="sp_menu">
        <span class="material-icons" id="open_menu">menu</span>
      </div>
    </div>
    <div class="overlay">
      <span class="material-icons" id="close_menu">close</span>
      <nav class="nav2">
        <ul>
          <li><a href="index.html">home</a></li>
          <li><a href="information.html">information</a></li>
          <li><a href="commodity.html">commodity</a></li>
          <li><a href="access.html">access</a></li>
          <li><a href="contact.html">contact</a></li>
        </ul>
      </nav>
    </div>
    <nav class="nav1">
      <ul>
        <li><a href="index.html"><span>ホーム</span>home</a></li>
        <li><a href="information.html"><span>店舗情報</span>information</a></li>
        <li><a href="commodity.html"><span>商品</span>commodity</a></li>
        <li><a href="access.html"><span>場所</span>access</a></li>
        <li><a href="contact.html"><span>お問い合わせ</span>contact</a></li>
      </ul>
    </nav>
  </div>
</header>



<?php
$name = $_POST["name"];
$email = $_POST["email"];

$name = htmlspecialchars($name);
$email = htmlspecialchars($email);

print $name . "様<br>\n"; 

print "お問い合わせありがとうございました。<br>";
print $email . "に確認メールを送りましたのでご確認ください。<br>\n";

$mail_sub = "アンケートを受け付けました。";
$mail_body = $name . "様へ¥nアンケートご協力ありがとうございました。";
$mail_body = html_entity_decode($mail_body, ENT_QUOTES, "UTF-8");
$mail_head = "From:kurashinohyakkaokumo@gmail.com";
mb_language("Japanese");
mb_internal_encoding("UTF-8");
mb_send_mail($email, $mail_sub, $mail_body, $mail_head);

?>

<!-- フッター -->
<footer>
  <div class="container">
    <small>(c) okumohyakka.com</small>
    <ul>
      <li><a href="#"></a><i class="bi bi-twitter"></i></li>
      <li><a href="#"></a><i class="bi bi-instagram"></i></li>
    </ul>
  </div>
</footer>
<!-- フッターここまで -->
<script src="https://code.jquery.com/jquery-3.6.1.min.js" integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" crossorigin="anonymous"></script>
<script src="js/main.js"></script>
</body>
</html>

 