$(document).ready(function() {
			$('#entconv').keydown(function(key){
				switch(parseInt(key.which,10)) {
					case 13:
						conVerte();
						return false;
						break;
					default:
						return true;
						break;
				};
			});
			$('.conv').click(conVerte);
			$('.apaga').click(apaga);
			$('#respo').keydown(function(key) {
				switch(parseInt(key.which,10)) {
					case 13:
						vai();
						return false;
						break;
					default:
						return true;
						break;
				};
			});
			$('#abre').click(levanta);
			$('#texto1').click(function() {
				$('#conversor').toggleClass('ativo');
				$(this).css('opacity','0');
				if($('#conversor').hasClass('ativo')) {
					window.setTimeout(function() {
						$('#texto1').html('Voltar para o Quiz');
						$('#texto1').css('opacity','1');
					},1400);
				} else {
					window.setTimeout(function() {
						$('#texto1').html('Conversor');
						$('#texto1').css('opacity','1');
					},1400);
				}
			});
			$(this).keydown(function(key) {
				switch(parseInt(key.which,10)) {
					
					case 27:
						$('#porteira').removeClass('alta');
						$('#abre').focus();
						break;
					default:
						return true;
						break;
				}
			});
			$('#doo').click(function() {
				$('#porteira').removeClass('alta');
				$('#abre').focus();
			});
		});
		function vC(seletor,classe) {
			return ($(seletor).hasClass(classe))
		}
		vsf=0
		tabom=0;	
		function levanta() {
			$form=$('input[name="kana"]');
			for (i=0;i<$form.length;i++){ 
				if ($form[i].checked) 
					break; 
			}
			alt=$form[i].value;
			$('#porteira').addClass('alta');
			kanaFx()
		}
		function aleaTorio() {
			nivel=$('#lv').val();
			// Simulação de matriz para os Hiragana e Katakana
			kanas = [];
			// Array para os Hiragana
			kanas[0]=[]
			//Classificação de níveis:
			kanas[0][0]='あ'
			kanas[0][1]='い'
			kanas[0][2]='う'
			kanas[0][3]='え'
			kanas[0][4]='お'
			kanas[0][5]='か'
			kanas[0][6]='き'
			kanas[0][7]='く'
			kanas[0][8]='け'
			kanas[0][9]='こ'
			//^^Nível 1^^
			kanas[0][10]='さ'
			kanas[0][11]='し'
			kanas[0][12]='す'
			kanas[0][13]='せ'
			kanas[0][14]='そ'
			kanas[0][15]='た'
			kanas[0][16]='ち'
			kanas[0][17]='つ'
			kanas[0][18]='て'
			kanas[0][19]='と'
			//^^Nível 2^^
			kanas[0][20]='な'
			kanas[0][21]='に'
			kanas[0][22]='ぬ'
			kanas[0][23]='ね'
			kanas[0][24]='の'
			kanas[0][25]='ま'
			kanas[0][26]='み'
			kanas[0][27]='む'
			kanas[0][28]='め'
			kanas[0][29]='も'
			//^^Nível 3^^
			kanas[0][30]='は'
			kanas[0][31]='ひ'
			kanas[0][32]='ふ'
			kanas[0][33]='へ'
			kanas[0][34]='ほ'
			kanas[0][35]='ら'
			kanas[0][36]='り'
			kanas[0][37]='る'
			kanas[0][38]='れ'
			kanas[0][39]='ろ'
			//^^Nível 4^^
			kanas[0][40]='や'
			kanas[0][41]='ゆ'
			kanas[0][42]='よ'
			kanas[0][43]='わ'
			kanas[0][44]='を'
			kanas[0][45]='ん'
			kanas[0][46]='が'
			kanas[0][47]='ぎ'
			kanas[0][48]='ぐ'
			kanas[0][49]='げ'
			kanas[0][50]='ご'
			kanas[0][51]='ざ'
			kanas[0][52]='じ'
			kanas[0][53]='ず'
			kanas[0][54]='ぜ'
			kanas[0][55]='ぞ'
			//^^Nível 5^^
			kanas[0][56]='だ'
			kanas[0][57]='ぢ'
			kanas[0][58]='づ'
			kanas[0][59]='で'
			kanas[0][60]='ど'
			kanas[0][61]='ば'
			kanas[0][62]='び'
			kanas[0][63]='ぶ'
			kanas[0][64]='べ'
			kanas[0][65]='ぼ'
			kanas[0][66]='ぱ'
			kanas[0][67]='ぴ'
			kanas[0][68]='ぷ'
			kanas[0][69]='ぺ'
			kanas[0][70]='ぽ'
			//^^Nível 6^^
			kanas[0][71]='きゃ'
			kanas[0][72]='きゅ'
			kanas[0][73]='きょ'
			kanas[0][74]='ぎゃ'
			kanas[0][75]='ぎゅ'
			kanas[0][76]='ぎょ'
			kanas[0][77]='しゃ'
			kanas[0][78]='しゅ'
			kanas[0][79]='しょ'
			kanas[0][80]='じゃ'
			kanas[0][81]='じゅ'
			kanas[0][82]='じょ'
			kanas[0][83]='ちゃ'
			kanas[0][84]='ちゅ'
			kanas[0][85]='ちょ'
			kanas[0][86]='にゃ'
			kanas[0][87]='にゅ'
			kanas[0][88]='にょ'
			//^^Nível 7^^
			kanas[0][89]='ひゃ'
			kanas[0][90]='ひゅ'
			kanas[0][91]='ひょ'
			kanas[0][92]='びゃ'
			kanas[0][93]='びゅ'
			kanas[0][94]='びょ'
			kanas[0][95]='ぴゃ'
			kanas[0][96]='ぴゅ'
			kanas[0][97]='ぴょ'
			kanas[0][98]='みゃ'
			kanas[0][99]='みゅ'
			kanas[0][100]='みょ'
			kanas[0][101]='りゃ'
			kanas[0][102]='りゅ'
			kanas[0][103]='りょ'
			//^^Nível 8^^
			kanas[0][104]='っか'
			kanas[0][105]='っき'
			kanas[0][106]='っく'
			kanas[0][107]='っけ'
			kanas[0][108]='っこ'
			kanas[0][109]='っさ'
			kanas[0][110]='っし'
			kanas[0][111]='っす'
			kanas[0][112]='っせ'
			kanas[0][113]='っそ'
			kanas[0][114]='った'
			kanas[0][115]='っち'
			kanas[0][116]='っつ'
			kanas[0][117]='って'
			kanas[0][118]='っと'
			kanas[0][119]='っぱ'
			kanas[0][120]='っぴ'
			kanas[0][121]='っぷ'
			kanas[0][122]='っぺ'
			kanas[0][123]='っぽ'
			//^^Nível 9^^
			kanas[0][124]='ああ'
			kanas[0][125]='いい'
			kanas[0][126]='うう'
			kanas[0][127]='ええ'
			kanas[0][128]='おお'
			kanas[0][129]='かあ'
			kanas[0][130]='きい'
			kanas[0][131]='くう'
			kanas[0][132]='けい'
			kanas[0][133]='こう'
			kanas[0][134]='さあ'
			kanas[0][135]='しい'
			kanas[0][136]='すう'
			kanas[0][137]='せい'
			kanas[0][138]='そう'
			kanas[0][139]='たあ'
			kanas[0][140]='ちい'
			kanas[0][141]='つう'
			kanas[0][142]='てい'
			kanas[0][143]='とう'
			kanas[0][144]='なあ'
			kanas[0][145]='にい'
			kanas[0][146]='ぬう'
			kanas[0][147]='ねい'
			kanas[0][148]='のう'
			kanas[0][149]='はあ'
			kanas[0][150]='ひい'
			kanas[0][151]='ふう'
			kanas[0][152]='へい'
			kanas[0][153]='ほう'
			kanas[0][154]='まあ'
			kanas[0][155]='みい'
			kanas[0][156]='むう'
			kanas[0][157]='めい'
			kanas[0][158]='もう'
			kanas[0][159]='やあ'
			kanas[0][160]='ゆう'
			kanas[0][161]='よう'
			kanas[0][162]='らあ'
			kanas[0][163]='りい'
			kanas[0][164]='るう'
			kanas[0][165]='れい'
			kanas[0][166]='ろう'
			kanas[0][167]='わあ'
			//^^Nível FINAL 10^^

			//Array para os Katakana
			kanas[1]=[]
			kanas[1][0]="ア"
			kanas[1][1]="イ"
			kanas[1][2]="ウ"
			kanas[1][3]="エ"
			kanas[1][4]="オ"
			kanas[1][5]="カ"
			kanas[1][6]="キ"
			kanas[1][7]="ク"
			kanas[1][8]="ケ"
			kanas[1][9]="コ"
			//^^Nível 1^^
			kanas[1][10]="サ"
			kanas[1][11]="シ"
			kanas[1][12]="ス"
			kanas[1][13]="セ"
			kanas[1][14]="ソ"
			kanas[1][15]="タ"
			kanas[1][16]="チ"
			kanas[1][17]="ツ"
			kanas[1][18]="テ"
			kanas[1][19]="ト"
			//^^Nível 2^^
			kanas[1][20]="ナ"
			kanas[1][21]="ニ"
			kanas[1][22]="ヌ"
			kanas[1][23]="ネ"
			kanas[1][24]="ノ"
			kanas[1][30]="ハ"
			kanas[1][31]="ヒ"
			kanas[1][32]="フ"
			kanas[1][33]="ヘ"
			kanas[1][34]="ホ"
			//^^Nível 3^^

			// Array para os Romaji
			romaji = new Array()

			//Classificação de níveis
			romaji[0] = "a";
			romaji[1] = "i";
			romaji[2] = "u";
			romaji[3] = "e";
			romaji[4] = "o";
			romaji[5] = "ka";
			romaji[6] = "ki";
			romaji[7] = "ku";
			romaji[8] = "ke";
			romaji[9] = "ko";
			//^^Nível 1^^
			romaji[10] = "sa";
			romaji[11] = "shi";
			romaji[12] = "su";
			romaji[13] = "se";
			romaji[14] = "so";
			romaji[15] = "ta";
			romaji[16] = "chi";
			romaji[17] = "tsu";
			romaji[18] = "te";
			romaji[19] = "to";
			//^^Nível 2^^
			romaji[20] = "na";
			romaji[21] = "ni";
			romaji[22] = "nu";
			romaji[23] = "ne";
			romaji[24] = "no";
			romaji[25] = "ma";
			romaji[26] = "mi";
			romaji[27] = "mu";
			romaji[28] = "me";
			romaji[29] = "mo";
			//^^Nível 3^^
			romaji[30] = "ha";
			romaji[31] = "hi";
			romaji[32] = "fu";
			romaji[33] = "he";
			romaji[34] = "ho";
			romaji[35] = "ra";
			romaji[36] = "ri";
			romaji[37] = "ru";
			romaji[38] = "re";
			romaji[39] = "ro";			
			//^^Nível 4^^
			romaji[40]='ya'
			romaji[41]='yu'
			romaji[42]='yo'
			romaji[43]='wa'
			romaji[44]='wo'
			romaji[45]='n'
			romaji[46]='ga'
			romaji[47]='gi'
			romaji[48]='gu'
			romaji[49]='ge'
			romaji[50]='go'
			romaji[51]='za'
			romaji[52]='ji'
			romaji[53]='zu'
			romaji[54]='ze'
			romaji[55]='zo'
			//^^Nível 5^^
			romaji[56]='da'
			romaji[57]='dji'
			romaji[58]='dzu'
			romaji[59]='de'
			romaji[60]='do'
			romaji[61]='ba'
			romaji[62]='bi'
			romaji[63]='bu'
			romaji[64]='be'
			romaji[65]='bo'
			romaji[66]='pa'
			romaji[67]='pi'
			romaji[68]='pu'
			romaji[69]='pe'
			romaji[70]='po'
			//^^Nível 6^^
			romaji[71]='kya'
			romaji[72]='kyu'
			romaji[73]='kyo'
			romaji[74]='gya'
			romaji[75]='gyu'
			romaji[76]='gyo'
			romaji[77]='sha'
			romaji[78]='shu'
			romaji[79]='sho'
			romaji[80]='ja'
			romaji[81]='ju'
			romaji[82]='jo'
			romaji[83]='cha'
			romaji[84]='chu'
			romaji[85]='cho'
			romaji[86]='nya'
			romaji[87]='nyu'
			romaji[88]='nyo'
			//^^Nível 7^^
			romaji[89]='hya'
			romaji[90]='hyu'
			romaji[91]='hyo'
			romaji[92]='bya'
			romaji[93]='byu'
			romaji[94]='byo'
			romaji[95]='pya'
			romaji[96]='pyu'
			romaji[97]='pyo'
			romaji[98]='mya'
			romaji[99]='myu'
			romaji[100]='myo'
			romaji[101]='rya'
			romaji[102]='ryu'
			romaji[103]='ryo'
			//^^Nível 8^^
			romaji[104]='kka'
			romaji[105]='kki'
			romaji[106]='kku'
			romaji[107]='kke'
			romaji[108]='kko'
			romaji[109]='ssa'
			romaji[110]='sshi'
			romaji[111]='ssu'
			romaji[112]='sse'
			romaji[113]='sso'
			romaji[114]='tta'
			romaji[115]='cchi'
			romaji[116]='ttsu'
			romaji[117]='tte'
			romaji[118]='tto'
			romaji[119]='ppa'
			romaji[120]='ppi'
			romaji[121]='ppu'
			romaji[122]='ppe'
			romaji[123]='ppo'
			//^^Nível 9^^
			romaji[124]='aa'
			romaji[125]='ii'
			romaji[126]='uu'
			romaji[127]='ee'
			romaji[128]='oo'
			romaji[129]='kaa'
			romaji[130]='kii'
			romaji[131]='kuu'
			romaji[132]='kei'
			romaji[133]='kou'
			romaji[134]='saa'
			romaji[135]='shii'
			romaji[136]='suu'
			romaji[137]='sei'
			romaji[138]='sou'
			romaji[139]='taa'
			romaji[140]='chii'
			romaji[141]='tsuu'
			romaji[142]='tei'
			romaji[143]='tou'
			romaji[144]='naa'
			romaji[145]='nii'
			romaji[146]='nuu'
			romaji[147]='nei'
			romaji[148]='nou'
			romaji[149]='haa'
			romaji[150]='hii'
			romaji[151]='fuu'
			romaji[152]='hei'
			romaji[153]='hou'
			romaji[154]='maa'
			romaji[155]='mii'
			romaji[156]='muu'
			romaji[157]='mei'
			romaji[158]='mou'
			romaji[159]='yaa'
			romaji[160]='yuu'
			romaji[161]='you'
			romaji[162]='raa'
			romaji[163]='rii'
			romaji[164]='ruu'
			romaji[165]='rei'
			romaji[166]='rou'
			romaji[167]='waa'
			//^^Nível FINAL 10^^

			// Fórmula para conseguir um número aleatório de acordo com o nível
			aleatorio = Math.floor(Math.random() * (nivel));
			$('#entra').html(kanas[alt][aleatorio]);
			tabom=0;
		}
		function vai() {
			resposta=romaji[aleatorio];	
			d=$('#respo').val();
			msg=$('#yaay');
			msgd=$('#dica');
			if (d==""){
				return false
			}else{
				if (d==resposta) {
					msg.html("Você acertou!");
					vsf=0;
					tabom=0;
					msg.css('opacity','1');
					$('#respo').val('');
					window.setTimeout(msgFx,4000);
					$('#respo').focus();
					kanaFx0();
				}
				else{
					di="";
					for (o=0;o<romaji.length;o++){
						if (d==romaji[o]) {
							di=kanas[alt][o];
						}	
					}
					dica=[]
					dica[0]="hiragana"
					dica[1]="katakana"
					if (di=="") {
						vsf+=1;
						tabom=0;
						if (vsf>4) {
							msgdica="Não avacalha!";
						}else{
						msgdica="Tente lembrar de algo!";
						}
					}else{
						msgdica="O "+dica[alt]+" para '"+d+"' é: "+di;
						vsf=0;
						tabom+=1;
						console.log("foi "+tabom);
						if (tabom>10) {
							msgdica='Tá bom, a resposta pra esse '+dica[alt]+' é "'+romaji[aleatorio]+'".';
							console.log("foi já");
						}
					}	
					msg.html('Você errou.');
					msgd.html(msgdica);
					if(vsf<=4)msg.css('opacity','1');
					msgd.css('opacity','1');
					window.setTimeout(msgFx,4000);
					$('#respo').select();
				}
			}
		}
		function kanaFx0() {
			$('#entra').css('opacity','0');
			window.setTimeout(kanaFx,1000);
		}
		function msgFx() {
			msg.delay(6000).css('opacity','0');
			msgd.delay(6000).css('opacity','0');
		}
		function kanaFx() {
			aleaTorio();						
			$('#entra').css('opacity','1');
		}
		function conVerte(){
			$rom = $('#entconv');
			$nya = $('.saida');
			$pya = $('#saida div:last-child');
			nyan="";
			for (var g=0; g<romaji.length; g++) {
				if ($rom.val()==romaji[g]) {
					nyan = $nya.html()+kanas[alt][g]
					if ($pya.html()){
						kyan = $pya.html()+"-"+$rom.val();
					} else{
						kyan = $rom.val();
					}
				}
			}
			if (nyan!="") {
				$nya.html(nyan);
				$rom.select();
				$('.saida').css('padding','0px');
				$pya.html(kyan);
			}
			else {
				alert('Digite um romaji válido.')
				$rom.select()
			}
		}
		function apaga() {
			$nya.html('');
			$('.saida').css('padding','');
			$rom.focus();
			$rom.val("");
			$pya.html('');
		}