package com.example.euipmenttool.controller;

import com.example.euipmenttool.model.MaintenanceLog;
import com.example.euipmenttool.service.MaintenanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/maintenance")
@CrossOrigin(origins = "*") // Allows Google AI Studio to communicate with your backend
public class MaintenanceController {

    @Autowired
    private MaintenanceService maintenanceService;

    @PostMapping
    public ResponseEntity<MaintenanceLog> createLog(@RequestBody MaintenanceLog log) {
        // This calls the logic you wrote in MaintenanceService to auto-update the status
        return ResponseEntity.ok(maintenanceService.logMaintenance(log));
    }
}