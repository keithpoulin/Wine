package lka.wine.dao;

public class UserRole extends AbstractDao {
	private String userRole;
	private int userRoleId;
	
	public String getUserRole() {
		return userRole;
	}

	public void setUserRole(String userRole) {
		this.userRole = userRole;
	}
	
	public int getUserRoleId() {
		return userRoleId;
	}

	public void setUserRoleId(int userRoleId) {
		this.userRoleId = userRoleId;
	}

	@Override
	public int getId() {
		return userRoleId;
	}

	@Override
	public void setId(int id) {
		userRoleId = id;
	}

}
