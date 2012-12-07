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

import lka.wine.dao.LocationType;
import lka.wine.jdbc.LocationTypesTable;

@Path("/WineCellar/locationTypes")
public class LocationTypes extends AbstractRest{

	@Override
	@GET
	@Produces("application/json")
	public String getAll() throws ServletException {
		String json = null;
		try {
			List<LocationType> locationTypes = new LocationTypesTable().select();
			json = gson.toJson(locationTypes);
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
			LocationType locationType = new LocationTypesTable().select(id);
			json = gson.toJson(locationType);
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
		LocationType locationType = gson.fromJson(data, LocationType.class);
		try {
			new LocationTypesTable().update(locationType);
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
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces("text/plain")
	public String post(String data) throws ServletException {
		String json = null;
		try {
			LocationType locationType = gson.fromJson(data, LocationType.class);
			id = new LocationTypesTable().insert(locationType);
			locationType.setLocationTypeId(id);
			json = gson.toJson(locationType);
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
			new LocationTypesTable().delete(id);
		} catch (Exception e) {
		    throw new ServletException(e);
		}	
	}

}
