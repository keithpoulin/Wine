package lka.wine.jdbc;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import lka.wine.dao.AbstractDao;

public abstract class AbstractData<T> implements Restable<T> {

	public abstract String getTableName();
	public abstract String getIdColumnName();
	public abstract List<String> getColumnNames();
	public abstract T getObject(ResultSet rs) throws SQLException;
	public abstract int setParameters(PreparedStatement pstmt, T obj) throws SQLException;
	
	@Override
	public List<T> select() throws Exception {

		Connection cn = null;
		PreparedStatement pstmt = null;

		try {
			cn = DriverManager.getConnection();
			pstmt = cn.prepareCall(getSelectSql());
			pstmt.execute();

			return getObjects(pstmt.getResultSet());
		} finally {
			JdbcCloser.close(cn, pstmt);
		}
	}
	
	@Override
	public T select(int id) throws Exception {

		Connection cn = null;
		PreparedStatement pstmt = null;

		try {		
			StringBuilder sb = new StringBuilder();
			sb.append(getSelectSql());
			sb.append(" WHERE ");
			sb.append(getIdColumnName());
			sb.append(" = ?");			
					
			cn = DriverManager.getConnection();
			pstmt = cn.prepareCall(sb.toString());			
			pstmt.setInt(1, id);
			pstmt.execute();
			
			List<T> objs =  getObjects(pstmt.getResultSet());
			return objs == null ? null : objs.get(0);
		} finally {
			JdbcCloser.close(cn, pstmt);
		}
	}
	
	@Override
	public int insert(T obj) throws Exception {
		Connection cn = null;
		PreparedStatement pstmt = null;

		try {
			cn = DriverManager.getConnection();
			pstmt = cn.prepareStatement(getInsertSql(), Statement.RETURN_GENERATED_KEYS);
			setParameters(pstmt, obj);
			pstmt.executeUpdate();
			
			ResultSet keys = pstmt.getGeneratedKeys();	      
			keys.next();
		    return keys.getInt(1);

		} finally {
			JdbcCloser.close(cn, pstmt);
		}		
	}
	
	@Override
	public int update(T obj) throws Exception {
		Connection cn = null;
		PreparedStatement pstmt = null;

		try {
			cn = DriverManager.getConnection();
			pstmt = cn.prepareCall(getUpdateSql());
			int index = setParameters(pstmt, obj);
			pstmt.setInt(index++, ((AbstractDao)obj).getId());
			pstmt.execute();
			return pstmt.getUpdateCount();

		} finally {
			JdbcCloser.close(cn, pstmt);
		}		
	}
	
	@Override
	public int delete(T obj) throws Exception {
		return delete (((AbstractDao)obj).getId());
	}

	
	@Override
	public int delete(int id) throws Exception {
		Connection cn = null;
		PreparedStatement pstmt = null;

		try {
			cn = DriverManager.getConnection();
			pstmt = cn.prepareCall(getDeleteSql());
			pstmt.setInt(1, id);
			pstmt.execute();
			return pstmt.getUpdateCount();

		} finally {
			JdbcCloser.close(cn, pstmt);
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
		sb.append("INSERT INTO ");
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
		for (String columnName : columnNames) {
			if (columnName.compareToIgnoreCase(idColumnName) != 0) {
				sb.append(separator);
				sb.append("?");		
				separator = ", ";
			}
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
