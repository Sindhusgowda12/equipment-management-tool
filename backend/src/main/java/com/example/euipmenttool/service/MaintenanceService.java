package com.example.euipmenttool.service;

import com.example.euipmenttool.model.MaintenanceLog;
import com.example.euipmenttool.model.Equipment;
import com.example.euipmenttool.repository.MaintenanceRepository;
import com.example.euipmenttool.repository.EquipmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class MaintenanceService {
    @Autowired
    private MaintenanceRepository maintenanceRepo;
    @Autowired
    private EquipmentRepository equipmentRepo;

    @Transactional
    public MaintenanceLog logMaintenance(MaintenanceLog log) {
        // 1. Save the log
        MaintenanceLog savedLog = maintenanceRepo.save(log);

        // 2. Business Rule: Auto-update equipment to 'Active'
        Equipment eq = equipmentRepo.findById(log.getEquipmentId())
            .orElseThrow(() -> new RuntimeException("Equipment not found"));
        
        eq.setStatus("Active");
        eq.setLastCleanedDate(log.getMaintenanceDate());
        equipmentRepo.save(eq);

        return savedLog;
    }
}