package com.example.ratas.ratas.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.ratas.ratas.model.Publication;
import com.example.ratas.ratas.repository.PublicationRepository;

@RestController
public class PublicationController {

    @Autowired
    private PublicationRepository publicationRepository;

    @GetMapping("/publications")
    public List<Publication> getAllPointTypes() {
        return publicationRepository.findAll();
    }

    @PostMapping("/publications")
    public Publication createEmployee(@RequestBody Publication publication) {
        return publicationRepository.save(publication);
    }

}
