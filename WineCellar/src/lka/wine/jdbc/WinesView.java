package lka.wine.jdbc;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Arrays;
import java.util.List;

import lka.wine.dao.Brand;
import lka.wine.dao.Region;
import lka.wine.dao.Varietal;
import lka.wine.dao.Vineyard;
import lka.wine.dao.Wine;

public class WinesView extends AbstractData<Wine> {

	private final static String tableName = "vwWineSummary";
	private final static List<String> columnNames = Arrays.asList(
			"WineID", "VintageYear", "WineDescription", "ListPrice", "InventoryNotes", 
			"VineyardID", "Vineyard", "BrandID", "BrandName", "VarietalID", 
			"Varietal", "Type", "RegionID", "Region", "SubRegion");
			
	
	@Override
	public Wine getObject(ResultSet rs) throws SQLException {
		Wine wine = new Wine();	
		initObject(rs, wine);
		return wine;
	}
	
	public void initObject(ResultSet rs, Wine wine) throws SQLException {
		Vineyard vineyard = new Vineyard();
		vineyard.setVineyardId(rs.getInt("VineyardID"));
		vineyard.setVineyard(rs.getString("Vineyard"));

		Brand brand = new Brand();
		brand.setBrandId(rs.getInt("BrandID"));
		brand.setBrandName(rs.getString("BrandName"));
		
		Varietal varietal = new Varietal();
		varietal.setVarietalId(rs.getInt("VarietalID"));
		varietal.setVarietal(rs.getString("Varietal"));
		varietal.setType(rs.getString("Type"));
		
		Region region = new Region();
		region.setRegionId(rs.getInt("RegionID"));
		region.setRegion(rs.getString("Region"));
		region.setSubRegion(rs.getString("SubRegion"));
		
		wine.setWineId(rs.getInt("WineID"));
		wine.setVintageYear(rs.getInt("VintageYear"));
		wine.setWineDescription(rs.getString("WineDescription"));
		wine.setListPrice(rs.getBigDecimal("ListPrice"));
		wine.setInventoryNotes(rs.getString("InventoryNotes"));
		wine.setVineyard(vineyard);
		wine.setBrand(brand);
		wine.setVarietal(varietal);
		wine.setRegion(region);
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
	public int setParameters(PreparedStatement pstmt, Wine obj)
			throws SQLException {
		int index = 1;
		pstmt.setInt(index++, obj.getVintageYear());
		pstmt.setString(index++, obj.getWineDescription());
		pstmt.setBigDecimal(index++, obj.getListPrice());
		pstmt.setString(index++, obj.getInventoryNotes());
		pstmt.setInt(index++, obj.getVineyard().getVineyardId());
		pstmt.setString(index++, obj.getVineyard().getVineyard());
		pstmt.setInt(index++, obj.getBrand().getBrandId());
		pstmt.setString(index++, obj.getBrand().getBrandName());
		pstmt.setInt(index++, obj.getVarietal().getVarietalId());
		pstmt.setString(index++, obj.getVarietal().getVarietal());
		pstmt.setString(index++, obj.getVarietal().getType());
		pstmt.setInt(index++, obj.getRegion().getRegionId());
		pstmt.setString(index++, obj.getRegion().getRegion());
		pstmt.setString(index++, obj.getRegion().getSubRegion());
		return index;	
	}

}

