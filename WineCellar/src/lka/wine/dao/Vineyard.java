package lka.wine.dao;

public class Vineyard extends AbstractDao {
	private int vineyardId;
	private String vineyard;

	public int getVineyardId() {
		return vineyardId;
	}
	public void setVineyardId(int argVineyardId) {
		this.vineyardId = argVineyardId;
	}
	public String getVineyard() {
		return vineyard;
	}
	public void setVineyard(String argVineyard) {
		this.vineyard = argVineyard;
	}
	@Override
	public int getId() {
		return getVineyardId();
	}
	
}
