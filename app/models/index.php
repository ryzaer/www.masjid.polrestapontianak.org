<?php $this->index = function($p){//===== FUNCTION START HERE ==========>
	// inisiasi variable mode db production
	$p->fn->sql_production();
	$p->fn->style_n_scripts();
	$p->dirBase = $p->PARAMS['slugs'] ? $p->PARAMS['slugs']:'index';
	$p->srcBase = $p->PARAMS['slugs'] ? '../' : './';
	$p->view("app/templates/index.htm");


}?>