package lka.wine.dao;

public class User extends AbstractDao {

	private int userId;
	private String userName;
	private String email;
	private int userRole;
	
	
	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public int getUserRole() {
		return userRole;
	}

	public void setUserRole(int userRole) {
		this.userRole = userRole;
	}

	@Override
	public int getId() {
		return getUserId();
	}

	@Override
	public void setId(int id) {
		setUserId(id);
	}

}
