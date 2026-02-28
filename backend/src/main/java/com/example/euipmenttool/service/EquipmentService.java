package com.example.euipmenttool.service;

import com.example.euipmenttool.model.Equipment;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.http.HttpStatus;
import java.time.temporal.ChronoUnit;
import java.time.LocalDate;

@Service
public class EquipmentService {

    public void validateStatus(Equipment eq) {
        if ("Active".equals(eq.getStatus())) {
            // Business Rule: Ensure equipment was cleaned in the last 30 days
            long daysBetween = ChronoUnit.DAYS.between(eq.getLastCleanedDate(), LocalDate.now());
            if (daysBetween > 30) {
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Must be cleaned within 30 days to be Active");
            }
        }
    }
}