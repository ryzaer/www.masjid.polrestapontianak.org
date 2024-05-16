<?php function style_n_scripts(){
	$p = \build::instance();
	$p->page_title = $p->get('APP.name');
	$p->index_css = $p->styles(
		// penamaan awal home.css utk default library css di folder assets
		// lokasi : app/assets/css/home.css
		"home.css",
		// manginclude library lainnya
		"css/colors.css",
		"css/base.css",
		"hero.css",
	);

	$p->index_js = $p->scripts(
		"home.js", 
		"bootstrap.min.js",
		// mengaktifkan custom script pada halaman awal
		"inisiasi-index.js"
	);
}