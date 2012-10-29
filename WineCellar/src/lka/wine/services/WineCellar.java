package lka.wine.services;

import java.util.ArrayList;
import java.util.List;

import lka.wine.dao.Varietal;
import lka.wine.dao.Vineyard;

public class WineCellar {

	public int multiply(int x, int y) {
		return x * y;
	}
	
	public Vineyard[] getVineyards() throws Exception {
		
		List<Vineyard> vineyards =  new lka.wine.jdbc.Vineyard().getVineyards();	
		return vineyards.toArray(new Vineyard[vineyards.size()]);		
	}
	public Varietal[] getVarietals() throws Exception{
		List<Varietal> varietals = new lka.wine.jdbc.Varietals().getVarietals();
		return varietals.toArray(new Varietal[varietals.size()]);
	}
	
}
