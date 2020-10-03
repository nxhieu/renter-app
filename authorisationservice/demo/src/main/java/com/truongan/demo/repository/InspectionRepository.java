package com.truongan.demo.repository;

import com.truongan.demo.model.Inspection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface InspectionRepository extends JpaRepository<Inspection, Long> {
    Optional<Inspection> findById(Long id);
}
