package lka.wine.rest;

import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import lka.wine.jdbc.WineCellarQuery;

@Path("/WineCellar")
public class WineCellar extends AbstractRest {

	@Override
	@GET
	@Produces("application/json")
	public String getAll() {
		try {
			lka.wine.dao.WineCellar wineCellar = new WineCellarQuery().select();
			return gson.toJson(wineCellar);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	/*
	 * Get/Read for one ID
	 * Currently unsupported; we do not have multiple WineCellars, so this is unused(non-Javadoc)
	 */
	@Override
	@GET
	@Path("{id}")
	@Produces("application/json")
	public String get(@PathParam("id") int id) {		
		return null;
	}

	/*
	 *Update: as called for by backbone.js 
	 *Currently unsupported
	 */
	@Override
	@PUT
	@Path("{data}")
	@Produces("text/plain")
	public void put(@PathParam("data") String data) {
		// TODO Auto-generated method stub
	}

	/*
	 *Create: as called for by backbone.js 
	 *Currently unsupported
	 */
	@Override
	@POST
	@Path("{data}")
	@Produces("text/plain")
	public int post(@PathParam("data") String data) {
		return id;
	}

	/*
	 *Delete: as called for by backbone.js 
	 *Currently unsupported
	 */
	@Override
	@DELETE
	@Path("{id}")
	public void delete(@PathParam("id") int id) {
		// TODO Auto-generated method stub
		
	}	
	
}
