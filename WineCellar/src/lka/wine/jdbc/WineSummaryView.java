package lka.wine.jdbc;

import java.sql.CallableStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import lka.wine.dao.Wine;
import lka.wine.dao.WineSummary;

public class WineSummaryView extends AbstractData<WineSummary> {

	private final static String tableName = "vwWineSummary";
	private final static List<String> additionalColumnNames = Arrays.asList(
			"PricePer", "MinPrice", "AvgPrice", "MaxPrice", "Qty", "BottlesOnHand", "MinRating", "AvgRating", "MaxRating");	
	private final static WinesView baseData = new WinesView();
	private final static List<String> columnNames;
	static {
		columnNames = new ArrayList<String>();
		columnNames.addAll(baseData.getColumnNames());
		columnNames.addAll(additionalColumnNames);
	}
	@Override
	public WineSummary getObject(ResultSet rs) throws SQLException {
		WineSummary wineSummary = new WineSummary();	

		baseData.initObject(rs, wineSummary);
		wineSummary.setPricePer(rs.getString("PricePer"));
		wineSummary.setMinPrice(rs.getBigDecimal("MinPrice"));
		wineSummary.setAvgPrice(rs.getBigDecimal("AvgPrice"));
		wineSummary.setMaxPrice(rs.getBigDecimal("MaxPrice"));
		wineSummary.setQty(rs.getInt("Qty"));
		wineSummary.setQtyOnHand(rs.getInt("BottlesOnHand"));
		wineSummary.setMinRating(rs.getInt("MinRating"));
		wineSummary.setAvgRating(rs.getBigDecimal("AvgRating"));
		wineSummary.setMaxRating(rs.getInt("MaxRating"));

		return wineSummary;
	}

	@Override
	public String getTableName() {
		return tableName;
	}

	@Override
	public String getIdColumnName() {
		return baseData.getIdColumnName();
	}

	@Override
	public List<String> getColumnNames() {
		return columnNames;
	}

	@Override
	public int setParameters(CallableStatement cstmt, WineSummary obj)
			throws SQLException {
		int index = baseData.setParameters(cstmt, obj);
		cstmt.setString(index++, obj.getPricePer());
		cstmt.setBigDecimal(index++, obj.getMinPrice());
		cstmt.setBigDecimal(index++, obj.getAvgPrice());
		cstmt.setBigDecimal(index++, obj.getMaxPrice());
		cstmt.setInt(index++, obj.getQty());
		cstmt.setInt(index++, obj.getQtyOnHand());
		cstmt.setInt(index++, obj.getMinRating());
		cstmt.setBigDecimal(index++, obj.getAvgRating());
		cstmt.setInt(index++, obj.getMaxRating());
		return index;
	}

}

