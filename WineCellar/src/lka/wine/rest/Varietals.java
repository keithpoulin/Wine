package lka.wine.rest;

import javax.ws.rs.Path;

import lka.wine.dao.Varietal;
import lka.wine.jdbc.VarietalsTable;

@Path("/WineCellar/varietals")
public class Varietals extends RestWriter<Varietal, VarietalsTable> {

	public Varietals() {
		super(Varietal.class, VarietalsTable.class);
	}

}
