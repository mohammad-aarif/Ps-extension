// This Script is Created By Mohammad Arif
//Only For Personal Use




//Getting Group
var groups = activeDocument.layerSets
//var test = groups[0].artLayers
//alert(test.length)
//alert(groups)
//groups[1].name = "arif"
for(var i =0; i < groups.length; i++){
    var num = i+1;
    groups[i].name = "Lens " + num;
    var layers = groups[i].artLayers;
    //alert(layers.length)
    //layers.add()
    for(var x = 0; x < layers.length; x++){
        layers[x].name = x+1
        }
}

//var layerName = activeDocument.artLayer
//layername.name = "Background"