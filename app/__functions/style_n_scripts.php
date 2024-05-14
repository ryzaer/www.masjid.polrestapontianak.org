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
		"snippet/sortable.css",
		"hero.css",
	);

	$p->index_js = $p->scripts(
		// penamaan awal home.js utk default library js di folder assets
		// lokasi : app/assets/js/home.js
		"home.js", 
		// manginclude library lainnya
		"js/plugins/jquery.dataTables.min.js",
		"js/popper.min.js",
		"js/bootstrap.min.js",
		"js/plugins/bootstrap-autocomplete.min.js",
		"js/plugins/bootstrap-datepicker.min.js",
		"js/plugins/dataTables.bootstrap.min.js",
		"js/plugins/bootstrap-notify.min.js",
		"js/plugins/pace.min.js",
		"js/plugins/sweetalert.min.js",
		"js/plugins/sortable.js",
		"js/main.js",
		"snippet/sortable.js",
		// mengaktifkan custom script pada halaman awal
		"page_form/inisiasi-index.js"
	);
}