package lka.wine.jdbc;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import lka.wine.dao.PurchaseDetail;
import lka.wine.dao.TastingNote;
import lka.wine.dao.WineDetails;

public class WineDetailsQuery implements Restable<WineDetails> {
	@Override
	public WineDetails select(int wineId) throws Exception {	
		List<TastingNote> tastingNotes = new TastingNotesTable().selectByWineId(wineId);
		List<PurchaseDetail> purchaseDetails = new PurchaseDetailsView().selectByWineId(wineId);
		List<WineDetails> wineDetails = getWineDetails(tastingNotes, purchaseDetails);
		return wineDetails.size() > 0 ? wineDetails.get(0) :  null;
	}
	
	@Override
	public List<WineDetails> select() throws Exception {	
		List<TastingNote> tastingNotes = new TastingNotesTable().select();
		List<PurchaseDetail> purchaseDetails = new PurchaseDetailsView().select();
		return getWineDetails(tastingNotes, purchaseDetails);
	}
	
	protected List<WineDetails> getWineDetails(List<TastingNote> tastingNotes, List<PurchaseDetail> purchaseDetails) {
		Map<Integer, WineDetails> wineDetails = new HashMap<Integer, WineDetails>();
		
		if(tastingNotes != null) {
			for(TastingNote tastingNote : tastingNotes) {
				Integer wineId = Integer.valueOf(tastingNote.getWineId());
				WineDetails wd = wineDetails.get(wineId);
				if(wd == null) {
					wd = new WineDetails();
					wd.setWineId(wineId);
					wd.setPurchaseDetails(new ArrayList<PurchaseDetail>());
					wd.setTastingNotes(new ArrayList<TastingNote>());
					wineDetails.put(wineId, wd);
				}
				wd.getTastingNotes().add(tastingNote);
			}
		}
		
		if(purchaseDetails != null) {
			for(PurchaseDetail purchaseDetail : purchaseDetails) {
				Integer wineId = Integer.valueOf(purchaseDetail.getWineId());
				WineDetails wd = wineDetails.get(wineId);
				if(wd == null) {
					wd = new WineDetails();
					wd.setWineId(wineId);
					wd.setPurchaseDetails(new ArrayList<PurchaseDetail>());
					wd.setTastingNotes(new ArrayList<TastingNote>());
					wineDetails.put(wineId, wd);
				}
				wd.getPurchaseDetails().add(purchaseDetail);
			}
		}
		return new ArrayList<WineDetails>(wineDetails.values());	
	}

	@Override
	public int insert(WineDetails obj) throws Exception {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int update(WineDetails obj) throws Exception {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int delete(WineDetails obj) throws Exception {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int delete(int id) throws Exception {
		// TODO Auto-generated method stub
		return 0;
	}
}
