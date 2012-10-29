package lka.wine.jdbc;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Arrays;
import java.util.List;

import lka.wine.dao.Region;

public class RegionsTable extends AbstractTable<Region> {

	private final static String tableName = "Regions";
	private final static List<String> columnNames = Arrays.asList("RegionID", "Region", "SubRegion");

	@Override
	public Region getObject(ResultSet rs) throws SQLException {
		Region region = new Region();	
		region.setRegionId(rs.getInt("RegionID"));
		region.setRegion(rs.getString("Region"));
		region.setSubRegion(rs.getString("SubRegion"));
		return region;
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