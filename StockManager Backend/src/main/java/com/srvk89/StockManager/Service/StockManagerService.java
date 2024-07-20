package com.srvk89.StockManager.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.srvk89.StockManager.Entity.SalesRecord;
import com.srvk89.StockManager.Repository.SalesRecordRepository;

@Service
public class StockManagerService {

	SalesRecordRepository repo;
	
	@Autowired
	public StockManagerService(SalesRecordRepository repo)
	{
		this.repo = repo;
	}

	public List<SalesRecord> getRecord() {
		return repo.findAll();
	}

	public void saveAll(List<SalesRecord> li) {
		repo.saveAll(li);
	}
	
	
}
