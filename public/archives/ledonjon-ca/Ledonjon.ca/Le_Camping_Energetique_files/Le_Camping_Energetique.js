// Created by iWeb 3.0.2 local-build-20101229

function createMediaStream_id4()
{return IWCreatePhotocast("http://www.ledonjon.ca/Ledonjon.ca/Le_Camping_Energetique_files/rss.xml",true);}
function initializeMediaStream_id4()
{createMediaStream_id4().load('http://www.ledonjon.ca/Ledonjon.ca',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id4',{pageIndex:0}));});}
function layoutMediaGrid_id4(range)
{createMediaStream_id4().load('http://www.ledonjon.ca/Ledonjon.ca',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id4',new IWPhotoGridLayout(3,new IWSize(182,182),new IWSize(182,37),new IWSize(218,234),27,27,0,new IWSize(20,22)),new IWPhotoFrame([IWCreateImage('Le_Camping_Energetique_files/techblack-frame_01.png'),IWCreateImage('Le_Camping_Energetique_files/techblack-frame_02.png'),IWCreateImage('Le_Camping_Energetique_files/techblack-frame_03.png'),IWCreateImage('Le_Camping_Energetique_files/techblack-frame_06.png'),IWCreateImage('Le_Camping_Energetique_files/techblack-frame_09.png'),IWCreateImage('Le_Camping_Energetique_files/techblack-frame_08.png'),IWCreateImage('Le_Camping_Energetique_files/techblack-frame_07.png'),IWCreateImage('Le_Camping_Energetique_files/techblack-frame_04.png')],null,2,0.613158,0.000000,0.000000,0.000000,0.000000,16.000000,16.000000,16.000000,18.000000,543.000000,380.000000,543.000000,380.000000,null,null,null,0.100000),imageStream,range,null,null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id4(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id4(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id4(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({reflection_1:new IWReflection({opacity:0.50,offset:1.00}),reflection_0:new IWReflection({opacity:0.55,offset:1.00}),reflection_6:new IWReflection({opacity:0.50,offset:1.00}),reflection_7:new IWReflection({opacity:0.50,offset:1.00}),shadow_1:new IWShadow({blurRadius:5,offset:new IWPoint(4.2426,4.2426),color:'#000000',opacity:1.000000}),reflection_8:new IWReflection({opacity:0.50,offset:1.00}),reflection_3:new IWReflection({opacity:0.50,offset:1.00}),reflection_4:new IWReflection({opacity:0.50,offset:1.00}),reflection_9:new IWReflection({opacity:0.84,offset:1.00}),shadow_0:new IWShadow({blurRadius:5,offset:new IWPoint(4.2426,4.2426),color:'#000000',opacity:1.000000}),reflection_2:new IWReflection({opacity:0.50,offset:1.00}),reflection_5:new IWReflection({opacity:0.50,offset:1.00})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Le_Camping_Energetique_files/Le_Camping_EnergetiqueMoz.css')
adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');NotificationCenter.addObserver(null,relayoutMediaGrid_id4,'RangeChanged','id4')
adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');adjustLineHeightIfTooBig('id6');adjustFontSizeIfTooBig('id6');adjustLineHeightIfTooBig('id7');adjustFontSizeIfTooBig('id7');adjustLineHeightIfTooBig('id8');adjustFontSizeIfTooBig('id8');adjustLineHeightIfTooBig('id9');adjustFontSizeIfTooBig('id9');adjustLineHeightIfTooBig('id10');adjustFontSizeIfTooBig('id10');adjustLineHeightIfTooBig('id11');adjustFontSizeIfTooBig('id11');adjustLineHeightIfTooBig('id12');adjustFontSizeIfTooBig('id12');adjustLineHeightIfTooBig('id13');adjustFontSizeIfTooBig('id13');adjustLineHeightIfTooBig('id14');adjustFontSizeIfTooBig('id14');adjustLineHeightIfTooBig('id15');adjustFontSizeIfTooBig('id15');adjustLineHeightIfTooBig('id16');adjustFontSizeIfTooBig('id16');adjustLineHeightIfTooBig('id17');adjustFontSizeIfTooBig('id17');adjustLineHeightIfTooBig('id18');adjustFontSizeIfTooBig('id18');adjustLineHeightIfTooBig('id19');adjustFontSizeIfTooBig('id19');adjustLineHeightIfTooBig('id20');adjustFontSizeIfTooBig('id20');adjustLineHeightIfTooBig('id22');adjustFontSizeIfTooBig('id22');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id1');fixupIECSS3Opacity('id2');fixupIECSS3Opacity('id21');applyEffects()
initializeMediaStream_id4()}
function onPageUnload()
{Widget.onunload();}
