package lka.wine.services;

import java.util.ArrayList;
import java.util.List;

import lka.wine.dao.Vineyard;

public class WineCellar {

	public int multiply(int x, int y) {
		return x * y;
	}
	
	public Vineyard[] getVineyards() {
		List<Vineyard> vineyards = new ArrayList<Vineyard>();
		Vineyard vineyard;
		vineyard = new Vineyard();
		vineyard.set_vineyardId(1);
		vineyard.set_vineyard("MyVineyard");
		vineyards.add(vineyard);

		vineyard = new Vineyard();
		vineyard.set_vineyardId(2);
		vineyard.set_vineyard("MyVineyard2");
		vineyards.add(vineyard);

		vineyard = new Vineyard();
		vineyard.set_vineyardId(3);
		vineyard.set_vineyard("MyVineyard3");
		vineyards.add(vineyard);

		vineyard = new Vineyard();
		vineyard.set_vineyardId(4);
		vineyard.set_vineyard("MyVineyard4");
		vineyards.add(vineyard);

		
		return vineyards.toArray(new Vineyard[vineyards.size()]);
	}
	
}
