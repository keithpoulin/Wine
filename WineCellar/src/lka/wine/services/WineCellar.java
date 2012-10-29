package lka.wine.services;

import java.util.ArrayList;
import java.util.List;

import lka.wine.dao.Vineyard;

public class WineCellar {

	public int multiply(int x, int y) {
		return x * y;
	}
	
	public Vineyard[] getVineyards() throws Exception {
		/*
		List<Vineyard> vineyards = new ArrayList<Vineyard>();
		Vineyard vineyard;
		vineyard = new Vineyard();
		vineyard.setVineyardId(1);
		vineyard.setVineyard("MyVineyard");
		vineyards.add(vineyard);

		vineyard = new Vineyard();
		vineyard.setVineyardId(2);
		vineyard.setVineyard("MyVineyard2");
		vineyards.add(vineyard);

		vineyard = new Vineyard();
		vineyard.setVineyardId(3);
		vineyard.setVineyard("MyVineyard3");
		vineyards.add(vineyard);

		vineyard = new Vineyard();
		vineyard.setVineyardId(4);
		vineyard.setVineyard("MyVineyard4");
		vineyards.add(vineyard);
		*/
		List<Vineyard> vineyards =  new lka.wine.jdbc.Vineyard().getVineyards();	
		return vineyards.toArray(new Vineyard[vineyards.size()]);		
	}
}
