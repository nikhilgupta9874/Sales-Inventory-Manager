package com.srvk89.StockManager.Entity;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "SalesRecord")
public class SalesRecord {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	private String product;
	private int quantity;
	private double salesPrice;
	private String customer;
	private LocalDate salesDate;
	String orderType;
	
	public SalesRecord() {
		super();
		// TODO Auto-generated constructor stub
	}
	public SalesRecord(String product, int quantity, double salesPrice, String customer, LocalDate salesDate,
			String orderType) {
		super();
		this.product = product;
		this.quantity = quantity;
		this.salesPrice = salesPrice;
		this.customer = customer;
		this.salesDate = salesDate;
		this.orderType = orderType;
	}
	
	public long getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getProduct() {
		return product;
	}
	public void setProduct(String product) {
		this.product = product;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public double getSalesPrice() {
		return salesPrice;
	}
	public void setSalesPrice(double salesPrice) {
		this.salesPrice = salesPrice;
	}
	public String getCustomer() {
		return customer;
	}
	public void setCustomer(String customer) {
		this.customer = customer;
	}
	public LocalDate getSalesDate() {
		return salesDate;
	}
	public void setSalesDate(LocalDate salesDate) {
		this.salesDate = salesDate;
	}
	public String getOrderType() {
		return orderType;
	}
	public void setOrderType(String orderType) {
		this.orderType = orderType;
	}
	@Override
	public String toString() {
		return "SalesRecord [id=" + id + ", product=" + product + ", quantity=" + quantity + ", salesPrice="
				+ salesPrice + ", customer=" + customer + ", salesDate=" + salesDate + ", orderType=" + orderType + "]";
	}
}
