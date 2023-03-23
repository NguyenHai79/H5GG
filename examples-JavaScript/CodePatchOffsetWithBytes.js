h5gg.require(7.8);

var modules = h5gg.getRangesList("UnityFramework"); //module file name

var base = modules[0].start; //module base addr in runtime memory

var addr = Number(base) + 0x10001A36C; //offset

patchBytes(addr,  "1f2003d5"); //bytes

/********************************************************/
//only jailbroken devices can do this
function patchBytes(addr, hex) {
    for(i = 0;i<hex.length/2;i++) {
        var item = parseInt(hex.substring(i*2, i*2+2), 16);
        h5gg.setValue(addr+i,item, "U8");
    }
}
/********************************************************/
