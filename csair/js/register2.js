/**
 * 
 */

$(function(){
	reader.ready=function(){
		reader.voicePrompt.play("/iac/csair/mp3/ymjz");
	};
	$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
	timedCount();
	
	$.ajax({
		url:'preRegister',
		type:'POST',
		sync: true,
		success:function(){
			mzcountreload();
			$.unblockUI();
			reader.stopAll();
		}
	});
	
	
	
	$(".bluebtn").bind("click",function(){
		scCard();
		var username = $("#username").val();
		var username1 = $("#username1").val();
		var ID_type = $("#ID_type").val();
		var countryCode = $("#countryCode").val();
		var mobile = $("#mobile").val();
		var email = $("#email").val();
		var ID_number = $("#ID_number").val();
		
		if (username == "" || username == null) {
			alert("请输入中文姓")
			return;
		}
		if (username1 == "" || username1 == null) {
			alert("请输入中文名")
			return;
		}
		if (countryCode == "国家代码") {
			alert("请选择地区")
			return;
		}
		if (mobile == "" || mobile == null) {
			alert("请输入手机号")
			return;
		}
		if (email == "" || email == null) {
			alert("请输入邮箱号")
			return;
		}
		
		if (ID_number == "" || ID_number == null) {
			alert("请输入证件号码")
			return;
		}
		if (!$("#checked").get(0).checked) {
		    alert("请阅读明珠会员条款")
		    return;
		}
		mzcountreload();
		$.ajax({
			url:'register',
			type:'POST',
			sync: true,
			dataType:'json',
			data:{
				"username":username,
				"username1":username1,
				"countryCode":countryCode,
				"mobile":mobile,
				"ID_type":ID_type,
				"ID_number":ID_number,
				"email":email
			},
			success:function(data){
				if(data.state=="SUCCESS"){
					window.location.href="registerYzm";
				}else{
					alert(data.message);
			//		window.location.href="register";
				}
			},
			error :function(){
				
			}
		});
	
	})
		
})

	function scCard() {
		var scCard = document.getElementById("ID_number").value;
		if (scCard.length != 0) {
			if (!checkCard(scCard)) {
				alert("身份证号码格式错误");
				return false;
			} else {
				//$("#errorTips").html("");
			}
		}else {
			alert("请填写身份证号!");
			return false;
		}
		return true;
	}

var vcity = {
		11 : "北京",
		12 : "天津",
		13 : "河北",
		14 : "山西",
		15 : "内蒙古",
		21 : "辽宁",
		22 : "吉林",
		23 : "黑龙江",
		31 : "上海",
		32 : "江苏",
		33 : "浙江",
		34 : "安徽",
		35 : "福建",
		36 : "江西",
		37 : "山东",
		41 : "河南",
		42 : "湖北",
		43 : "湖南",
		44 : "广东",
		45 : "广西",
		46 : "海南",
		50 : "重庆",
		51 : "四川",
		52 : "贵州",
		53 : "云南",
		54 : "西藏",
		61 : "陕西",
		62 : "甘肃",
		63 : "青海",
		64 : "宁夏",
		65 : "新疆",
		71 : "台湾",
		81 : "香港",
		82 : "澳门",
		91 : "国外"
	};
	checkCard = function(obj) {
		//var card = document.getElementById('card_no').value; 
		//是否为空 
		// if(card === '') 
		// { 
		//  return false; 
		//} 
		//校验长度，类型 
		if (isCardNo(obj) === false) {
			return false;
		}
		//检查省份 
		if (checkProvince(obj) === false) {
			return false;
		}
		//校验生日 
		if (checkBirthday(obj) === false) {
			return false;
		}
		//检验位的检测 
		if (checkParity(obj) === false) {
			return false;
		}
		return true;
	};
	//检查号码是否符合规范，包括长度，类型 
	isCardNo = function(obj) {
		//身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X 
		var reg = /(^\d{17}(\d|X)$)/;
		if (reg.test(obj) === false) {
			return false;
		}
		return true;
	};
	//取身份证前两位,校验省份 
	checkProvince = function(obj) {
		var province = obj.substr(0, 2);
		if (vcity[province] == undefined) {
			return false;
		}
		return true;
	};
	//检查生日是否正确 
	checkBirthday = function(obj) {
		var len = obj.length;
		//身份证18位时，次序为省（3位）市（3位）年（4位）月（2位）日（2位）校验位（4位），校验位末尾可能为X 加2位残疾人信息 
		if (len == '18') {
			var re_eighteen = /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/;
			var arr_data = obj.match(re_eighteen);
			var year = arr_data[2];
			var month = arr_data[3];
			var day = arr_data[4];
			var birthday = new Date(year + '/' + month + '/' + day);
			return verifyBirthday(year, month, day, birthday);
		}
		return false;
	};
	//校验日期 
	verifyBirthday = function(year, month, day, birthday) {
		var now = new Date();
		var now_year = now.getFullYear();
		//年月日是否合理 
		if (birthday.getFullYear() == year
				&& (birthday.getMonth() + 1) == month
				&& birthday.getDate() == day) {
			//判断年份的范围（3岁到100岁之间) 
			var time = now_year - year;
			if (time >= 0 && time <= 130) {
				return true;
			}
			return false;
		}
		return false;
	};
	//校验位的检测 
	checkParity = function(obj) {
		//15位转18位 
//		obj = changeFivteenToEighteen(obj);
		var len = obj.length;
		if (len == '18') {
			var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5,
					8, 4, 2);
			var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4',
					'3', '2');
			var cardTemp = 0, i, valnum;
			for (i = 0; i < 17; i++) {
				cardTemp += obj.substr(i, 1) * arrInt[i];
			}
			valnum = arrCh[cardTemp % 11];
			if (valnum == obj.substr(17, 1)) {
				return true;
			}
			return false;
		}
		return false;
	};
	//15位转18位身份证号 
	changeFivteenToEighteen = function(obj) {
		if (obj.length == '15') {
			var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5,
					8, 4, 2);
			var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4',
					'3', '2');
			var cardTemp = 0, i;
			obj = obj.substr(0, 6) + '19' + obj.substr(6, obj.length - 6);
			for (i = 0; i < 17; i++) {
				cardTemp += obj.substr(i, 1) * arrInt[i];
			}
			obj += arrCh[cardTemp % 11];
			return obj;
		}
		return obj;
	};