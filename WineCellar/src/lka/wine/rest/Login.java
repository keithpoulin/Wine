package lka.wine.rest;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

@Path("/login")
public class Login {
	private enum UserRole{
		ADMIN, READER, WRITER;
	}
	
	@GET
	@Produces("application/json")
	public String login(){
		//Lookup Role in Database, return role
		
		return "{\"role\": \"" + UserRole.ADMIN.toString() + "\"}";
	}
}
