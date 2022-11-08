<!-- GLOBALS -->
__dirname - path to current directory 
__filename - file name 
require - function to use modules (commonJs)
module - info about current module (file)
process - info about env where the program is being executed

<!-- BUILD IN MODULES -->
OS built in modules => modules bawaan yg berisikan mengenai sistem operasi komputer kita
, PATH,
FS => file system modules bawaan dari commonJs
 , 
HTTP => membuat server untuk mengatur api, listen request

<!-- STREAMS : sangat cocok untuk data/ file yg besar-->
writeable : write the file sequence
readable : read the file sequence
duplex  : baca dan write file sequense
transform: 


<!-- MIDDLEWARE -->
menjembatani antara request dengan response db,
penggunaan function dari middleware harus sangat diharuskan menggunakan next param untuk bisa akses data url reqnya