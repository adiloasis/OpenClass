<?php
	require 'db.class.php';
	$DB = new DB();
	
	
	$idr=$_GET["a"];
	if(!$idr){
		 header('Location: articles.php');      
	}
		$produits = $DB->query('SELECT * FROM blog WHERE id="'.$idr.'"');
		
		foreach ($produits as $produit):
		
					$id=$produit->id;
					$titre=$produit->titre;
					$contenu=html_entity_decode($produit->contenu);
					$date=$produit->date;
					$img=$produit->img;
					$resume=$produit->resume;
					

					
	
	endforeach;
?>
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
<!--------  pub niveau flottante ------>

<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<script>
  (adsbygoogle = window.adsbygoogle || []).push({
    google_ad_client: "ca-pub-8163109093653687",
    enable_page_level_ads: true
  });
</script>

<!------->
	<meta property="fb:pages" content="1148977828526504" />
	<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
	  <meta property="op:markup_version" content="v1.0">

		  <!-- The URL of the web version of your article --> 
		  <link rel="canonical" href="http://www.lafinepress.fr/article.php?a=<?=$id;?>">
		  
		  <!-- The style to be used for this article --> 
		  <meta property="fb:article_style" content="default">
		
		<title><?=$titre;?></title>
		<meta charset="utf-8" />
		<meta property="og:title" content="<?=$titre;?>"/>
		<meta property="og:image" content="http://www.lafinepress.fr/images/<?=$img;?>"/>

		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
		<!--[if lte IE 8]><script src="assets/js/ie/html5shiv.js"></script><![endif]-->
		<link rel="stylesheet" href="assets/css/main3.css" />
		<!--[if lte IE 9]><link rel="stylesheet" href="assets/css/ie9.css" /><![endif]-->
		<!--[if lte IE 8]><link rel="stylesheet" href="assets/css/ie8.css" /><![endif]-->
	</head>
	<body>
			<script>
			  window.fbAsyncInit = function() {
				FB.init({
				  appId      : '713279848820334',
				  xfbml      : true,
				  version    : 'v2.8'
				});
			  };

			  (function(d, s, id){
				 var js, fjs = d.getElementsByTagName(s)[0];
				 if (d.getElementById(id)) {return;}
				 js = d.createElement(s); js.id = id;
				 js.src = "//connect.facebook.net/en_US/sdk.js";
				 fjs.parentNode.insertBefore(js, fjs);
			   }(document, 'script', 'facebook-jssdk'));
			</script>
				<div id="fb-root"></div>
			<script>(function(d, s, id) {
			  var js, fjs = d.getElementsByTagName(s)[0];
			  if (d.getElementById(id)) return;
			  js = d.createElement(s); js.id = id;
			  js.src = "//connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v2.8";
			  fjs.parentNode.insertBefore(js, fjs);
			}(document, 'script', 'facebook-jssdk'));</script>

		<!-- Wrapper -->
			<div id="wrapper">

				<!-- Main -->
					<div id="main">
						<div class="inner">

							<!-- Header -->
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
								<header id="header">
									<a href="index.php" class="logo"><strong>LaFinePRESS</strong></a>
									<ul class="icons">
										<li><a href="https://twitter.com/LaFinePress" class="icon fa-twitter"><span class="label">Twitter</span></a></li>
										<li><a href="https://facebook.com/LaFinePress" class="icon fa-facebook"><span class="label">Facebook</span></a></li>
									
									</ul>
								</header>

							<!-- Content -->
								<section>
									<span class="image main"><img src="images/<?=$img;?>" alt="" /></span>
									<header class="main">
										<h1><?=$titre;?></h1>
									</header>
									<hr class="major" />
									<p><?=$resume;?><br /><span class="icon fa-calendar-o"></span><em> Publié le : <?=$date;?></em></p>
									<hr class="major" />
									<div class="fb-like" data-href="https://m.facebook.com/LaFinePress-1148977828526504/" data-layout="button" data-action="like" data-show-faces="true" data-share="true"></div>
									<br /><br />

									<?=$contenu;?><br />
																<div class="fb-like" data-href="https://m.facebook.com/LaFinePress-1148977828526504/" data-layout="button" data-action="like" data-show-faces="true" data-share="true"></div>
					<br /><br />
<div class="fb-page" 
  data-href="https://www.facebook.com/lafinepress/"
  data-adapt-container-width="true"
  data-hide-cover="false"
  data-show-facepile="false" 
  data-show-posts="false"></div>
<br/>
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
								</section>

						</div>
					</div>

<?php
include 'sidebar.php';
?>