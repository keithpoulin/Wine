package lka.wine.rest;

import javax.ws.rs.Path;

import lka.wine.dao.WineSummary;
import lka.wine.jdbc.WineSummaryView;

@Path("/WineCellar/wineSummaries")
public class WineSummaries extends RestReader<WineSummary, WineSummaryView> {

	public WineSummaries() {
		super(WineSummary.class, WineSummaryView.class);
	}

}
