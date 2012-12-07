package lka.wine.dao;

public class Varietal extends AbstractDao {
	private int varietalId;
	private String varietal;
	private String type;
	
	public int getVarietalId() {
		return varietalId;
	}
	public void setVarietalId(int varietalId) {
		this.varietalId = varietalId;
	}
	public String getVarietal() {
		return varietal;
	}
	public void setVarietal(String varietal) {
		this.varietal = varietal;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	@Override
	public int getId() {
		return getVarietalId();
	}
	@Override
	public void setId(int id) {
		setVarietalId(id);
	}
}
