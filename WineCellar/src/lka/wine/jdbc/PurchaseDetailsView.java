package lka.wine.jdbc;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Arrays;
import java.util.List;

import lka.wine.dao.LocationType;
import lka.wine.dao.Purchase;
import lka.wine.dao.PurchaseDetail;

public class PurchaseDetailsView extends AbstractData<PurchaseDetail> {

	private final static String tableName = "vwPurchaseDetails";
	private final static List<String> columnNames = Arrays.asList(
			"PurchaseID", "WineID", "PurchaseDate", "Price", "PricePer", "QtyPurchased",
			"PriceNotes", "BottlesOnHand", "InvLocation", "LocationName", "LocationCity",
			"LocationState", "LocationType");

	@Override
	public PurchaseDetail getObject(ResultSet rs) throws SQLException {
		PurchaseDetail purchaseDetail = new PurchaseDetail();	
		purchaseDetail.setPurchaseId(rs.getInt("PurchaseID"));
		purchaseDetail.setWineId(rs.getInt("WineID"));
		purchaseDetail.setPurchaseDate(rs.getDate("PurchaseDate"));
		purchaseDetail.setPrice(rs.getBigDecimal("Price"));
		purchaseDetail.setPricePer(rs.getString("PricePer"));
		purchaseDetail.setQtyPurchased(rs.getInt("QtyPurchased"));
		purchaseDetail.setPriceNotes(rs.getString("PriceNotes"));
		purchaseDetail.setQtyOnHand(rs.getInt("BottlesOnHand"));
		purchaseDetail.setInvLocation(rs.getString("InvLocation"));
		purchaseDetail.setLocationName(rs.getString("LocationName"));
		purchaseDetail.setLocationCity(rs.getString("LocationCity"));
		purchaseDetail.setLocationState(rs.getString("LocationState"));
		purchaseDetail.setLocationType(rs.getString("LocationType"));
		return purchaseDetail;
	}
	
	public List<PurchaseDetail> select(int wineId) throws Exception {
		String sql = getSelectSql() + " WHERE WineID = ?";
		Connection cn = null;
		CallableStatement cstmt = null;

		try {
			cn = DriverManager.getConnection();
			cstmt = cn.prepareCall(sql);
			cstmt.setInt(1, wineId);
			cstmt.execute();

			return getObjects(cstmt.getResultSet());
		} finally {
			JdbcCloser.close(cn, cstmt);
		}
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
	public int setParameters(CallableStatement cstmt, PurchaseDetail obj)
			throws SQLException {
		int index = 1;
		cstmt.setInt(index++, obj.getWineId());		
		cstmt.setDate(index++, new java.sql.Date(obj.getPurchaseDate().getTime()));		
		cstmt.setBigDecimal(index++, obj.getPrice());		
		cstmt.setString(index++, obj.getPricePer());		
		cstmt.setInt(index++, obj.getQtyPurchased());		
		cstmt.setString(index++, obj.getPriceNotes());		
		cstmt.setInt(index++, obj.getQtyOnHand());		
		cstmt.setString(index++, obj.getInvLocation());		
		cstmt.setString(index++, obj.getLocationName());		
		cstmt.setString(index++, obj.getLocationCity());		
		cstmt.setString(index++, obj.getLocationState());		
		cstmt.setString(index++, obj.getLocationType());
		return index;
	}

}