<?php $this->home = function($p){//===== FUNCTION START HERE ==========>
	// inisiasi variable mode db production
	$p->fn->sql_production();
	$p->fn->style_n_scripts();
	$p->view("app/templates/home.htm");

}?>