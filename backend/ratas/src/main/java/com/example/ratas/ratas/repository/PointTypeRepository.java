package com.example.ratas.ratas.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.ratas.ratas.model.PointType;

@Repository
public interface PointTypeRepository extends JpaRepository<PointType, Long> {

}
