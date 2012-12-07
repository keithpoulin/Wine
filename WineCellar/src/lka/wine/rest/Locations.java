package lka.wine.rest;

import javax.ws.rs.Path;

import lka.wine.dao.Location;
import lka.wine.jdbc.LocationsTable;

@Path("/WineCellar/locations")
public class Locations extends RestWriter<Location, LocationsTable> {

	public Locations() {
		super(Location.class, LocationsTable.class);
	}

}
