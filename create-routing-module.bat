set folder=%2
set module=%1
shift
shift
ng g m %folder%/modules/%module% --routing && ng g c %folder%/modules/%module%/components/%module% --routing