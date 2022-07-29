function printYoutubeVideoList(inputUUID)
{		
	var url = "/webr/get_webr_youtube_video_list/" + inputUUID + "/"

	var table = $('#table_youtubeList').DataTable( {
		"destroy": true,
		"responsive": true,
		"processing": true,
		"serverSide": true,
		"ordering": false,
		"autoWidth": true,
		"lengthChange": true,
		"lengthMenu": [ 3, 5, 10],
		"pageLength": 3,
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
			{"data": "Image"},
			{"data": "Content"}
		],
		"oLanguage": { "sInfo" : "_TOTAL_명의 영상 중 _START_ ~ _END_번째 영상" },
		"language": { "lengthMenu": "페이지당 _MENU_ 개씩 보기",
						   "processing": "<img src='https://cdn.jsdelivr.net/gh/praster1/statground_cdn/images/tati/9.png' width='35%'/>"},
	} );
	
	table.on( 'responsive-resize', function ( e, datatable, columns ) {
		var count = columns.reduce( function (a,b) {
			return b === false ? a+1 : a;
		}, 0 );
	} );		
};