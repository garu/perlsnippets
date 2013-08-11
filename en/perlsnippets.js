[
	{
		code: "say \"What's your name?\";\nmy $name = &lt;STDIN&gt;\n\nprint \"Hello $name\";",
		heading: "Done. Now you know input and output in Perl.",
		description: "and two different ways to write on the screen!"
	},


	{
		code: "use Dancer;\n\nget '/hello' => sub {\n\t\"hello, world!\"\n};\n\ndance;",
		heading: "Done. Now you know how to create web apps in Perl.",
		description: "the Dancer framework offers a minimalistic structure that's also agile and fun."
	},

	{
		code: "package MyClass;\nuse Moose;\n\nhas 'attribute', is => 'rw', isa => 'Int';\n\nsub method {\n\tmy $self = shift;\n}",
		heading: "Done. Now you know how to create objects in Perl.",
		description: "Moose is a complete object system with attributes, metaclasses, roles and lots more."
	},

	{
		code: "use autodie;\n\nopen my $fh, '<', 'file.txt';\n\nwhile ( my $line = <$fh> ) {\n\tprint $line;\n}\n\nclose $fh;",
		heading: "Done. Now you know how to read files with Perl.",
		description: ""
	},

	{
		code: "use autodie;\n\nopen my $fh, '>', 'file.txt';\n\nprint $fh \"Hello, world!\";\n\nclose $fh;",
		heading: "Done. Now you know how to write to files with Perl.",
		description: ""
	},

	{
		code: "use Test::More;\n\nmy $value = get_value_from_somewhere();\n\nis( $value, 10, 'getting the value' );\n\ndone_testing;",
		heading: "Done. Now you know how to create tests in Perl.",
		description: ""
	},

	{
		code: "use Net::Twitter::Search;\n\nmy $query = Net::Twitter::Search->new;\n\n$query->search('Perl')->{results};\n\nforeach my $result ( @$query ) {\n\tsay $result->{text};\n}",
		heading: "Done. Now you know how to search Twitter via Perl.",
		description: "Creating posts and manipulating your account is also easy and quick."
	},

	{
		code: "use WWW::Mechanize;\n\nmy $mech = WWW::Mechanize->new;\n\n$mech->get( 'http://www.example.com' );\n\n$mech->follow_link( text => 'download' );\n\n$mech->submit_form( with_fields => {\n\tname      => 'My Name',\n\tlanguage => 'Perl!',\n});",
		heading: "Done. Now you know how to make a web Crawler with Perl.",
		description: "create Internet robots and browse through content via regular expressions, XPath or CSS selectors."
	},

	{
		code: "use DateTime;\n\nmy $date = DateTime->new(\n\tyear   => 1912,\n\tmonth  => 10,\n\tday    => 15,\n);\n\nmy $interval = DateTime->now - $date;\nsay $interval->weeks;",
		heading: "Done. Now you know how to manipulate dates and times with Perl.",
		description: "including daylight savings times, leap years and time zones - with precisions going down to nanoseconds!"
	},

	{
		code: "use Archive::Extract;\n\nmy $file = Archive::Extract->new(\n\tarchive => 'myfile.zip'\n);\n\n$arq->extract( to => '/my/path' );",
		heading: "Done. Now you know how to extract compressed files using Perl.",
		description: "a single interface for zip, tar, bz2, lzma, and several more."
	},

	{
		code: "use Chart::Clicker;\n\nmy $grafico = Chart::Clicker->new;\nmy @valores = (4, 8, 15, 16, 23, 42);\n\n$grafico->add_data('Lost', \\@valores);\n$grafico->write_output('foo.png');",
		heading: "Pronto. Agora você sabe criar gráficos com Perl.",
		description: "linhas, barras, pizzas, &aacute;reas, bolhas, e muito mais."
	},

	{
		code: "use DBI;\n\nmy $db = DBI->connect($dsn, $user, $pwd);\nmy $query = $db->prepare(\n\t'SELECT * FROM sometable WHERE name = ?'\n);\n$query->execute( $name );\n\nwhile( my $item = $query->fetchrow_hashref ) {\n\tsay \"item: \" . $item->{id};\n}\n$db->disconnect;",
		heading: "Done. Now you know how to manipulate databases with Perl.",
		description: "make sure you try full-featured ORMs like Fey::ORM and the popular DBIx::Class"
	},

	{
		code: "use WebService::GData::YouTube;\nmy $yt = WebService::GData::YouTube->new;\n\nmy $p = $yt->get_user_profile('user');\nsay $p->about_me;\n\nmy $stats = $p->statistics;\nsay $stats->view_count;\nsay $stats->subscriber_count;\nsay $stats->total_upload_views;",
		heading: "Done. Now you know how to access YouTube accounts with Perl.",
		description: "uploading and downloading videos is also very easy!"
	},

	{
		code: "use Email::Send::SMTP::Gmail;\n\nmy $mail = Email::Send::SMTP::Gmail->new(\n\t-smtp  => 'gmail.com',\n\t-login => 'myaccount@gmail.com',\n\t-pass  => 'mypassword'\n);\n\n$mail->send( -to      => 'some@email.com',\n             -subject => 'my subject',\n             -body    => 'my message!',\n);",
		heading: "Done. Now you know how to send emails from GMail through Perl.",
		description: "you can even attach files, just pass the path as an argument!"
	},

	{
		code: "use Inline 'Python';\n\nmy $foo = Foo->new;\nsay $foo->add(9, 16);\n\n__END__\n__Python__\nclass Foo(object):\n\tdef __init__(self):\n\t\tprint \"new Foo object being created\"\n\t\tself.data = {}\n\tdef add(self, x, y): return x + y;\n",
		heading: "Done. Now you know how to code Python inside Perl.",
		description: "and Ruby, Java, C#, Lua, C, Scheme, Assembly, ..."
	},

	{
		code: "$ curl -kL http://install.perlbrew.pl | bash\n$ source ~/perl5/perlbrew/etc/bashrc\n\n$ perlbrew install perl-5.18.0\n$ perlbrew list\n$ perlbrew switch perl-5.18.0",
		heading: "Done. Now you knwo how to install your own perl.",
		description: "test different versions and install modules without being root."
	},

	{
		code: "use Excel::Writer::XLSX;\n\nmy $xls = Excel::Writer::XLSX->new('data.xlsx');\nmy $sheet = $xls->add_worksheet();\n\n$sheet->write( 'A1', 'Hello, Excel!' );\n$sheet->write( 'A4', '=SIN(PI()/4)');\n\n$xls->close;",
		heading: "Done. Now you know how to create Excel spreadsheets with Perl.",
		description: "pick colors, add graphics, customize at will. Reading Office documents is just as easy!"
	},

	{
		code: "use Digest;\nmy $sentence = 'my original sentence';\n\nsay Digest->new('MD5')->md5_hex( $sentence );\n\nsay Digest->new('SHA')->sha1_hex( $sentence );\n\nmy $digest = Digest->new( 'SHA' => 256 );\n$digest->addfile( 'file.txt' );\nsay $digest->hexdigest;",
		heading: "Done. Now you know how to calculate hashes in Perl.",
		description: "MD5, SHA1, Whirlpool, and many others, ready to be used."
	},

	{
		code: "use Crypt::CBC;\nmy $cipher = Crypt::CBC->new(\n\t-key    => 'my secret key',\n\t-cipher => 'Blowfish',\n);\n\nmy $encrypted = $cipher->encrypt( 'secret message' );\n\nmy $decrypted = $cipher->decrypt( $encrypted );",
		heading: "Done. Now you know how to encrypt/decrypt data with Perl.",
		description: "Sentences or files, several algorithms to pick. Who said security needs to be complicated?"
	},

	{
		code: "package MyBot;\nuse Moses;\n\nserver   'irc.freenode.net';\nnickname 'myperlbot';\nchannels '#bots';\n\nevent irc_bot_addressed => sub {\n\tmy ($self, $channel, $msg) = @_[OBJECT, ARG1, ARG2];\n\t$self->privmsg( $channel => \"Hello!\" );\n}\nMyBot->run;",
		heading: "Done. Now you know how to create IRC bots with Perl.",
		description: "From simple notifications to complex AI, Perl has it."
	},

	{
		code: "use Facebook::Graph;\nmy $fb = Facebook::Graph->new;\nmy $perl_page = $fb->fetch('106143969416749');\n\nsay $perl_page->{likes};\nsay $perl_page->{description};\nsay $perl_page->{talking_about_count};\n\nsay $fb->picture('fbyoda')->get_large->uri_as_string;",
		heading: "Done. Now you know how to create Facebook clients with Perl.",
		description: "creating complete apps interacting with the API is equally simple and straightforward!"
	},

	{
		code: "\nuse CAM::PDF;\nmy $pdf_read = CAM::PDF->new('somefile.pdf');\nforeach my $n (0 .. $pdf_read->numPages ) {\n\tsay $pdf_read->getPageText($n);\n}\n\nuse PDF::API2;\nmy $pdf_write = PDF::API2->new;\nmy $text = $pdf_write->page->text;\n$text->font( $pdf_write->corefont('Helvetica-Bold'), 20 );\n$text->translate(200,700);\n$text->text('Hello, World!');\n$pdf_write->saveas('new.pdf');",
		heading: "Done. Now you know how to read and write PDF files with Perl."
	},

	{
		code: "use Spreadsheet::Read;\nmy $data = ReadData( 'data.csv', sep => ';' );\nmy $data = ReadData( 'data.xlsx' ); # .xls, .ods, .sxc...\n\nsay $sheet->[1]{A3}; # first sheet, field A3",
		heading: "Done. Now you know how to read spreadsheets in Perl.",
		description: "CSV, XLS, XLSX, ODS. Doesn't matter the format, you have what you need."
	},

    {
        code: "use Gtk2 '-init';\n\nmy $window = Gtk2::Window->new;\n$window->set_title('Hello, GUI!');\n$window->signal_connect(\n\t'delete_event' => sub { Gtk2->main_quit }\n);\n$window->show_all;\n\nGtk2->main;",
        heading: "Done. Now you know how to create GUI windows with Perl.",
        description: ""
    }
]
