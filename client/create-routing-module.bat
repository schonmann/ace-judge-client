set module=%1
shift
ng g m modules/%module% --routing && ng g c modules/%module%/components/%module% --routing