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
import lka.wine.dao.Purchase;
import lka.wine.dao.Region;
import lka.wine.dao.TastingNote;
import lka.wine.dao.Varietal;
import lka.wine.dao.Vineyard;
import lka.wine.dao.Wine;
import lka.wine.jdbc.BrandsTable;
import lka.wine.jdbc.LocationTypesTable;
import lka.wine.jdbc.LocationsTable;
import lka.wine.jdbc.PurchasesTable;
import lka.wine.jdbc.RegionsTable;
import lka.wine.jdbc.TastingNotesTable;
import lka.wine.jdbc.VarietalsTable;
import lka.wine.jdbc.VineyardsTable;
import lka.wine.jdbc.WinesTable;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonObject;

public class LookupDataServlet extends HttpServlet {
	protected enum LookupDataType {
		BRANDS, LOCATIONS, LOCATION_TYPES, PURCHASES, REGIONS, TASTING_NOTES, VARIETALS, VINEYARDS, WINES
	}

	private static final String dateFormat = "MMM dd, yyyy";
	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		try {
			//Gson gson = new Gson();
			Gson gson = new GsonBuilder().setDateFormat(dateFormat).create();
			LookupDataType lookupDataType = LookupDataType.valueOf(request
					.getParameter("lookupDataType").toUpperCase());
			switch (lookupDataType) {
			case BRANDS:
				List<Brand> brands = new BrandsTable().select();
				response.getWriter().write(gson.toJson(brands));
				break;
			case LOCATIONS:
				List<Location> locations = new LocationsTable().select();
				response.getWriter().write(gson.toJson(locations));
				break;
			case LOCATION_TYPES:
				List<LocationType> locationTypes = new LocationTypesTable()
						.select();
				response.getWriter().write(gson.toJson(locationTypes));
				break;
			case PURCHASES:
				List<Purchase> purchases = new PurchasesTable().select();
				response.getWriter().write(gson.toJson(purchases));
				break;
			case REGIONS:
				List<Region> regions = new RegionsTable().select();
				response.getWriter().write(gson.toJson(regions));
				break;
			case TASTING_NOTES:
				List<TastingNote> tastingNotes = new TastingNotesTable().select();
				response.getWriter().write(gson.toJson(tastingNotes));
				break;
			case VARIETALS:
				List<Varietal> varietals = new VarietalsTable().select();
				response.getWriter().write(gson.toJson(varietals));
				break;
			case VINEYARDS:
				List<Vineyard> vineyards = new VineyardsTable().select();
				response.getWriter().write(gson.toJson(vineyards));
				break;
			case WINES:
				List<Wine> wines = new WinesTable().select();
				response.getWriter().write(gson.toJson(wines));
				break;
			default:
				// TODO: Handle error
			}
		} catch (Exception ex) {
			// TODO: Handle error
		}

	}

	protected void doPut(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		try {
			//Gson gson = new Gson();
			Gson gson = new GsonBuilder().setDateFormat(dateFormat).create();

			LookupDataType lookupDataType = LookupDataType.valueOf(request
					.getParameter("lookupDataType").toUpperCase());
			String data = request.getParameter("data");
			switch (lookupDataType) {
			case BRANDS:
				Brand brand = gson.fromJson(data, Brand.class);
				new BrandsTable().insert(brand);				
				break;
			case LOCATIONS:
				Location location = gson.fromJson(data, Location.class);
				new LocationsTable().insert(location);				
				break;
			case LOCATION_TYPES:
				LocationType locationType = gson.fromJson(data, LocationType.class);
				new LocationTypesTable().insert(locationType);				
				break;
			case PURCHASES:
				Purchase purchase = gson.fromJson(data, Purchase.class);
				new PurchasesTable().insert(purchase);				
				break;
			case REGIONS:
				Region region = gson.fromJson(data, Region.class);
				new RegionsTable().insert(region);				
				break;
			case TASTING_NOTES:
				TastingNote tastingNote = gson.fromJson(data, TastingNote.class);
				new TastingNotesTable().insert(tastingNote);				
				break;
			case VARIETALS:
				Varietal varietal = gson.fromJson(data, Varietal.class);
				new VarietalsTable().insert(varietal);				
				break;
			case VINEYARDS:
				Vineyard vineyard = gson.fromJson(data, Vineyard.class);
				new VineyardsTable().insert(vineyard);				
				break;
			case WINES:
				Wine wine = gson.fromJson(data, Wine.class);
				new WinesTable().insert(wine);				
				break;
			default:
				// TODO: Handle error
			}
		} catch (Exception ex) {
			// TODO: Handle error
			ex = ex;
		}
	}
	protected void doPost(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		try {
			//Gson gson = new Gson();
			Gson gson = new GsonBuilder().setDateFormat(dateFormat).create();

			LookupDataType lookupDataType = LookupDataType.valueOf(request
					.getParameter("lookupDataType").toUpperCase());
			String data = request.getParameter("data");
			switch (lookupDataType) {
			case BRANDS:
				Brand brand = gson.fromJson(data, Brand.class);
				new BrandsTable().update(brand);				
				break;
			case LOCATIONS:
				Location location = gson.fromJson(data, Location.class);
				new LocationsTable().update(location);				
				break;
			case LOCATION_TYPES:
				LocationType locationType = gson.fromJson(data, LocationType.class);
				new LocationTypesTable().update(locationType);				
				break;
			case PURCHASES:
				Purchase purchase = gson.fromJson(data, Purchase.class);
				new PurchasesTable().update(purchase);				
				break;
			case REGIONS:
				Region region = gson.fromJson(data, Region.class);
				new RegionsTable().update(region);				
				break;
			case TASTING_NOTES:
				TastingNote tastingNote = gson.fromJson(data, TastingNote.class);
				new TastingNotesTable().update(tastingNote);				
				break;
			case VARIETALS:
				Varietal varietal = gson.fromJson(data, Varietal.class);
				new VarietalsTable().update(varietal);				
				break;
			case VINEYARDS:
				Vineyard vineyard = gson.fromJson(data, Vineyard.class);
				new VineyardsTable().update(vineyard);				
				break;
			case WINES:
				Wine wine = gson.fromJson(data, Wine.class);
				new WinesTable().update(wine);				
				break;
			default:
				// TODO: Handle error
			}
		} catch (Exception ex) {
			// TODO: Handle error
			ex = ex;
		}
	}
	
	protected void doDelete(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		try {
			LookupDataType lookupDataType = LookupDataType.valueOf(request
					.getParameter("lookupDataType").toUpperCase());
			int id = Integer.parseInt(request.getParameter("id"));
			switch (lookupDataType) {
			case BRANDS:
				new BrandsTable().delete(id);				
				break;
			case LOCATIONS:
				new LocationsTable().delete(id);				
				break;
			case LOCATION_TYPES:
				new LocationTypesTable().delete(id);				
				break;
			case PURCHASES:
				new PurchasesTable().delete(id);				
				break;
			case REGIONS:
				new RegionsTable().delete(id);				
				break;
			case TASTING_NOTES:
				new TastingNotesTable().delete(id);				
				break;
			case VARIETALS:
				new VarietalsTable().delete(id);				
				break;
			case VINEYARDS:
				new VineyardsTable().delete(id);				
				break;
			case WINES:
				new WinesTable().delete(id);				
				break;
			default:
				// TODO: Handle error
			}
		} catch (Exception ex) {
			// TODO: Handle error
			ex = ex;
		}
	}
}
