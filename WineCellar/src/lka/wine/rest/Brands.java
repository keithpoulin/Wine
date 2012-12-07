package lka.wine.rest;

import javax.ws.rs.Path;

import lka.wine.dao.Brand;
import lka.wine.jdbc.BrandsTable;

@Path("/WineCellar/brands")
public class Brands extends RestWriter<Brand, BrandsTable> {

	public Brands() {
		super(Brand.class, BrandsTable.class);
	}

}

