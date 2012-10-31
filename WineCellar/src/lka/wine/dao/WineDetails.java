package lka.wine.dao;

import java.util.List;

public class WineDetails {
	private int wineId;
	private List<PurchaseDetail> purchaseDetails;
	private List<TastingNote> tastingNotes;
	
	public int getWineId() {
		return wineId;
	}
	public void setWineId(int wineId) {
		this.wineId = wineId;
	}
	public List<PurchaseDetail> getPurchaseDetails() {
		return purchaseDetails;
	}
	public void setPurchaseDetails(List<PurchaseDetail> purchaseDetails) {
		this.purchaseDetails = purchaseDetails;
	}
	public List<TastingNote> getTastingNotes() {
		return tastingNotes;
	}
	public void setTastingNotes(List<TastingNote> tastingNotes) {
		this.tastingNotes = tastingNotes;
	}
	
}
