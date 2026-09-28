// Created by iWeb 3.0.2 local-build-20101229

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_0:new IWShadow({blurRadius:10,offset:new IWPoint(4.2426,4.2426),color:'#000000',opacity:0.750000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Evenements_files/EvenementsMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');IMpreload('Evenements_files','shapeimage_2','0');IMpreload('Evenements_files','shapeimage_2','1');IMpreload('Evenements_files','shapeimage_2','2');IMpreload('Evenements_files','shapeimage_2','3');IMpreload('Evenements_files','shapeimage_2','4');IMpreload('Evenements_files','shapeimage_2','5');applyEffects()}
function onPageUnload()
{Widget.onunload();}
