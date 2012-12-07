package lka.wine.rest;

import java.util.List;

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

import lka.wine.jdbc.*;


@Path("/WineCellar/locations")
public class Locations extends AbstractRest{

	@Override
	@GET
	@Produces("application/json")
	public String getAll() throws ServletException {
		String json = null;
		try {
			List<lka.wine.dao.Location> location = new LocationsTable().select();
			json = gson.toJson(location);
		} catch (Exception e) {
		    throw new ServletException(e);
		}
		return json;
	}

	/**
	 * Currently unsupported
	 * @throws ServletException 
	 */
	@Override
	@GET
	@Path("{id}")
	@Produces("application/json")
	public String get(@PathParam("id") int id) throws ServletException {
		String json = null;
		try {
			lka.wine.dao.Location location = new LocationsTable().select(id);
			json = gson.toJson(location);
		} catch (Exception e) {
		    throw new ServletException(e);
		}
		return json;
	}

	/**
	 *Update: as called for by backbone.js 
	 *Currently unsupported
	 * @throws ServletException 
	 */
	@Override
	@PUT
	@Path("{id}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces("text/plain")
	public void put(String data) throws ServletException {
		lka.wine.dao.Location location = gson.fromJson(data, lka.wine.dao.Location.class);
		try {
			new LocationsTable().update(location);
		} catch (Exception e) {
		    throw new ServletException(e);
		}
	}

	/**
	 *Create: as called for by backbone.js 
	 *Currently unsupported
	 * @throws ServletException 
	 */
	@Override
	@POST
	@Produces("text/plain")
	public String post(String data) throws ServletException {
		String json = null;		
		try {
			lka.wine.dao.Location location = gson.fromJson(data, lka.wine.dao.Location.class);
			id = new LocationsTable().insert(location);
			location.setLocationId(id);
			json = gson.toJson(location);
		} catch (Exception e) {
		    throw new ServletException(e);
		}
		return json;
	}

	@Override
	@DELETE
	@Path("{id}")
	public void delete(@PathParam("id") int id) throws ServletException {
		try {
			new LocationsTable().delete(id);
		} catch (Exception e) {
		    throw new ServletException(e);
		}	
	}

}
