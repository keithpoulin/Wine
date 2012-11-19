package lka.wine.jdbc;

import lka.wine.dao.WineCellar;

public class WineCellarQuery {
	public WineCellar select() throws Exception {	
		
		WineCellar wineCellar = new WineCellar();
		wineCellar.setBrands(new BrandsTable().select());
		wineCellar.setLocations(new LocationsTable().select());
		wineCellar.setLocationTypes(new LocationTypesTable().select());
		wineCellar.setPurchases(new PurchasesTable().select());
		wineCellar.setRegions(new RegionsTable().select());
		wineCellar.setTastingNotes(new TastingNotesTable().select());
		wineCellar.setVarietals(new VarietalsTable().select());
		wineCellar.setVineyards(new VineyardsTable().select());
		wineCellar.setWines(new WinesTable().select());
		
		return wineCellar;
	}

}
