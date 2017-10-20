<!DOCTYPE HTML>

<html>
	<head>
		<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
		<script>
		  (adsbygoogle = window.adsbygoogle || []).push({
			google_ad_client: "ca-pub-8163109093653687",
			enable_page_level_ads: true
		  });
		</script>
		<meta property="fb:pages" content="1148977828526504" />
		<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>

		<title>La Fine dPress</title>
		<meta charset="utf-8" />
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
		<!--[if lte IE 8]><script src="assets/js/ie/html5shiv.js"></script><![endif]-->
		<link rel="stylesheet" href="assets/css/main2.css" />
		<!--[if lte IE 9]><link rel="stylesheet" href="assets/css/ie9.css" /><![endif]-->
		<!--[if lte IE 8]><link rel="stylesheet" href="assets/css/ie8.css" /><![endif]-->
	</head>
	<body>

		<!-- Wrapper -->
			<div id="wrapper">

				<!-- Main -->
					<div id="main">
													<!--- PUB ------>
							<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
							<!-- LFP responsive -->
							<ins class="adsbygoogle"
							     style="display:block"
							     data-ad-client="ca-pub-8163109093653687"
							     data-ad-slot="3252286258"
							     data-ad-format="auto"></ins>
							<script>
							(adsbygoogle = window.adsbygoogle || []).push({});
							</script>


							<!---   PUBLICITE terminé ------>
						<div class="inner">

							<!-- Header -->
								<header id="header">
									<a href="index.php" class="logo"><strong>LaFine<span style="color:'#f56a6a';">PRESS</span></strong></a>
									<ul class="icons">
										<li><a href="https://twitter.com/LaFinePress" class="icon fa-twitter"><span class="label">Twitter</span></a></li>
										<li><a href="https://facebook.com/LaFinePress" class="icon fa-facebook"><span class="label">Facebook</span></a></li>
									
									</ul>
								</header>

							<!-- Banner -->
								<section id="banner">
									<div class="content">
										<?php
											require 'db.class.php';
											$DB = new DB();
											
											$articles = $DB->query('SELECT * FROM blog WHERE id=(SELECT MAX(id) FROM blog) ');
												foreach ($articles as $produit):
		
													$id=$produit->id;
													$titre=$produit->titre;
													$contenu=$produit->contenu;
													$date=$produit->date;
													$img=$produit->img;
													$resume=$produit->resume;
												endforeach;
										?>

										<header>
											<h1><?=$titre;?><br />
											</h1>
											<p><?=$resume;?></p>
										</header>
										<p></p>
										<ul class="actions">
											<li><a href="article.php?a=<?=$id;?>" class="button big">Lire</a></li>
										</ul>
									</div>
									<span class="image object">
										<img src="images/<?=$img;?>" alt="" />
									</span>
								</section>

							<!-- Section -->
								<section>
									<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- footer -->
<!-----  PUB    ------>
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-8163109093653687"
     data-ad-slot="3902931058"
     data-ad-format="auto"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>
<!------p u b  ----->
									<header class="major">
										<h2>Derniers articles</h2>
									</header>
									<div class="posts">
										<?php
											
											
											$articlos = $DB->query('SELECT * FROM blog ORDER BY date DESC LIMIT 24 ');
												foreach ($articlos as $produito):
		
													$ido=$produito->id;
													$titro=$produito->titre;
													$conteno=$produito->contenu;
													$dato=$produito->date;
													$imgo=$produito->img;
													$resumo=$produito->resume;
										?>
										<article>
											<a href="article.php?a=<?=$ido;?>" class="image"><img src="images/<?=$imgo;?>" alt="" /></a>
											<h3><?=$titro;?></h3>
											<p><?=$resumo;?></p>
											<ul class="actions">
												<li><a href="article.php?a=<?=$ido;?>" class="button">Lire</a></li>
											</ul>
										</article>
										<?php endforeach; ?>
									</div>
								</section>

						</div>
					</div>

<?php
include 'sidebar.php';
?>