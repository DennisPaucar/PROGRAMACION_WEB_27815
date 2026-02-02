package com.espe.test.main;

import com.espe.test.dao.BookDAO;
import com.espe.test.model.Book;
import com.espe.test.utils.Db;

import java.math.BigDecimal;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.List;

public class Main {
    public static void main(String[] args){
        System.out.println("Hola mundo");
        try{
            Connection con = Db.getConnection();
            if(con != null){
                System.out.println("Conexión realizada con exito");
            }else{
                System.out.println("Fallo en la conexión");
            }

        }catch(SQLException e){
            throw new RuntimeException(e);
        }

        BookDAO bookDAO = new BookDAO();
        List<Book> books = bookDAO.findAll();
        for(Book b : books){
            System.out.println(b.getTitle());
        }

        System.out.println("Busqueda por Id");
        Book book = bookDAO.findById(3);
        System.out.println(book.getAuthor());
        System.out.println("/--------------/");

        System.out.println("Nuevo libro:");
        Book book1 = new Book();
        book1.setTitle("Libro 5");
        book1.setAuthor("Autor 5");
        book1.setPrice(new BigDecimal("5.0"));
        System.out.println("Libro nuevo" + bookDAO.create(book1));


        System.out.println("Update");
        Book bookToU = new Book();
        bookToU.setId(1L);
        bookToU.setTitle("Libro 12");
        bookToU.setAuthor("Autor 12");
        bookToU.setPrice(new BigDecimal("35.50"));

        boolean updated = bookDAO.update(bookToU);

        System.out.println("Delete");
        long idDeleted = 2;

        boolean deleted = bookDAO.delete(idDeleted);

        if(deleted){
            System.out.println("Libro eliminado");
        }
    }

}
