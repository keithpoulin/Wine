package lka.wine.servlets;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import lka.wine.dao.PurchaseDetail;
import lka.wine.dao.TastingNote;
import lka.wine.dao.WineDetails;
import lka.wine.jdbc.WineDetailsQuery;


public class WineDetailsServlet extends HttpServlet {
	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		
		// The wineId needs to be retrieved from the http query string.  For now it is 
		// hard coded for test purposes only.
		int wineId = 117;
		
		WineDetails wineDetails = null;
		StringBuilder sb = new StringBuilder();
		try {
			wineDetails = new WineDetailsQuery().select(wineId);
		} catch (Exception ex) {
			ex.printStackTrace();
			sb.append(ex.getMessage() + "<br/>");
		}

		if (wineDetails != null) {
			List<PurchaseDetail> purchaseDetails = wineDetails.getPurchaseDetails();
			List<TastingNote> tastingNotes = wineDetails.getTastingNotes();
			sb.append("<H3>");
			sb.append("Purchase Details:");
			sb.append("</H3>");
			if(purchaseDetails != null) {
				for (PurchaseDetail p : purchaseDetails) {				
					sb.append(p.getPurchaseId());
					sb.append("|");
					sb.append(p.getLocationName());
					sb.append("|");
					sb.append(p.getPurchaseDate());
					sb.append("|");
					sb.append(p.getPrice());
					sb.append("|");
					sb.append(p.getPricePer());
					sb.append("|");
					sb.append(p.getQtyPurchased());
					sb.append("|");
					sb.append(p.getQtyOnHand());
					sb.append("|");
					sb.append(p.getPriceNotes());
					sb.append("|");
					sb.append(p.getInvLocation());
					sb.append("<br/>");
				}
			}
			sb.append("<H3>");
			sb.append("Tasting Notes:");
			sb.append("</H3>");
			if(tastingNotes != null) {
				for (TastingNote t : tastingNotes) {				
					sb.append(t.getTastingNoteId());
					sb.append("|");
					sb.append(t.getTastingDate());
					sb.append("|");
					sb.append(t.getReviewedBy());
					sb.append("|");
					sb.append(t.getRating());
					sb.append("|");
					sb.append(t.getReview());
					sb.append("<br/>");
				}	
			}			
		}
		response.getWriter().write(sb.toString());
	}
}
