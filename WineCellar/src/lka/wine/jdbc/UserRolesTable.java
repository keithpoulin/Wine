package lka.wine.jdbc;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Arrays;
import java.util.List;

import com.google.common.base.Strings;

import lka.wine.dao.UserRole;

public class UserRolesTable extends AbstractData<UserRole> {
	private static final String tableName = "UserRoles";
	private static final List<String> columnNames = Arrays.asList("UserRoleID", "UserRole");
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
	public UserRole getObject(ResultSet rs) throws SQLException {
		UserRole role = new UserRole();
		role.setId(rs.getInt("UserRoleID"));
		role.setUserRole(Strings.nullToEmpty(rs.getString("UserRole")));
		return role;
	}

	@Override
	public int setParameters(PreparedStatement pstmt, UserRole obj)
			throws SQLException {
		int index = 1;
		pstmt.setString(index++, obj.getUserRole());
		return index;
	}


}
