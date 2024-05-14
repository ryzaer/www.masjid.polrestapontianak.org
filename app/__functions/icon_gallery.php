<?php function icon_gallery($str){
	// icon tipe file default
	$bin =["bin/unknown","text-secondary","file-doc","fa fa-file-o"]; 
	// icon lainnya
	$img =[$str,"file-img","text-dark","fa fa-file-image-o"];
	$doc =[$str,"file-doc","text-info","fa fa-file-word-o"];
	$xls =[$str,"file-doc","text-success","fa fa-file-excel-o"];
	$ppt =[$str,"file-doc","text-warning","fa fa-file-powerpoint-o"];
	$pdf =[$str,"file-doc","text-danger","fa fa-file-pdf-o"];
	// list extensi
	$extns = [
		"pptx" => $ppt,
		"ppt" => $ppt,
		"pot" => $ppt,
		"pps" => $ppt,
		"ppa" => $ppt,
		"xlsx" => $xls,
		"xls" => $xls,
		"xlt" => $xls,
		"xla" => $xls,
		"docx" => $doc,
		"doc" => $doc,
		"rtf" => $doc,
		"pdf" => $pdf,
		"jpeg" => $img,
		"webp" => $img,
		"jpg" => $img,
		"png" => $img,
		"png" => $img,
	];

	return isset($extns[$str]) ? $extns[$str]: $bin;
}