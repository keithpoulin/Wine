package lka.wine.jdbc;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Arrays;
import java.util.List;

import lka.wine.dao.Vineyard;

public class VineyardsTable extends AbstractTable<Vineyard> {

	private final static String tableName = "Vineyards";
	private final static List<String> columnNames = Arrays.asList("VineyardID", "Vineyard");

	@Override
	public Vineyard getObject(ResultSet rs) throws SQLException {
		Vineyard vineyard = new Vineyard();	
		vineyard.setVineyardId(rs.getInt("VineyardID"));
		vineyard.setVineyard(rs.getString("Vineyard"));
		return vineyard;
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