package lka.wine.jdbc;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Arrays;
import java.util.List;

import lka.wine.dao.Purchase;

public class PurchasesTable extends AbstractData<Purchase> {

	private final static String tableName = "Purchases";
	private final static List<String> columnNames = Arrays.asList(
			"PurchaseID", "LocationID", "WineID", "PurchaseDate", "Price", 
			"PricePer", "QtyPurchased", "PriceNotes", "BottlesOnHand", "InvLocation");

	@Override
	public Purchase getObject(ResultSet rs) throws SQLException {
		Purchase purchase = new Purchase();	
		purchase.setPurchaseId(rs.getInt("PurchaseID"));
		purchase.setLocationId(rs.getInt("LocationID"));
		purchase.setWineId(rs.getInt("WineID"));
		purchase.setPurchaseDate(rs.getDate("PurchaseDate"));
		purchase.setPrice(rs.getBigDecimal("Price"));
		purchase.setPricePer(rs.getString("PricePer"));
		purchase.setQtyPurchased(rs.getInt("QtyPurchased"));
		purchase.setPriceNotes(rs.getString("PriceNotes"));
		purchase.setBottlesOnHand(rs.getInt("BottlesOnHand"));
		purchase.setInvLocation(rs.getString("InvLocation"));
		return purchase;
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