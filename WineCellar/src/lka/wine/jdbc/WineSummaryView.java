package lka.wine.jdbc;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Arrays;
import java.util.List;

import lka.wine.dao.WineSummary;

public class WineSummaryView extends AbstractData<WineSummary> {

	private final static String tableName = "vwWineSummary";
	private final static List<String> columnNames = Arrays.asList(
			"WineID", "VintageYear", "WineDescription", "ListPrice", 
			"Vineyard", "BrandName", "Varietal", "Region", "SubRegion",
			"PricePer", "MinPrice", "AvgPrice", "MaxPrice", "Qty", "BottlesOnHand");
	
	@Override
	public WineSummary getObject(ResultSet rs) throws SQLException {
		WineSummary wineSummary = new WineSummary();	
		wineSummary.setWineId(rs.getInt("WineID"));
		wineSummary.setVintageYear(rs.getInt("VintageYear"));
		wineSummary.setWineDescription(rs.getString("WineDescription"));
		wineSummary.setListPrice(rs.getBigDecimal("ListPrice"));
		wineSummary.setVineyard(rs.getString("Vineyard"));
		wineSummary.setBrandName(rs.getString("BrandName"));
		wineSummary.setVarietal(rs.getString("Varietal"));
		wineSummary.setRegion(rs.getString("Region"));
		wineSummary.setSubRegion(rs.getString("SubRegion"));
		wineSummary.setPricePer(rs.getString("PricePer"));
		wineSummary.setMinPrice(rs.getBigDecimal("MinPrice"));
		wineSummary.setAvgPrice(rs.getBigDecimal("AvgPrice"));
		wineSummary.setMaxPrice(rs.getBigDecimal("MaxPrice"));
		wineSummary.setQty(rs.getInt("Qty"));
		wineSummary.setQtyOnHand(rs.getInt("BottlesOnHand"));

		return wineSummary;
	}

	@Override
	public String getTableName() {
		return tableName;
	}

	@Override
	public String getIdColumnName() {
		return columnNames.get(0);
	}

	@Override
	public List<String> getColumnNames() {
		return columnNames;
	}

}

