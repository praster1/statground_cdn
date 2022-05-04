function printTableDataList(categoryUUID)
{		
	var url = "/get_data_list/"
	
	if (categoryUUID != null)
	{
		url = url + categoryUUID + "/"
	}

	var table = $('#board_data_list').DataTable( {
		"destroy": true,
		"responsive": true,
		"processing": true,
		"serverSide": true,
		"ordering": false,
		"responsive": true,
		"autoWidth": true,
		"paging": true,
		"lengthMenu": [ 5, 10, 15, 20, 25 ],
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
			{"data": "Dataset"}
		],
		"oLanguage": { "sInfo" : "_TOTAL_개의 데이터 중, _START_ ~ _END_  번째 데이터" },
		"language": { "lengthMenu": "페이지당 _MENU_ 개씩 보기" }
	} );
	
	table.on( 'responsive-resize', function ( e, datatable, columns ) {
		var count = columns.reduce( function (a,b) {
			return b === false ? a+1 : a;
		}, 0 );
	} );
};