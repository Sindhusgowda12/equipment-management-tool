package com.example.euipmenttool.controller;

import com.example.euipmenttool.model.Equipment;
import com.example.euipmenttool.repository.EquipmentRepository;
import com.example.euipmenttool.service.EquipmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/equipment")
@CrossOrigin(origins = "*") 
public class EquipmentController {

    @Autowired
    private EquipmentRepository equipmentRepo;

    @Autowired
    private EquipmentService equipmentService;

    // To show the list in your AI Studio Table
    @GetMapping
    public List<Equipment> getAll() {
        return equipmentRepo.findAll();
    }

    // To handle manual status updates (Workflow 2)
    @PutMapping("/{id}")
    public Equipment updateEquipment(@PathVariable Long id, @RequestBody Equipment details) {
        Equipment existing = equipmentRepo.findById(id)
            .orElseThrow(() -> new RuntimeException("Not found"));
        
        existing.setStatus(details.getStatus());
        
        // This triggers your 30-day Business Rule!
        equipmentService.validateStatus(existing);
        
        return equipmentRepo.save(existing);
    }
}