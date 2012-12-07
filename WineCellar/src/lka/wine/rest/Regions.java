package lka.wine.rest;

import javax.ws.rs.Path;

import lka.wine.dao.Region;
import lka.wine.jdbc.RegionsTable;

@Path("/WineCellar/regions")
public class Regions extends RestBase<Region, RegionsTable> {

	public Regions() {
		super(Region.class, RegionsTable.class);
	}

}
