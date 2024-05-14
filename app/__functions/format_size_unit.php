<?php function format_size_unit($bytes){
    // contoh penggunaan $p->fn->format_size_unit(8798837982734)
    if ($bytes >= 1073741824)
        $bytes = number_format($bytes / 1073741824, 2) . ' gb';    
    elseif ($bytes >= 1048576)
        $bytes = number_format($bytes / 1048576, 2) . ' mb';    
    elseif ($bytes >= 1024)    
        $bytes = number_format($bytes / 1024, 2) . ' kb';    
    elseif ($bytes > 1)    
        $bytes = $bytes . ' bytes';    
    elseif ($bytes == 1)    
        $bytes = $bytes . ' byte';    
    else    
        $bytes = '0 byte';
    return $bytes;
}