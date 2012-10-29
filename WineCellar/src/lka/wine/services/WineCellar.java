package lka.wine.services;

import java.util.List;
import lka.wine.dao.Varietal;
import lka.wine.dao.Vineyard;
import lka.wine.jdbc.VarietalsTable;
import lka.wine.jdbc.VineyardsTable;

public class WineCellar {

	public int multiply(int x, int y) {
		return x * y;
	}
	
	public Vineyard[] getVineyards() throws Exception {
		
		List<Vineyard> vineyards =  new VineyardsTable().select();	
		return vineyards.toArray(new Vineyard[vineyards.size()]);		
	}
	public Varietal[] getVarietals() throws Exception{
		List<Varietal> varietals = new VarietalsTable().select();
		return varietals.toArray(new Varietal[varietals.size()]);
	}
	
}
