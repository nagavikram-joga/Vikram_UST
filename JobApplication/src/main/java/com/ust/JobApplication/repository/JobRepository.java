package com.ust.JobApplication.repository;

import com.ust.JobApplication.model.JobInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JobRepository extends JpaRepository<JobInfo,Long> {
}
