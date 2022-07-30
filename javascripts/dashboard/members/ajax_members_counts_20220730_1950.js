function ajax_members_counts()
{
	$.ajax({
		url : "/operation/get_members/",
		success:function(data){

			html = '<strong class="amount">' + data.joinedUser.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '</strong>'
			$("#joinedUser").append(html)

			html = '<strong class="amount">' + data.joinedUserYesterday.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '</strong>'
			$("#joinedUserYesterday").append(html)

			html = '<strong class="amount" >' + data.joinedUserToday.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '</strong>'
			$("#joinedUserToday").append(html)
			
			$(".trigger_joinedUser").hide()
		}
	})
}