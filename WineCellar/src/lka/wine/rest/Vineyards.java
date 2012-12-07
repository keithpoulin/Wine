package lka.wine.rest;

import javax.ws.rs.Path;

import lka.wine.dao.Vineyard;
import lka.wine.jdbc.VineyardsTable;

@Path("/WineCellar/vineyards")
public class Vineyards extends RestBase<Vineyard, VineyardsTable> {

	public Vineyards() {
		super(Vineyard.class, VineyardsTable.class);
	}

}
