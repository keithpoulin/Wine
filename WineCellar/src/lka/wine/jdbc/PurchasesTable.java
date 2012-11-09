package lka.wine.jdbc;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Arrays;
import java.util.List;

import lka.wine.dao.Purchase;
import lka.wine.dao.TastingNote;

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
		purchase.setQtyOnHand(rs.getInt("BottlesOnHand"));
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

	@Override
	public int setInsertParameters(CallableStatement cstmt, Purchase obj)
			throws SQLException {
		int index = 1;
		cstmt.setInt(index++, obj.getLocationId());		
		cstmt.setInt(index++, obj.getWineId());		
		cstmt.setDate(index++, new java.sql.Date(obj.getPurchaseDate().getTime()));		
		cstmt.setBigDecimal(index++, obj.getPrice());		
		cstmt.setString(index++, obj.getPricePer());		
		cstmt.setInt(index++, obj.getQtyPurchased());		
		cstmt.setString(index++, obj.getPriceNotes());		
		cstmt.setInt(index++, obj.getQtyOnHand());		
		cstmt.setString(index++, obj.getInvLocation());		
		return index;
	}

}