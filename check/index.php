<?php

include_once("config.php");

foreach ($server_ports as $port)
{
    $connection = @fsockopen($server_address, $port);

    if (is_resource($connection))
    {
    	echo $server_address;
        fclose($connection);
    }
    else
    {
    	echo null;
        fclose($connection);
    }
}

?>