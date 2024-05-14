<?php function parse_exec($prms=[])
{
    $send["path"] = isset($prms["path"]) ? $prms["path"] : "";
    $send["exec"] = isset($prms["exec"]) ? $prms["exec"] : "";
    $send["data"] = isset($prms["data"]) ? $prms["data"] : "";
    $send["date"] = date("Y-m-d H:i");
    return \__fn::open_method('encrypt',json_encode($send));
}