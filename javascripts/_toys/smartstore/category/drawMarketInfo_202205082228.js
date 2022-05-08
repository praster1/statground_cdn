function drawMarketInfo(dataProductInfo)
{
	if (dataProductInfo.checker == 0)
	{
		$("#divMarket_DataExist").hide()
		$("#divMarket_DataNotExist").show()
	}
	else
	{
		$("#avgPrice").empty()
		$("#avgPrice").append("<b>평균 판매 가격:</b> " + dataProductInfo.avgPrice_cum100 + "원")
		drawChart_marketQuantile(dataProductInfo.avgPrice_partial, "table_avgPrice", "원", inputTitle = "백분율별 평균 판매 가격")
		
		$("#avgPurchaseCnt").empty()
		$("#avgPurchaseCnt").append("<b>6개월간 평균 판매량:</b> " + dataProductInfo.avgPurchaseCnt_cum100 + "회")
		drawChart_marketQuantile(dataProductInfo.avgPurchaseCnt, "table_avgPurchaseCnt", "회", inputTitle = "백분율별 평균 판매량")
		
		$("#avgScoreInfo").empty()
		$("#avgScoreInfo").append("<b>평균 평점:</b> " + dataProductInfo.avgScoreInfo_cum100 + "점")
		drawChart_marketQuantile(dataProductInfo.avgScoreInfo, "table_avgScoreInfo", "점", inputTitle = "백분율별 평균 평점")
		
		$("#avgReviewCount").empty()
		$("#avgReviewCount").append("<b>평균 리뷰 수:</b> " + dataProductInfo.avgReviewCount_cum100 + "개")
		drawChart_marketQuantile(dataProductInfo.avgReviewCount, "table_avgReviewCount", "개", inputTitle = "백분율별 평균 리뷰 수")
		
		$("#avgKeepCnt").empty()
		$("#avgKeepCnt").append("<b>평균 찜하기 수:</b> " + dataProductInfo.avgKeepCnt_cum100 + "회")
		drawChart_marketQuantile(dataProductInfo.avgKeepCnt, "table_avgKeepCnt", "회", inputTitle = "백분율별 평균 찜하기 수")
		
		$("#avgDeliveryFee").empty()
		$("#avgDeliveryFee").append("<b>평균 택배비:</b> " + dataProductInfo.avgDeliveryFeeContent_cum100 + "원")
		drawChart_marketQuantile(dataProductInfo.avgDeliveryFeeContent, "table_avgDeliveryFee", "원", inputTitle = "백분율별 평균 택배비")
	

		$("#divMarket_DataExist").show()
		$("#divMarket_DataNotExist").hide()
	}
}