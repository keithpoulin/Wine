package lka.wine.jdbc;

import java.util.List;

public interface Restable<T> {
	public List<T> select() throws Exception;
	public T select(int id) throws Exception;
	public int insert(T obj) throws Exception;
	public int update(T obj) throws Exception;
	public int delete(T obj) throws Exception;
	public int delete(int id) throws Exception;
}
