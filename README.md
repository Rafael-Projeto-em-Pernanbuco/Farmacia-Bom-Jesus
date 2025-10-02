
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Farmácia Bom Jesus</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            background-color: #fff;
            color: #333;
        }

        header {
            background-color: #8B0000; /* vermelho escuro */
            color: white;
            padding: 20px;
            text-align: center;
        }

        nav {
            background-color: #b22222;
            overflow: hidden;
        }

        nav a {
            float: left;
            display: block;
            color: white;
            text-align: center;
            padding: 14px 20px;
            text-decoration: none;
        }

        nav a:hover {
            background-color: #8B0000;
        }

        .container {
            padding: 20px;
        }

.social-buttons a {
      margin: 10px;
      text-decoration: none;
      font-size: 24px;
      color: white;
    }

    .email-form input, .email-form button {
      padding: 10px;
      font-size: 16px;
      margin: 5px;
    }

    .chat-box {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background-color: #b30059;
      padding: 15px;
      border-radius: 10px;
      width: 300px;
    }

    .chat-box textarea {
      width: 100%;
      height: 60px;
      resize: none;
    }

    .chat-box button {
      margin-top: 5px;
      width: 100%;
      padding: 8px;
    }

    .announcement {
      background-color: #ff69b4;
      padding: 20px;
      margin-top: 20px;
      border-radius: 10px;
    }

    iframe {
      width: 100%;
      border: none;
      margin-top: 20px;
    }

    .audio-recorder {
      margin-top: 10px;
    }

        iframe {
            width: 100%;
            height: 400px;
            border: none;
        }

        footer {
            background-color: #8B0000;
            color: white;
            text-align: center;
            padding: 10px;
        }

        #google_translate_element {
            float: right;
            margin: 10px;
        }
    </style>
</head>
<body>

    <header>
        <h1>Farmácia Bom Jesus</h1>
        <p>Rua Padre Medeiros N°02 - Centro, Exu - PE</p>
    </header>

    <div id="google_translate_element"></div>

    <nav>
        <a href="#inicio">Início</a>
        <a href="#localizacao">Localização</a>
        <a href="#contato">Contato</a>
        <a href="#configuracoes">Configurações</a>
    </nav>

    <div class="container" id="inicio">
        <h2>Bem-vindo à Farmácia Bom Jesus!</h2>
        <p>Estamos prontos para cuidar da sua saúde com responsabilidade, carinho e os melhores preços.</p>
    </div>

    <div class="container" id="localizacao">
        <h2>Localização</h2>
        <iframe 
            src="https://www.google.com/maps?q=Rua+Padre+Medeiros,+2,+Exu,+PE&output=embed">
        </iframe>
    </div>

    <div class="container" id="contato">
        <h2>Fale Conosco</h2>
        <p>Telefone: (87)9 9939-1597</p>
        <p>Email: atendimento@farmaciabomjesus.com.br</p>
    </div>

<!-- Redes Sociais -->
    <div class="social-buttons">
      <a href="https://facebook.com" target="_blank">📘 Facebook</a>
      <a href="https://instagram.com" target="_blank">📸 Instagram</a>
      <a href="https://wa.me/87999391597" target="_blank">📱 WhatsApp</a>
      <a href="https://tiktok.com" target="_blank">🎵 TikTok</a>
      <a href="https://kwai.com" target="_blank">📷 Kwai</a>
      <a href="https://youtube.com" target="_blank">📺 YouTube</a>
      <a href="https://twitter.com" target="_blank">🐦 Twitter</a>
      <a href="https://telegram.me" target="_blank">✈️ Telegram</a>
    </div>

    <footer>
        <p>&copy; 2025 Farmácia Bom Jesus - Todos os direitos reservados.</p>
    </footer>

    <!-- Google Tradutor -->
    <script type="text/javascript">
        function googleTranslateElementInit() {
            new google.translate.TranslateElement({pageLanguage: 'pt'}, 'google_translate_element');
        }
    </script>
    <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>

    <!-- Chat Tawk.to (gratuito) -->
    <script type="text/javascript">
    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
    (function(){
        var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
        s1.async=true;
        s1.src='https://embed.tawk.to/ID_DO_SEU_CHAT/default';
        s1.charset='UTF-8';
        s1.setAttribute('crossorigin','*');
        s0.parentNode.insertBefore(s1,s0);
    })();
    </script>
    
<script src="script.js"></script>

</body>
</html>
