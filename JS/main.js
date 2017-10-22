	$(function(){
			//搜索切换
			(function(){
				var aLi=$("#menu li");
				var oText=$('#search').find('.form .text');
				var arrText=[
		'例如：广州天河探蟹',
		'例如：广州天河高德汇2楼202',
		'例如：广州天河万达广场附近',
		'例如：广州天河周记中秋优惠卷',
		'例如：广州天河美食评论',
		'例如：广州天河美景视频'
				];
				var iNow=0;
				oText.val(arrText[iNow]);
				aLi.each(function(index) {
					$(this).click(function(){
						/*console.log(index);*/
						aLi.attr('class','gradient');
						$(this).attr('class','active');
						iNow=index;
						oText.val(arrText[iNow]);
					});
					
				});
				//获得光标  判断value值
		oText.focus(function(){
														/*	console.log(arrText[iNow]);*/
			if($(this).val()==arrText[iNow]){
		$(this).val('');
			}
		});
		//失去光标  返回默认value
		oText.blur(function() {
		if($(this).val()==''){
			oText.val(arrText[iNow]);
		}
		});
			})();
			//文字滚动
			(function(){
				var oDiv=$('.update');
				/*var oUl=$('.update ul');*/
				var oUl=oDiv.find('ul');
				var iH=oUl.find('li').height();
				var iNow=0;
				var arrData=[
				{'name':'贝贝','time':4,'title':'广州天河区欢迎您','url':'http;//baidu.com'},
					{'name':'晶晶','time':5,'title':'广州白区云欢迎您','url':'http;//baidu.com'},
					{'name':'欢欢','time':6,'title':'广州黄埔区欢迎您','url':'http;//baidu.com'},
					{'name':'迎迎','time':7,'title':'广州越秀区欢迎您','url':'http;//baidu.com'},
					{'name':'妮妮','time':8,'title':'广州南沙区欢迎您','url':'http;//baidu.com'}
				];
				var str='';
				var prevBtn=$('#prev');
				var nextBtn=$('#next');
					var iNow=0;
					var timer=null;
				for (var i = 0; i < arrData.length; i++) {
					str +='<li><a href="' +arrData[i].url+'"> <strong>'+arrData[i].name+'</strong> <span>'+arrData[i].time+'分钟前</span> 发表了新文章：'+arrData[i].title+'…</a></li>';
				}
			oUl.html(str);
			iH=oUl.find('li').height();
			prevBtn.click(function(){
		doMove(-1);
			});
			nextBtn.click(function(){
		doMove(-1);
			});
			oDiv.hover(function(){
				clearInterval(timer);
			},autoPlay);
			function autoPlay(){
		timer=setInterval(function(){
		doMove(1);
		},2000);
			}
			autoPlay();
		function doMove(num){
		iNow +=num;
		if(Math.abs(iNow)>arrData.length-1){
			iNow=0;
		}
		if(iNow>0){
			iNow=-(arrData.length-1);
		}
		oUl.stop().animate({'top':iH*iNow},2000,'easeOutStrong');
		}
			})();
			//选项卡切换
			(function(){
				fnTab( $('.tabNav1'), $('.tabCon1'));
				fnTab( $('.tabNav2'), $('.tabCon2'));
				fnTab( $('.tabNav3'), $('.tabCon3'));
				fnTab( $('.tabNav4'), $('.tabCon4'));
				function fnTab(oNav,aCon){
					var aElem = oNav.children();
			aCon.hide().eq(0).show();
					aElem.each(function(index){
						$(this).click(function(){
						aElem.removeClass('active').addClass('gradient');
					$(this).removeClass('gradient').addClass('active');
					aElem.find('a').attr('class', 'triangle_down_gray');
					$(this).find('a').attr('class', 'triangle_down_red');
					
					aCon.hide().eq( index ).show();
						});
						
					});
				}
			})();
		//焦点图
		(function(){
			var oDiv=$('#fade');
			var aUlLi=oDiv.find('ul li');
			var aOlLi=oDiv.find('ol li');
			var oP=oDiv.find('p');
			var arr=['爸爸去哪儿啦！','人影摄像','娇柔妩媚、性感迷人！'];
			var iNow=0;
			var timer=null;
			fnFade();
			aOlLi.click(function(){
		iNow=$(this).index();
		fnFade();
			});
			oDiv.hover(function(){clearInterval(timer);},autoPlay);
			function autoPlay(){
				timer=setInterval(function(){
		iNow++;
		iNow%=arr.length;
		fnFade();
				},2000);
			}
			autoPlay();
			function fnFade(){
				aUlLi.each(function(i){
					if (i!=iNow) {
		aUlLi.eq(i).fadeOut().css('zlndex',1);
		aOlLi.eq(i).removeClass('active');
					}else{
						aUlLi.eq(i).fadeIn().css('zlndex',2);
						aOlLi.eq(i).addClass('active');
						oP.text(arr[iNow]);
					}
				});
			}
		})();
		//日历说明
		(function(){
			var aSpan=$('.calendar h3 span');
			var aImg=$('.calendar .img');
			var oPrompt=$('.today_info');
			var oImg=oPrompt.find('img');
			var oStrong=oPrompt.find('strong');
			var oP=oPrompt.find('p');
			aImg.hover(function(){
				var iTop=$(this).parent().position().top-30;
				var iLeft=$(this).parent().position().left+55;
				var index=$(this).parent().index()%aSpan.size();
				/*console.log($(this).attr('info'));*/
		oPrompt.show().css({'left':iLeft,'top':iTop});
		oP.text($(this).attr('info'));
		oImg.attr('src',$(this).attr('src'));
		oStrong.text(aSpan.eq(index).text());
			},function(){
		oPrompt.hide();
			})
		})();
		//BBS高亮显示
		(function(){
			$('.bbs ol li').mouseover(function(){
				$('.bbs ol li').removeClass('active').eq($(this).index()).addClass('active');
			})
		})();
		//红人烧客 鼠标提示效果
		(function(){
			var arr = [
			'',
			'用户：靓女<br />人气：116',
			'用户：性感宝贝<br />区域：朝阳CBD<br />人气：124987',
			'用户：靓女<br />人气：338',
			'用户：靓女<br />人气：937',
			'用户：靓女<br />人气：897',
			'用户：靓女<br />人气：677',
			'用户：魔术<br />人气：778',
			'用户：靓女<br />人气：787',
			'用户：靓女<br />人气：839',
			'用户：刷哥<br />人气：677'
		];
		$('.hot_area li').mouseover(function(){

			if($(this).index()==0) return;
		$('.hot_area li p').remove();

		$(this).width();

		$(this).append('<p style="width:'+($(this).width()-12)+'px;height:'+($(this).height()-12)+'px;">'+arr[$(this).index()]+'</p>');
		})
		})();
		});