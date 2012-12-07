package lka.wine.rest;

import javax.ws.rs.Path;

import lka.wine.dao.LocationType;
import lka.wine.jdbc.LocationTypesTable;

@Path("/WineCellar/locationTypes")
public class LocationTypes extends RestWriter<LocationType, LocationTypesTable> {

	public LocationTypes() {
		super(LocationType.class, LocationTypesTable.class);
	}

}
