package com.example.ratas.ratas.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.ratas.ratas.model.PointType;
import com.example.ratas.ratas.repository.PointTypeRepository;

@RestController
public class PointTypeController {

    @Autowired
    private PointTypeRepository pointTypeRepository;

    @GetMapping("/pointTypes")
    public List<PointType> getAllPointTypes() {
        return pointTypeRepository.findAll();
    }

}
