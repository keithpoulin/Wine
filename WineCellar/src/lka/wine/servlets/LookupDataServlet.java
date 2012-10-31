package lka.wine.servlets;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import lka.wine.dao.Brand;
import lka.wine.dao.Location;
import lka.wine.dao.LocationType;
import lka.wine.dao.PurchaseDetail;
import lka.wine.dao.Region;
import lka.wine.dao.TastingNote;
import lka.wine.dao.Varietal;
import lka.wine.dao.Vineyard;
import lka.wine.jdbc.BrandsTable;
import lka.wine.jdbc.LocationTypesTable;
import lka.wine.jdbc.LocationsTable;
import lka.wine.jdbc.RegionsTable;
import lka.wine.jdbc.VarietalsTable;
import lka.wine.jdbc.VineyardsTable;

import com.google.gson.Gson;
import com.google.gson.JsonObject;

public class LookupDataServlet extends HttpServlet {
	protected enum LookupDataType {
		BRANDS, LOCATIONS, LOCATION_TYPES, REGIONS, VARIETALS, VINEYARDS
	}
	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		try {
		Gson gson = new Gson();
		JsonObject result = new JsonObject();
		LookupDataType lookupDataType = LookupDataType.valueOf(request.getParameter("lookupDataType").toUpperCase());
		switch(lookupDataType) {
		case BRANDS:
			List<Brand> brands = new BrandsTable().select();
			result.add("brands", gson.toJsonTree(brands));
			break;
		case LOCATIONS:
			List<Location> locations = new LocationsTable().select();
			result.add("locations", gson.toJsonTree(locations));
			break;
		case LOCATION_TYPES:
			List<LocationType> locationTypes = new LocationTypesTable().select();
			result.add("locationTypes", gson.toJsonTree(locationTypes));
			break;
		case REGIONS:
			List<Region> regions = new RegionsTable().select();
			result.add("regions", gson.toJsonTree(regions));
			break;
		case VARIETALS:
			List<Varietal> varietals = new VarietalsTable().select();
			result.add("varietals", gson.toJsonTree(varietals));
			break;
		case VINEYARDS:
			List<Vineyard> vineyards = new VineyardsTable().select();
			result.add("vineyards", gson.toJsonTree(vineyards));
			break;
		default:
			// TODO:  Handle error				
		}
		response.getWriter().write(gson.toJson(result));
		}
		catch(Exception ex) {
			// TODO:  Handle error							
		}
				
	}
}
