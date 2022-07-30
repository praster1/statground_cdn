function printTableCommunity(inputUserid, inputUsername)
{		
	var url = "/community/get_community_contents/"
	
	if ((inputUserid != null) || (inputUsername != null))
	{
		url = url + inputUserid + "/" + inputUsername + "/"
	}

	var table = $('#table_community').DataTable( {
		"destroy": true,
		"responsive": true,
		"processing": true,
		"serverSide": true,
		"ordering": false,
		"responsive": true,
		"autoWidth": true,
		"paging": true,
		"lengthMenu": [ 10, 25, 50, 75, 100 ],
		"pageLength": 10,
		"ajax": {
			"url": url,
			"type": "GET",
			"dataSrc": function(res) {
				var data = res.data;
				return data;
			}
		},
		"columns" : [
			{"data": "Timeline"}
		],
		"oLanguage": { "sInfo" : "_TOTAL_개의 타임라인 중, _START_ ~ _END_  번째 타임라인" },
		"language": { "lengthMenu": "페이지당 _MENU_ 개씩 보기",
						   "processing": "<img src='https://cdn.jsdelivr.net/gh/praster1/statground_cdn/images/tati/9.png' width='35%'/>" }
	} );
	
	table.on( 'responsive-resize', function ( e, datatable, columns ) {
		var count = columns.reduce( function (a,b) {
			return b === false ? a+1 : a;
		}, 0 );
	} );		
};