[
	{
		code: "say \"Qual o seu nome?\";\nmy $nome = &lt;STDIN&gt;\n\nprint \"Ol&aacute;, $nome\";",
		heading: "Pronto. Agora voc&ecirc; sabe entrada e sa&iacute;da em Perl.",
		description: "e duas maneiras diferentes de escrever na tela!"
	},


	{
		code: "use Dancer;\n\nget '/hello' => sub {\n\t\"alo, mundo!\"\n};\n\ndance;",
		heading: "Pronto. Agora você sabe criar aplicações Web em Perl.",
		description: "o framework Dancer oferece uma estrutura minimalista, ágil e divertida."
	},

	{
		code: "package MinhaClasse;\nuse Moose;\n\nhas 'atributo', is => 'rw', isa => 'Int';\n\nsub metodo {\n\tmy $self = shift;\n}",
		heading: "Pronto. Agora você sabe criar objetos em Perl.",
		description: "Moose é um sistema completo de objetos com atributos, metaclasses, roles e muito mais."
	},

	{
		code: "use autodie;\n\nopen my $fh, '<', 'arquivo.txt';\n\nwhile ( my $linha = <$fh> ) {\n\tprint $linha;\n}\n\nclose $fh;",
		heading: "Pronto. Agora você sabe ler arquivos com Perl.",
		description: ""
	},

	{
		code: "use autodie;\n\nopen my $fh, '>', 'arquivo.txt';\n\nprint $fh \"Alô, mundo!\";\n\nclose $fh;",
		heading: "Pronto. Agora você sabe escrever arquivos com Perl.",
		description: ""
	},

	{
		code: "use Test::More;\n\nmy $valor = pega_valor_de_algum_lugar();\n\nis( $valor, 10, 'obtendo do valor' );\n\ndone_testing;",
		heading: "Pronto. Agora você sabe criar testes em Perl.",
		description: ""
	},

	{
		code: "use Net::Twitter::Search;\n\nmy $busca = Net::Twitter::Search->new;\n\n$busca->search('Perl')->{results};\n\nforeach my $result ( @$busca ) {\n\tsay $result->{text};\n}",
		heading: "Pronto. Agora você sabe fazer buscas no Twitter via Perl.",
		description: "Criar posts e manipular sua conta também é fácil e rápido."
	},

	{
		code: "use Business::BR::CPF;\n\nmy $cpf = '263.946.533-30';\n\nif (test_cpf( $cpf )) {\n\tsay \"OK!\";\n}",
		heading: "Pronto. Agora você sabe validar CPF em Perl.",
		description: "validação de CNPJ, PIS, etc, são tão simples quanto!"
	},

	{
		code: "use WWW::Mechanize;\n\nmy $mech = WWW::Mechanize->new;\n\n$mech->get( 'http://www.exemplo.com' );\n\n$mech->follow_link( text => 'download' );\n\n$mech->submit_form( with_fields => {\n\tnome      => 'Meu Nome',\n\tlinguagem => 'Perl!',\n});",
		heading: "Pronto. Agora você sabe fazer um Crawler para Web com Perl.",
		description: "crie robôs de Internet e navegue pelo conteúdo via expressões regulares, XPath ou seletores CSS."
	},

	{
		code: "use DateTime;\n\nmy $data = DateTime->new(\n\tyear   => 1912,\n\tmonth  => 10,\n\tday    => 15,\n);\n\nmy $intervalo = DateTime->now - $data;\nsay $intervalo->weeks;",
		heading: "Pronto. Agora você sabe manipular datas e horas com Perl.",
		description: "incluindo horário de verão, anos bissextos e time zones - tudo com precisão até nanosegundos!"
	},

	{
		code: "use Archive::Extract;\n\nmy $arq = Archive::Extract->new(\n\tarchive => 'meuarquivo.zip'\n);\n\n$arq->extract( to => '/meu/destino' );",
		heading: "Pronto. Agora você sabe extrair arquivos compactados usando Perl.",
		description: "uma única interface para zip, tar, bz2, lzma, e muito mais."
	},

	{
		code: "use Chart::Clicker;\n\nmy $grafico = Chart::Clicker->new;\nmy @valores = (4, 8, 15, 16, 23, 42);\n\n$grafico->add_data('Lost', \\@valores);\n$grafico->write_output('foo.png');",
		heading: "Pronto. Agora você sabe criar gráficos com Perl.",
		description: "linhas, barras, pizzas, &aacute;reas, bolhas, e muito mais."
	},

	{
		code: "use DBI;\n\nmy $db = DBI->connect($dsn, $user, $pwd);\nmy $query = $db->prepare(\n\t'SELECT * FROM tabela WHERE nome = ?'\n);\n$query->execute( $nome );\n\nwhile( my $item = $query->fetchrow_hashref ) {\n\tsay \"item: \" . $item->{id};\n}\n$db->disconnect;",
		heading: "Pronto. Agora você sabe manipular bancos de dados com Perl.",
		description: "experimente também os ORMs como Fey::ORM e o popular DBIx::Class"
	},

	{
		code: "use WebService::GData::YouTube;\nmy $yt = WebService::GData::YouTube->new;\n\nmy $p = $yt->get_user_profile('user');\nsay $p->about_me;\n\nmy $stats = $p->statistics;\nsay $stats->view_count;\nsay $stats->subscriber_count;\nsay $stats->total_upload_views;",
		heading: "Pronto. Agora você sabe acessar contas do YouTube com Perl.",
		description: "fazer uploads e downloads de vídeos tamém é fácil!"
	},

	{
		code: "use Email::Send::SMTP::Gmail;\n\nmy $mail = Email::Send::SMTP::Gmail->new(\n\t-smtp  => 'gmail.com',\n\t-login => 'minhaconta@gmail.com',\n\t-pass  => 'minha senha'\n);\n\n$mail->send( -to      => 'algum@email.com',\n             -subject => 'meu assunto',\n             -body    => 'minha mensagem!',\n);",
		heading: "Pronto. Agora você sabe enviar emails do GMail com Perl.",
		description: "dá até para anexar arquivos, basta passar o caminho!"
	},

	{
		code: "use Inline 'Python';\n\nmy $foo = Foo->new;\nsay $foo->add(9, 16);\n\n__END__\n__Python__\nclass Foo(object):\n\tdef __init__(self):\n\t\tprint \"new Foo object being created\"\n\t\tself.data = {}\n\tdef add(self, x, y): return x + y;\n",
		heading: "Pronto. Agora você sabe programar Python dentro de Perl.",
		description: "e Ruby, Java, C#, Lua, C, Scheme, Assembly, ..."
	},

	{
		code: "$ curl -kL http://install.perlbrew.pl | bash\n$ source ~/perl5/perlbrew/etc/bashrc\n\n$ perlbrew install perl-5.18.0\n$ perlbrew list\n$ perlbrew switch perl-5.18.0",
		heading: "Pronto. Agora você sabe instalar seu próprio perl.",
		description: "teste diferentes versões e instale módulos sem precisar de root."
	},

	{
		code: "use Excel::Writer::XLSX;\n\nmy $xls = Excel::Writer::XLSX->new('dados.xlsx');\nmy $planilha = $xls->add_worksheet();\n\n$planilha->write( 'A1', 'Olá, Excel!' );\n$planilha->write( 'A4', '=SIN(PI()/4)');\n\n$xls->close;",
		heading: "Pronto. Agora você sabe criar planilhas Excel com Perl.",
		description: "escolha cores, adicione gráficos, personalize à vontade. Ler documentos do Office também é fácil!"
	},

	{
		code: "use Digest;\nmy $frase = 'minha frase original';\n\nsay Digest->new('MD5')->md5_hex( $frase );\n\nsay Digest->new('SHA')->sha1_hex( $frase );\n\nmy $digest = Digest->new( 'SHA' => 256 );\n$digest->addfile( 'arquivo.txt' );\nsay $digest->hexdigest;",
		heading: "Pronto. Agora você sabe calcular hashes em Perl.",
		description: "MD5, SHA1, Whirlpool, e muitos outros, prontos para serem utilizados."
	},

	{
		code: "use Crypt::CBC;\nmy $cifra = Crypt::CBC->new(\n\t-key    => 'minha chave secreta',\n\t-cipher => 'Blowfish',\n);\n\nmy $codificado = $cifra->encrypt( 'msg secreta' );\n\nmy $decodificado = $cifra->decrypt( $codificado );",
		heading: "Pronto. Agora você sabe criptografar dados com Perl.",
		description: "Frases ou arquivos, vários algoritmos para escolher. Quem disse que segurança precisa ser complicado?"
	},

	{
		code: "package MyBot;\nuse Moses;\n\nserver   'irc.freenode.net';\nnickname 'myperlbot';\nchannels '#bots';\n\nevent irc_bot_addressed => sub {\n\tmy ($self, $channel, $msg) = @_[OBJECT, ARG1, ARG2];\n\t$self->privmsg( $channel => \"Hello!\" );\n}\nMyBot->run;",
		heading: "Pronto. Agora você sabe criar bots de IRC com Perl.",
		description: "De notificações simples à IA complexa, Perl tem o que você precisa."
	},

	{
		code: "use Facebook::Graph;\nmy $fb = Facebook::Graph->new;\nmy $perl_page = $fb->fetch('106143969416749');\n\nsay $perl_page->{likes};\nsay $perl_page->{description};\nsay $perl_page->{talking_about_count};\n\nsay $fb->picture('fbyoda')->get_large->uri_as_string;",
		heading: "Pronto. Agora você sabe criar clientes para o Facebook com Perl.",
		description: "fazer aplicativos completos interagindo com a API são igualmente simples e diretos!"
	},

	{
		code: "\nuse CAM::PDF;\nmy $pdf_read = CAM::PDF->new('somefile.pdf');\nforeach my $n (0 .. $pdf_read->numPages ) {\n\tsay $pdf_read->getPageText($n);\n}\n\nuse PDF::API2;\nmy $pdf_write = PDF::API2->new;\nmy $text = $pdf_write->page->text;\n$text->font( $pdf_write->corefont('Helvetica-Bold'), 20 );\n$text->translate(200,700);\n$text->text('Alo, Mundo!');\n$pdf_write->saveas('novo.pdf');",
		heading: "Pronto. Agora você sabe ler e escrever arquivos PDF com Perl."
	},

	{
		code: "use Spreadsheet::Read;\nmy $data = ReadData( 'data.csv', sep => ';' );\nmy $data = ReadData( 'data.xlsx' ); # .xls, .ods, .sxc...\n\nsay $sheet->[1]{A3}; # primeira planilha, campo A3",
		heading: "Pronto. Agora você sabe ler planilhas em Perl.",
		description: "CSV, XLS, XLSX, ODS. Não importa o formato, você tem o que precisa."
	},

    {
        code: "use Gtk2 '-init';\n\nmy $window = Gtk2::Window->new;\n$window->set_title('Hello, GUI!');\n$window->signal_connect(\n\t'delete_event' => sub { Gtk2->main_quit }\n);\n$window->show_all;\n\nGtk2->main;",
        heading: "Pronto. Agora você sabe criar janelas com Perl.",
        description: ""
    }
]
