package lka.wine.filter;

import java.util.Map;

import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.Cookie;
import javax.ws.rs.core.Response;

import com.sun.jersey.spi.container.ContainerRequest;
import com.sun.jersey.spi.container.ContainerRequestFilter;

public class Filter implements ContainerRequestFilter {

	@Override
	public ContainerRequest filter(ContainerRequest req) {
		ContainerRequest containerRequest = null;

		Map<String, Cookie> cookies = req.getCookies();
		String user = cookies.get("user").getValue();
		if (user != null && (user.equalsIgnoreCase("KEITH") || user.equalsIgnoreCase("NEIL"))){
			containerRequest = req;
		}else{
			throw new WebApplicationException(Response.Status.UNAUTHORIZED);
		}	
		return containerRequest;
	}
}
