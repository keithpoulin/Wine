package lka.wine.jdbc;

import java.util.ArrayList;
import java.util.List;

import lka.wine.dao.WineCellar;

public class WineCellarQuery implements Restable<WineCellar> {
	public List<WineCellar> select() throws Exception {	
		
		List<WineCellar> wineCellars = new ArrayList<WineCellar>();
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
		wineCellars.add(wineCellar);		

		return wineCellars;
	}

	@Override
	public WineCellar select(int id) throws Exception {
		throw new UnsupportedOperationException();
	}

	@Override
	public int insert(WineCellar obj) throws Exception {
		throw new UnsupportedOperationException();
	}

	@Override
	public int update(WineCellar obj) throws Exception {
		throw new UnsupportedOperationException();
	}

	@Override
	public int delete(WineCellar obj) throws Exception {
		throw new UnsupportedOperationException();
	}

	@Override
	public int delete(int id) throws Exception {
		throw new UnsupportedOperationException();
	}

}
