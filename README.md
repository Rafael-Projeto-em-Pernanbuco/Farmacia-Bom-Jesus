
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
        <p>Telefone: (xx) xxxx-xxxx</p>
        <p>Email: atendimento@farmaciabomjesus.com.br</p>
    </div>

    <div class="container" id="configuracoes">
        <h2>Configurações</h2>
        <p>Aqui você pode configurar preferências (em desenvolvimento).</p>
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

</body>
</html>
