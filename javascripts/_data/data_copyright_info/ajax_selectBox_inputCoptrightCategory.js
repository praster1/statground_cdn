function ajax_selectBox_inputCoptrightCategory()
{
	$('#inputCopyrightCategory').select2({
			tags: true,
			multiple: true,
			maximumSelectionLength: 10,
			ajax: {
				url: '/get_sub_table_content_all/?tableType=copyright_info_category',
				dataType: 'json',
				type:'GET',
				// 검색 쿼리를 만든다.
				data: function (params) {
				  var query = {
					search: params.term,
					type: 'public'
				  }

				  // Query parameters will be ?search=[term]&type=public
				  return query;
				}
			}
		});
}