package lka.wine.rest;

import javax.servlet.ServletException;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import lka.wine.jdbc.WineCellarQuery;

@Path("/WineCellar")
public class WineCellar extends AbstractRest {

	@Override
	@GET
	@Produces("application/json")
	public String getAll() throws ServletException {
		String json = null;
		try {
			lka.wine.dao.WineCellar wineCellar = new WineCellarQuery().select();
			json = gson.toJson(wineCellar);
		} catch (Exception e) {
		    throw new ServletException(e);
		}
		return json;
	}

	/*
	 * Get/Read for one ID
	 * Currently unsupported; we do not have multiple WineCellars, so this is unused(non-Javadoc)
	 */
	@Override
	@GET
	@Path("{id}")
	@Produces("application/json")
	public String get(@PathParam("id") int id) throws ServletException {		
	    throw new ServletException(new UnsupportedOperationException());
	}

	/*
	 *Update: as called for by backbone.js 
	 *Currently unsupported
	 */
	@Override
	@PUT
	@Path("{id}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces("text/plain")
	public void put(String data) throws ServletException {
	    throw new ServletException(new UnsupportedOperationException());
	}

	/*
	 *Create: as called for by backbone.js 
	 *Currently unsupported
	 */
	@Override
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces("text/plain")
	public String post(String data) throws ServletException {
	    throw new ServletException(new UnsupportedOperationException());
	}

	/*
	 *Delete: as called for by backbone.js 
	 *Currently unsupported
	 */
	@Override
	@DELETE
	@Path("{id}")
	public void delete(@PathParam("id") int id) throws ServletException {
	    throw new ServletException(new UnsupportedOperationException());
	}	
	
}
