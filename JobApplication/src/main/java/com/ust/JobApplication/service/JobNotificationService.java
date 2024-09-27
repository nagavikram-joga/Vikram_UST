package com.ust.JobApplication.service;

import com.ust.JobApplication.model.JobNotification;
import com.ust.JobApplication.repository.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JobNotificationService {

    @Autowired
    private JobRepository jobRepository;

    public JobNotification addJob(JobNotification jobNotification)
    {
        return jobRepository.save(jobNotification);
    }

    public List<JobNotification> getJobs() {
        return jobRepository.findAll();
    }

    public JobNotification getJobById(long id) {
        return jobRepository.findById(id).orElse(null);
    }
}
