package com.ust.JobApplication.controller;

import com.ust.JobApplication.model.JobNotification;
import com.ust.JobApplication.service.JobNotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/ust")
public class JobNotificationController {
    @Autowired
    private JobNotificationService jobNotificationService;

    @PostMapping("/addjob")
    public JobNotification addJob(@RequestBody JobNotification jobNotification)
    {
        return jobNotificationService.addJob(jobNotification);
    }

    @GetMapping("/jobs")
    public List<JobNotification> getJobs()
    {
        return jobNotificationService.getJobs();
    }
    @GetMapping("/jobs/{id}")
    public JobNotification getJobById(@PathVariable long id)
    {
        return jobNotificationService.getJobById(id);
    }
}
