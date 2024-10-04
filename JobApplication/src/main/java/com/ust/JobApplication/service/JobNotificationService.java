package com.ust.JobApplication.service;

import com.ust.JobApplication.model.JobInfo;
import com.ust.JobApplication.repository.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JobNotificationService {

    @Autowired
    private JobRepository jobRepository;

    public JobInfo addJob(JobInfo jobInfo)
    {
        return jobRepository.save(jobInfo);
    }

    public List<JobInfo> getAllJobs() {
        return jobRepository.findAll();
    }

    public JobInfo getJobById(long id) {
        return jobRepository.findById(id).orElse(null);
    }

    public JobInfo updateJob(Long id, JobInfo jobInfo) {
        JobInfo oldinfo = jobRepository.findById(id).orElse(null);
        if (oldinfo != null) {
            oldinfo.setJobTitle(jobInfo.getJobTitle());
            oldinfo.setDescription(jobInfo.getDescription());
            oldinfo.setLocation(jobInfo.getLocation());
            oldinfo.setSalary(jobInfo.getSalary());
            oldinfo.setSkillsRequired(jobInfo.getSkillsRequired());
            return jobRepository.save(oldinfo);
        }
        return jobInfo;
    }

    public String deletetrainer(Long id) {
        jobRepository.deleteById(id);
        return "trainer info was deleted .....";
    }

}
