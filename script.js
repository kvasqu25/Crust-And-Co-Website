'use strict';const _0x437fd1=_0x4993;(function(_0x55294d,_0x407270){const _0xec1dc9=_0x4993,_0x40fd0b=_0x55294d();while(!![]){try{const _0x470e08=-parseInt(_0xec1dc9(0x120))/0x1+-parseInt(_0xec1dc9(0xfa))/0x2*(parseInt(_0xec1dc9(0x117))/0x3)+-parseInt(_0xec1dc9(0xef))/0x4*(-parseInt(_0xec1dc9(0xfc))/0x5)+parseInt(_0xec1dc9(0x105))/0x6+-parseInt(_0xec1dc9(0x129))/0x7*(-parseInt(_0xec1dc9(0xfb))/0x8)+parseInt(_0xec1dc9(0xf5))/0x9+parseInt(_0xec1dc9(0x125))/0xa*(parseInt(_0xec1dc9(0x115))/0xb);if(_0x470e08===_0x407270)break;else _0x40fd0b['push'](_0x40fd0b['shift']());}catch(_0x11206f){_0x40fd0b['push'](_0x40fd0b['shift']());}}}(_0xb80e,0x98a04));var orderDone=document[_0x437fd1(0x118)](_0x437fd1(0x11b));function _0x4993(_0x23bb65,_0xec4ca9){const _0xb80eae=_0xb80e();return _0x4993=function(_0x499391,_0x800afd){_0x499391=_0x499391-0xe4;let _0x5e25b3=_0xb80eae[_0x499391];return _0x5e25b3;},_0x4993(_0x23bb65,_0xec4ca9);}let filtroInput=document[_0x437fd1(0x118)](_0x437fd1(0x124)),btnBurgers=document['getElementById'](_0x437fd1(0x10a)),btnEntrees=document[_0x437fd1(0x118)](_0x437fd1(0x10c)),btnPizza=document['getElementById'](_0x437fd1(0x12d)),btnTodo=document[_0x437fd1(0x118)](_0x437fd1(0xf2)),list=document[_0x437fd1(0x118)](_0x437fd1(0x116)),elementos=list['getElementsByTagName']('li');btnBurgers[_0x437fd1(0x12a)](_0x437fd1(0x121),function(){const _0x259634=_0x437fd1;filterByCategory(_0x259634(0x127));}),btnEntrees['addEventListener']('click',function(){const _0x485db1=_0x437fd1;filterByCategory(_0x485db1(0x11c));}),btnPizza['addEventListener'](_0x437fd1(0x121),function(){const _0x380584=_0x437fd1;filterByCategory(_0x380584(0xed));}),btnTodo[_0x437fd1(0x12a)](_0x437fd1(0x121),function(){showAll();});function filterByCategory(_0x4fd069){const _0x493b97=_0x437fd1;for(let _0x212782=0x0;_0x212782<elementos[_0x493b97(0xe7)];_0x212782++){const _0x4b5b98=elementos[_0x212782][_0x493b97(0x111)](_0x493b97(0xf1));_0x4b5b98===_0x4fd069?elementos[_0x212782][_0x493b97(0xea)]['display']=_0x493b97(0xe5):elementos[_0x212782][_0x493b97(0xea)]['display']=_0x493b97(0xf6);}}function showAll(){const _0x185ab7=_0x437fd1;for(let _0x915f92=0x0;_0x915f92<elementos['length'];_0x915f92++){elementos[_0x915f92][_0x185ab7(0xea)][_0x185ab7(0xf0)]='block';}}const themeBtn=document[_0x437fd1(0x118)](_0x437fd1(0xe8));themeBtn[_0x437fd1(0x12a)](_0x437fd1(0x121),()=>{const _0x43c462=_0x437fd1;document['body'][_0x43c462(0x122)][_0x43c462(0x100)](_0x43c462(0xec));});function checkGame(){const _0x1530f4=_0x437fd1;var _0x3888a6=parseInt(document[_0x1530f4(0x118)](_0x1530f4(0x12c))[_0x1530f4(0xf8)]),_0x415d24=Math['floor'](Math[_0x1530f4(0x103)]()*0xa)+0x1,_0xd6adba=document[_0x1530f4(0x118)](_0x1530f4(0xe9));_0x3888a6===_0x415d24?_0xd6adba[_0x1530f4(0x104)]=_0x1530f4(0xf7)+_0x3888a6+_0x1530f4(0x11f)+_0x415d24+_0x1530f4(0x114):_0xd6adba['textContent']=_0x1530f4(0xf9)+_0x3888a6+'\x20does\x20not\x20match\x20the\x20correct\x20number:\x20'+_0x415d24+_0x1530f4(0xe6);}document[_0x437fd1(0x118)](_0x437fd1(0x101))[_0x437fd1(0x12a)](_0x437fd1(0x126),function(_0x30fb0b){const _0x5cee30=_0x437fd1;_0x30fb0b[_0x5cee30(0x119)](),validateForm();});function validateForm(_0x1e32a4){const _0x26daf3=_0x437fd1;let _0x1ca2ec=document[_0x26daf3(0x118)](_0x26daf3(0xe4))['value'][_0x26daf3(0xfe)](),_0x51a7a4=document[_0x26daf3(0x118)](_0x26daf3(0xee))['value'][_0x26daf3(0xfe)](),_0x515e16=document[_0x26daf3(0x118)]('phone')[_0x26daf3(0xf8)]['trim'](),_0x4e8e42=document['getElementById']('email')[_0x26daf3(0xf8)][_0x26daf3(0xfe)](),_0x2b583d=document[_0x26daf3(0x118)](_0x26daf3(0x109))['value'][_0x26daf3(0xfe)](),_0x3c7cf1=document['querySelector'](_0x26daf3(0xff))['value'],_0x6952c3=[],_0x1a5b9e=/^[a-zA-Z]+$/,_0x203d6b=/^\d{10}$/,_0x504594=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;!_0x1ca2ec[_0x26daf3(0xeb)](_0x1a5b9e)&&_0x6952c3[_0x26daf3(0x123)]('Please\x20enter\x20a\x20valid\x20first\x20name.');!_0x51a7a4[_0x26daf3(0xeb)](_0x1a5b9e)&&_0x6952c3[_0x26daf3(0x123)](_0x26daf3(0x10e));if(_0x3c7cf1===_0x26daf3(0xfd)&&_0x515e16==='')_0x6952c3[_0x26daf3(0x123)](_0x26daf3(0x108));else _0x3c7cf1===_0x26daf3(0x12b)&&_0x4e8e42===''&&_0x6952c3['push'](_0x26daf3(0x128));_0x3c7cf1==='phone'&&_0x515e16!==''&&(!_0x515e16['match'](_0x203d6b)&&_0x6952c3['push'](_0x26daf3(0x113))),_0x3c7cf1===_0x26daf3(0x12b)&&_0x4e8e42!==''&&(!_0x4e8e42[_0x26daf3(0xeb)](_0x504594)&&_0x6952c3[_0x26daf3(0x123)](_0x26daf3(0x106))),_0x2b583d===''&&_0x6952c3[_0x26daf3(0x123)](_0x26daf3(0x10b)),_0x6952c3[_0x26daf3(0xe7)]>0x0?displayErrors(_0x6952c3):submitForm(_0x1ca2ec,_0x51a7a4,_0x515e16,_0x4e8e42,_0x2b583d);}function _0xb80e(){const _0x411ba0=['16CcpWRd','27385yubSGr','phone','trim','input[name=\x22contactPreference\x22]:checked','toggle','order','appendChild','random','textContent','484926RhAhVP','Please\x20enter\x20a\x20valid\x20email\x20address.','hidden','Please\x20provide\x20a\x20valid\x20phone\x20number.','comments','btnBurgers','Please\x20enter\x20your\x20comments.','btnEntrees','</p>','Please\x20enter\x20a\x20valid\x20last\x20name.','<p>Phone:\x20','<p>Comments:\x20','getAttribute','<p>Email:\x20','Please\x20enter\x20a\x20valid\x20phone\x20number.','.\x20Use\x20the\x20code:\x20\x22CRUST2024\x22\x20on\x20your\x20next\x20visit!','11Twllel','list','3PokFOp','getElementById','preventDefault','remove','orderDone','entrees','reset','innerHTML','\x20matches\x20the\x20correct\x20number:\x20','355347BBBOFc','click','classList','push','filtroInput','5626670dAFShH','submit','burgers','Please\x20provide\x20a\x20valid\x20email\x20address.','3638285jgooco','addEventListener','email','guessInput','btnPizza','firstName','block','.\x20Please\x20try\x20again.','length','theme-btn','guessResult','style','match','dark-mode','pizza','lastName','76XYnDyp','display','data-categoria','btnTodo','<p>First\x20Name:\x20','message','2335572weKnId','none','Congratulations!\x20Your\x20guess\x20','value','Sorry,\x20your\x20guess\x20','2132132egQLsl'];_0xb80e=function(){return _0x411ba0;};return _0xb80e();}function displayErrors(_0x371a89){const _0x322877=_0x437fd1;var _0x203296=document[_0x322877(0x118)](_0x322877(0xf4));_0x203296['innerHTML']='',_0x371a89['forEach'](function(_0x2fd3ab){const _0xcbdb35=_0x322877;var _0x16ce79=document['createElement']('p');_0x16ce79[_0xcbdb35(0x104)]=_0x2fd3ab,_0x203296[_0xcbdb35(0x102)](_0x16ce79);}),_0x203296[_0x322877(0x122)][_0x322877(0x11a)](_0x322877(0x107));}function submitForm(_0xdc7de4,_0x3d4455,_0x4c271a,_0x48d391,_0x163036){const _0x5dead1=_0x437fd1;var _0x5d7981={'firstName':_0xdc7de4,'lastName':_0x3d4455,'phone':_0x4c271a,'email':_0x48d391,'comments':_0x163036},_0x4b3a99=document['getElementById'](_0x5dead1(0xf4));_0x4b3a99[_0x5dead1(0x104)]='Thank\x20you\x20for\x20your\x20submission!\x20Here\x20are\x20the\x20details:',_0x4b3a99[_0x5dead1(0x11e)]+=_0x5dead1(0xf3)+_0x5d7981[_0x5dead1(0xe4)]+_0x5dead1(0x10d),_0x4b3a99[_0x5dead1(0x11e)]+='<p>Last\x20Name:\x20'+_0x5d7981[_0x5dead1(0xee)]+_0x5dead1(0x10d),_0x4b3a99[_0x5dead1(0x11e)]+=_0x5dead1(0x10f)+_0x5d7981['phone']+_0x5dead1(0x10d),_0x4b3a99['innerHTML']+=_0x5dead1(0x112)+_0x5d7981[_0x5dead1(0x12b)]+'</p>',_0x4b3a99[_0x5dead1(0x11e)]+=_0x5dead1(0x110)+_0x5d7981[_0x5dead1(0x109)]+_0x5dead1(0x10d),_0x4b3a99[_0x5dead1(0x122)][_0x5dead1(0x11a)]('hidden'),document['getElementById']('order')[_0x5dead1(0x11d)]();}