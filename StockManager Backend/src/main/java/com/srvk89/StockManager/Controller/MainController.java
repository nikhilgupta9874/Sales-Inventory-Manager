package com.srvk89.StockManager.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.srvk89.StockManager.Entity.SalesRecord;
import com.srvk89.StockManager.Service.StockManagerService;

@RestController
public class MainController {

	@Autowired
	StockManagerService serv;
	
//	@GetMapping("/salesrecord")
//	public List<SalesRecord> getSalesRecord()
//	{
//		return serv.getRecord();
//	}
	
	@CrossOrigin("http://localhost:3000/")
	@PostMapping("/salesrecords")
	public ResponseEntity<String> putSalesRecord(@RequestBody List<SalesRecord> salesRecords)
	{
		serv.saveAll(salesRecords);
		return new ResponseEntity<>("Hello world", HttpStatus.OK);
	}
}
