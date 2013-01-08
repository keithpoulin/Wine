package lka.wine.jdbc;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Arrays;
import java.util.List;

import lka.wine.dao.User;

import com.google.common.base.Strings;


public class UsersTable extends AbstractData<User> {

	private final static String tableName = "Users";
	private final static List<String> columnNames = Arrays.asList("UserID", "UserRoleID", "UserName", "Email" );
	
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
	public User getObject(ResultSet rs) throws SQLException {
		User user = new User();	
		user.setUserId(rs.getInt("UserID"));
		user.setUserName(Strings.nullToEmpty(rs.getString("UserName")));
		user.setUserRoleId(rs.getInt("UserRoleID"));
		user.setEmail(Strings.nullToEmpty(rs.getString("Email")));
		return user;
	}

	@Override
	public int setParameters(PreparedStatement pstmt, User obj)
			throws SQLException {
		int index = 1;
		pstmt.setInt(index++, obj.getUserRoleId());
		pstmt.setString(index++, obj.getUserName());
		pstmt.setString(index++, obj.getEmail());
		return index;
	}

}
