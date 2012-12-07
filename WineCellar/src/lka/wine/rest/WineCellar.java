package lka.wine.rest;

import javax.ws.rs.Path;

import lka.wine.jdbc.WineCellarQuery;

@Path("/WineCellar")
public class WineCellar extends RestSimpleReader<lka.wine.dao.WineCellar, WineCellarQuery> {

	public WineCellar() {
		super(lka.wine.dao.WineCellar.class, WineCellarQuery.class);
	}

}

