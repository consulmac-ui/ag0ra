// Created by iWeb 3.0.2 local-build-20101229

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({reflection_1:new IWReflection({opacity:0.50,offset:1.00}),shadow_2:new IWShadow({blurRadius:4,offset:new IWPoint(0.6561,0.7547),color:'#fffe11',opacity:0.650000}),reflection_2:new IWReflection({opacity:0.50,offset:1.00}),reflection_3:new IWReflection({opacity:0.50,offset:1.00}),shadow_0:new IWShadow({blurRadius:0,offset:new IWPoint(-24.5407,-4.7702),color:'#008040',opacity:0.500000}),shadow_1:new IWShadow({blurRadius:0,offset:new IWPoint(22.0737,-11.7368),color:'#008040',opacity:0.500000}),reflection_0:new IWReflection({opacity:0.50,offset:1.00})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Festival_Sundari_2011_files/Festival_Sundari_2011Moz.css')
adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id1');fixupIECSS3Opacity('id2');applyEffects()}
function onPageUnload()
{Widget.onunload();}
