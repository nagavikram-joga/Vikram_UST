package com.ust.JobApplication.controller;

import com.ust.JobApplication.model.JobInfo;
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
    public JobInfo addJob(@RequestBody JobInfo jobInfo)
    {
        return jobNotificationService.addJob(jobInfo);
    }

    @GetMapping("/alljobs")
    public List<JobInfo> getAllJobs()
    {
        return jobNotificationService.getAllJobs();
    }
    @GetMapping("/alljobs/{id}")
    public JobInfo getJobById(@PathVariable long id)
    {
        return jobNotificationService.getJobById(id);
    }

    @PutMapping("/updatejob/{id}")
    public JobInfo updatetrainer(@PathVariable Long id, @RequestBody JobInfo jobInfo){
        return jobNotificationService.updateJob(id,jobInfo);
    }
    @DeleteMapping("/deletejob/{id}")
    public String deletetrainer(@PathVariable Long id){
        return jobNotificationService.deletetrainer(id);
    }

}
