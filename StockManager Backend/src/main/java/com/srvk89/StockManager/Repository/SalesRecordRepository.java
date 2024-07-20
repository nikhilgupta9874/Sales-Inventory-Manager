package com.srvk89.StockManager.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.srvk89.StockManager.Entity.SalesRecord;


@Repository
public interface SalesRecordRepository extends JpaRepository<SalesRecord, Long>{

	List<SalesRecord> findAll();

}
