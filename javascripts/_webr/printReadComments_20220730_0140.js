function printReadComments(documentID)
{		
	var url = "/webr/get_webr_read_article_comments/"+ documentID + "/"

	var table = $('#board_comment_table').DataTable( {
		"destroy": true,
		"responsive": true,
		"processing": true,
		"serverSide": true,
		"ordering": false,
		"autoWidth": true,
		"paging": false,
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
			{"data": "comments"}
		],
		"oLanguage": { "sInfo" : "" },
		"language": { "lengthMenu": "",
						   "processing": "<img src='https://cdn.jsdelivr.net/gh/praster1/statground_cdn/images/tati/9.png' width='35%'/>"},
	   "fnDrawCallback": function ( oSettings ) {
			$(oSettings.nTHead).hide();
		}
	} );
	
	table.on( 'responsive-resize', function ( e, datatable, columns ) {
		var count = columns.reduce( function (a,b) {
			return b === false ? a+1 : a;
		}, 0 );
	} );		
};