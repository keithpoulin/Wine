package lka.wine.jdbc;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Arrays;
import java.util.List;

import lka.wine.dao.Varietal;;

public class VarietalsTable extends AbstractTable<Varietal> {

	private final static String tableName = "Varietals";
	private final static List<String> columnNames = Arrays.asList("VarietalID", "Varietal", "Type");

	@Override
	public Varietal getObject(ResultSet rs) throws SQLException {
		Varietal varietal = new Varietal();	
		varietal.setVarietalId(rs.getInt("VarietalID"));
		varietal.setVarietal(rs.getString("Varietal"));
		varietal.setType(rs.getString("Type"));
		return varietal;
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