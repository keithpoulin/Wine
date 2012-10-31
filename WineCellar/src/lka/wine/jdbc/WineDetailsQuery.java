package lka.wine.jdbc;

import lka.wine.dao.WineDetails;

public class WineDetailsQuery {
	public WineDetails select(int wineId) throws Exception {	
		WineDetails wineDetails = new WineDetails();
		wineDetails.setTastingNotes(new TastingNotesTable().select(wineId));
		wineDetails.setPurchaseDetails(new PurchaseDetailsView().select(wineId));	
		return wineDetails;
	}
}
