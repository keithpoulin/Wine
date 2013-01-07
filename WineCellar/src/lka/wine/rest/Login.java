package lka.wine.rest;

import java.util.List;

import javax.ws.rs.CookieParam;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import lka.wine.dao.User;
import lka.wine.jdbc.UsersTable;

@Path("/login")
public class Login{

	private enum UserRole{
		ADMIN, READER, WRITER;
	}
	
	@GET
	@Produces("application/json")
	public String login(@CookieParam(value = "userId") Integer userId){
		User user = null;
		String result = null;
		result = "{\"role\": \"" + "3" + "\"}";
		try {
			user= UsersTable.class.newInstance().select(userId);
			result = "{\"role\": \"" + String.valueOf(user.getUserRole()) + "\"}";
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}
}
