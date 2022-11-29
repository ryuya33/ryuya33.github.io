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
$address = $_POST["address"];
$email = $_POST["email"];
$telNumber = $_POST["telNumber"];
$message = $_POST["message"];

$name = htmlspecialchars($name);
$address = htmlspecialchars($address);
$email = htmlspecialchars($email);
$telNumber = htmlspecialchars($telNumber);
$message = htmlspecialchars($message);

print $name . "様<br>\n"; 

print "お問い合わせありがとうございます。<br>\n";
print "確認のため、入力された内容を下記に表示させていただきます。<br>\n";
print "間違いがありましたら、「戻る」ボタンをクリックし、訂正してください。<br>\n";
print "間違いがなければ「OK」ボタンをクリックしてください。<br>\n";
print "<br>";
print "お名前：" . $name . "<br>";
print "住所：" . $address . "<br>";
print "メールアドレス：" . $email . "<br>";
print "お電話番号：" . $telNumber . "<br>";
print "お問い合わせ内容：" . $message . "<br>";
print "<br>";

// if($name=="" || $address=="" || $email=="" || $telNumber=="") {
//   print "<form>";
//   print "<input type='button' onclick='history.back()' value='戻る'>"; 
//   print "</form>";
// } else {
  print "<form method='post' action='thanks.php'>";
  print "<input type='hidden' name='name' value='" . $name . "'>";
  print "<input type='hidden' name='email' value='" . $email . "'>";
  print "<input type='button' onclick='history.back()' value='戻る'>"; 
  print "<input type='submit' value='OK'>"; 
  print "</form>";
// }



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

 