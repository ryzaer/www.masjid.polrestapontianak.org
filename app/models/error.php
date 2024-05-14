<?php $this->error = function($p){//===== FUNCTION START HERE ==========>
    // inisiasi variable mode db production
	$p->fn->sql_production();
    $p->fn->style_n_scripts();
    $p->URLBase = '//'.$p->HOST.preg_replace('/\/+/','/',$p->BASE.'/');
    $p->view("app/templates/error.htm");

}?>