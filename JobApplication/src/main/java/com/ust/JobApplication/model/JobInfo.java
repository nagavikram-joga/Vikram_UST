package com.ust.JobApplication.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class JobInfo {
    @Id
    private long jobId;
    private String jobTitle;
    private String description;
    private String location;
    private long salary;

    //extra
    private String skillsRequired;

}
