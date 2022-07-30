function printPatentList(categoryUUID)
{		
	var url = "/patent/get_board_patent_searchResult/"
	var searchText = $("#inputSearchText").val()
	
	if (searchText == null || searchText == "")			{	searchText = "null";	}
	if (categoryUUID == null)									{	categoryUUID = "null";	}
	
	url = url + searchText + "/" + categoryUUID + "/"

	var table = $('#board_patent_searchResult').DataTable( {
		"destroy": true,
		"responsive": true,
		"processing": true,
		"serverSide": true,
		"ordering": false,
		"responsive": true,
		"autoWidth": true,
		"paging": true,
		"lengthMenu": [ 5, 10, 15, 20, 25 ],
		"pageLength": 5,
		"searching": false,
		"ajax": {
			"url": url,
			"type": "GET",
			"dataSrc": function(res) {
				var data = res.data;
				return data;
			}
		},
		"columns" : [
			{"data": "Patent"}
		],
		"oLanguage": { "sInfo" : "_TOTAL_개의 특허 중, _START_ ~ _END_  번째 특허" },
		"language": { "lengthMenu": "페이지당 _MENU_ 개씩 보기" }
	} );
	
	table.on( 'responsive-resize', function ( e, datatable, columns ) {
		var count = columns.reduce( function (a,b) {
			return b === false ? a+1 : a;
		}, 0 );
	} );		
};