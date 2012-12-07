package lka.wine.rest;

import javax.ws.rs.Path;

import lka.wine.dao.Purchase;
import lka.wine.jdbc.PurchasesTable;

@Path("/WineCellar/purchases")
public class Purchases extends RestBase<Purchase, PurchasesTable> {

	public Purchases() {
		super(Purchase.class, PurchasesTable.class);
	}

}
