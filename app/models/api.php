<?php $this->api = function($p){//===== FUNCTION START HERE ==========>
	// inisiasi variable mode db production
	$p->fn->sql_production();
	
	// filter api route berdasarkan variable slugs
	switch ($p->PARAMS["slugs"]) {
		default:
			// prameter output format
			$format = 'json';
			// data awal jika parameter slugs tidak ada/ salah
			$output = [
				"data" => []
			];
			break;

		// route menampilkan surat masuk
		// case 'tampilkan_suratmasuk':
		// 	$format = 'json';		
		// 	$output = $p->fn->api_tampilkan_suratmasuk();
		// 	break;
			
		
	}
	
	if($format=='json'){
		header("Content-Type: application/json");
		print json_encode($output);		
	}
}?>