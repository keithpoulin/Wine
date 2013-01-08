package lka.wine.rest;

import javax.ws.rs.Path;

import lka.wine.dao.UserRole;
import lka.wine.jdbc.UserRolesTable;

@Path("/userRoles")
public class UserRoles extends RestWriter<UserRole, UserRolesTable> {

	public UserRoles() {
		super(UserRole.class, UserRolesTable.class);
	}
}
