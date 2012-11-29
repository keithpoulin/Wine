package lka.wine.rest;

import java.util.List;

import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import lka.wine.dao.LocationType;
import lka.wine.jdbc.LocationTypesTable;

@Path("/WineCellar/locationTypes")
public class LocationTypes extends AbstractRest{

	@Override
	@GET
	@Produces("application/json")
	public String getAll() {
		try {
			List<LocationType> locationTypes = new LocationTypesTable().select();
			return gson.toJson(locationTypes);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	/**
	 * Currently unsupported
	 */
	@Override
	@GET
	@Path("{id}")
	@Produces("application/json")
	public String get(@PathParam("id") int id) {
		try {
			List<LocationType> locationTypes = new LocationTypesTable().select(id);
			return gson.toJson(locationTypes);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	/**
	 *Update: as called for by backbone.js 
	 *Currently unsupported
	 */
	@Override
	@PUT
	@Produces("text/plain")
	public void put(String data) {
		LocationType locationType = gson.fromJson(data, LocationType.class);
		try {
			new LocationTypesTable().update(locationType);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	/**
	 *Create: as called for by backbone.js 
	 *Currently unsupported
	 */
	@Override
	@POST
	@Produces("text/plain")
	public String post(String data) {
		LocationType locationType = gson.fromJson(data, LocationType.class);
		try {
			id = new LocationTypesTable().insert(locationType);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return String.valueOf(id);
	}

	@Override
	@DELETE
	@Path("{id}")
	public void delete(@PathParam("id") int id) {
		try {
			new LocationTypesTable().delete(id);
		} catch (Exception e) {
			e.printStackTrace();
		}	
		
	}

}
