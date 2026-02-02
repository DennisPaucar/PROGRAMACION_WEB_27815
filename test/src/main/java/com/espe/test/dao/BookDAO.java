package com.espe.test.dao;

import com.espe.test.model.Book;
import com.espe.test.utils.Db;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class BookDAO {
    public List<Book> findAll(){
        String sql = "select id, title, author, price from book order by id DESC;";
        List<Book> books = new ArrayList<Book>();
        Connection conn = null;

        try {
            conn = Db.getConnection();
            PreparedStatement ps = conn.prepareStatement(sql);
            ResultSet rs = ps.executeQuery();
            while(rs.next()){
                Book bookTemp = new Book();
                bookTemp.setId(rs.getLong("id"));
                bookTemp.setTitle(rs.getString("title"));
                bookTemp.setAuthor(rs.getString("author"));
                bookTemp.setPrice(rs.getBigDecimal("price"));
                books.add(bookTemp);
            }
            return  books;
        } catch (SQLException e) {
            throw new RuntimeException(e);
        } finally {
            Db.closeConnection(conn);
        }
    }

    public Book findById(long id){
        String sql = "select id, title, author, price from book where id = ?;";
        Connection conn = null;

        try{
            conn =  Db.getConnection();
            PreparedStatement ps = conn.prepareStatement(sql);
            ps.setLong(1,id);
            ResultSet rs = ps.executeQuery();

            if(!rs.next())
                return null;

            return new Book(rs.getLong("id"),
                            rs.getString("title"),
                            rs.getString("author"),
                            rs.getBigDecimal("price"));
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }finally {
            Db.closeConnection(conn);
        }
    }

    public long create(Book book){
        String sql = "insert into book (title, author, price) values (?, ?, ?);";
        Connection conn = null;

        try{
            conn = Db.getConnection();
            PreparedStatement ps = conn.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            ps.setString(1,book.getTitle());
            ps.setString(2,book.getAuthor());
            ps.setBigDecimal(3,book.getPrice());

            ps.executeUpdate();

            ResultSet rs = ps.getGeneratedKeys();

            if(rs.next()){
                return rs.getLong(1);
            }

            return 0;
        }catch (SQLException e){
            throw new RuntimeException(e);
        }finally {
            Db.closeConnection(conn);
        }

    }

    public boolean update(Book book){
        String sql = "update book set title = ?, author = ?, price = ? where id = ?;";
        Connection conn = null;

        try{
            conn = Db.getConnection();
            PreparedStatement ps = conn.prepareStatement(sql);

            ps.setString(1,book.getTitle());
            ps.setString(2,book.getAuthor());
            ps.setBigDecimal(3,book.getPrice());
            ps.setLong(4,book.getId());

            return ps.executeUpdate() == 1;
        }catch (SQLException e){
            throw new RuntimeException(e);
        }finally {
            Db.closeConnection(conn);
        }
    }

    public boolean delete(long id){
        String sql = "delete from book where id = ?;";
        Connection conn = null;

        try{
            Connection conn = Db.getConnection();
            PreparedStatement ps = conn.prepareStatement(sql);

            ps.setLong(1,id);

            return  ps.executeUpdate() == 1;
        }catch (SQLException e){
            throw new RuntimeException(e);
        }finally{
            Db.closeConnection(conn);
        }
    }
}
