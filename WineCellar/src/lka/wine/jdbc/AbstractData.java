package lka.wine.jdbc;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public abstract class AbstractData<T> {

	public abstract String getTableName();
	public abstract String getIdColumnName();
	public abstract List<String> getColumnNames();
	public abstract T getObject(ResultSet rs) throws SQLException;
	
	public List<T> select() throws Exception {

		Connection cn = null;
		CallableStatement cstmt = null;

		try {
			cn = DriverManager.getConnection();
			cstmt = cn.prepareCall(getSelectSql());
			cstmt.execute();

			return getObjects(cstmt.getResultSet());
		} finally {
			JdbcCloser.close(cn, cstmt);
		}
	}
	
	protected List<T> getObjects(ResultSet rs)
			throws Exception {
		List<T> objects = new ArrayList<T>();
		if (rs != null) {
			preGetObjects();
			while (rs.next()) {				
				objects.add(getObject(rs));
			}
		}

		return objects;
	}

	protected void preGetObjects() throws Exception {
		// This method provides a hook to class that may need to do some initial processing before
		// processing the recordset rows.
	}

	protected String getSelectSql() {
		List<String> columnNames = getColumnNames();
		StringBuilder sb = new StringBuilder();
		String separator = "";
		sb.append("SELECT ");
		for (String columnName : columnNames) {
			sb.append(separator);
			sb.append(columnName);
			separator = ", ";
		}
		sb.append(" FROM ");
		sb.append(getTableName());
		return sb.toString();
	}

	protected String getInsertSql() {
		List<String> columnNames = getColumnNames();
		String idColumnName = getIdColumnName();
		StringBuilder sb = new StringBuilder();
		String separator = "";
		sb.append("INSET INTO ");
		sb.append(getTableName());
		sb.append("(");
		for (String columnName : columnNames) {
			if (columnName.compareToIgnoreCase(idColumnName) != 0) {
				sb.append(separator);
				sb.append(columnName);
				separator = ", ";
			}
		}
		sb.append(") VALUES (");
		separator = "";
		for(int i = 1; i < columnNames.size(); i++) {
			sb.append(separator);
			sb.append("?");		
			separator = ", ";
		}
		sb.append(")");
		return sb.toString();
	}

	protected String getUpdateSql() {
		List<String> columnNames = getColumnNames();
		String idColumnName = getIdColumnName();
		StringBuilder sb = new StringBuilder();
		String separator = "";
		sb.append("UPDATE ");
		sb.append(getTableName());
		sb.append(" SET ");
		for (String columnName : columnNames) {
			if (columnName.compareToIgnoreCase(idColumnName) != 0) {
				sb.append(separator);
				sb.append(columnName);
				sb.append(" = ?");
				separator = ", ";
			}
		}
		sb.append(" WHERE ");
		sb.append(idColumnName);
		sb.append(" = ?");

		return sb.toString();
	}

	protected String getDeleteSql() {
		String idColumnName = getIdColumnName();
		StringBuilder sb = new StringBuilder();
		sb.append("DELETE ");
		sb.append(getTableName());
		sb.append(" WHERE ");
		sb.append(idColumnName);
		sb.append(" = ?");

		return sb.toString();
	}

}
