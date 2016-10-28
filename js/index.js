'use strict';
(function() {
	$("#reg_btn").click(function() {
		var reg_str = /(id.*)&/;
		var href_content = $("#reg_content").val();
		href_content = href_content.match(reg_str);
		
		$("#reg_content").val("https://detail.tmall.com/item.htm?"+href_content);
	});

})();