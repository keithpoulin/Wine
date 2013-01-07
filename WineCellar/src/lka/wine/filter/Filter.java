package lka.wine.filter;

import java.util.Map;

import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.Cookie;
import javax.ws.rs.core.Response;

import lka.wine.dao.User;
import lka.wine.jdbc.UsersTable;

import com.sun.jersey.spi.container.ContainerRequest;
import com.sun.jersey.spi.container.ContainerRequestFilter;

public class Filter implements ContainerRequestFilter {

	@Override
	public ContainerRequest filter(ContainerRequest req) {
		ContainerRequest containerRequest = null;

		Map<String, Cookie> cookies = req.getCookies();
		String userId = cookies.get("userId").getValue();
		
		User user = null;		
		try {
			user= UsersTable.class.newInstance().select(Integer.valueOf(userId));
		} catch (IndexOutOfBoundsException e){
			System.out.println("Could not find a User with an ID of " + userId);
		} catch (NumberFormatException e) {
			e.printStackTrace();
		} catch (InstantiationException e) {
			e.printStackTrace();
		} catch (IllegalAccessException e) {
			e.printStackTrace();
		} catch (Exception e) {
			e.printStackTrace();
		}
		if (user != null){
			containerRequest = req;
		}else{
			throw new WebApplicationException(Response.Status.UNAUTHORIZED);
		}	
		return containerRequest;
	}
}
