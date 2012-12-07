package lka.wine.rest;

import javax.ws.rs.Path;

import lka.wine.jdbc.WineDetailsQuery;

@Path("/WineCellar/wineDetails")
public class WineDetails extends RestReader<lka.wine.dao.WineDetails, WineDetailsQuery> {

	public WineDetails() {
		super(lka.wine.dao.WineDetails.class, WineDetailsQuery.class);
	}

}

